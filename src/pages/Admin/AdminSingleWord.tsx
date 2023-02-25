import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Button, MenuItem, Select, SelectChangeEvent, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { translit } from "../../helpers/convertor/convertor";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import useAppSelector from "../../hooks/useAppSelector.hook";
import useHandleFile from "../../hooks/useHandleFile.hook";
import useSimpleForm from "../../hooks/useSimpleForm";
import { createWord } from "../../redux/admin/asyncActions";
import { fetchCategories } from "../../redux/search/asyncActions";
import Antonyms from "./components/Form/Antonyms";
import Synonyms from "./components/Form/Synonyms";
type FormType = {
  latin: string;
  kiril: string;
  description_latin: string;
  description_kiril: string;
};
const AdminSingleWord = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.search);
  const [synIds, setSynIds] = useState<number[]>([]);
  const [antIds, setAntIds] = useState<number[]>([]);
  const [cat, setCat] = useState<string>("");
  const { file, handleFile, handleClearFile } = useHandleFile();
  const { formData, handleInputChange, handleSubmit, isSendingForm, handleSetFormData } = useSimpleForm<FormType>(
    { latin: "", kiril: "", description_latin: "", description_kiril: "" },
    async (args) => {
      const fd = new FormData();
      fd.append("latin", latin.trim());
      fd.append("kiril", kiril.trim());
      fd.append("description_latin", description_latin.trim());
      fd.append("description_kiril", description_kiril.trim());
      //@ts-ignore
      if (file) {
        fd.append("audio", file);
      }

      //@ts-ignore
      fd.append("categories_id", cat);
      //@ts-ignore
      fd.append("synonyms", JSON.parse(JSON.stringify(synIds)));
      //@ts-ignore
      fd.append("antonyms", JSON.parse(JSON.stringify(antIds)));
      await dispatch(createWord(fd))
        .unwrap()
        .catch((err) => {
          alert("Данные не отправлены ошибка сети");
        });
      setSynIds([]);
      setAntIds([]);
      handleClearFile();
      navigate("/admin/words");
    }
  );
  const { latin, kiril, description_latin, description_kiril } = formData;
  const onChangeCategories = (event: SelectChangeEvent) => {
    setCat(event.target.value);
  };
  const onClickConvert = () => {
    handleSetFormData({
      description_latin: translit(description_kiril),
      latin: translit(kiril),
    });
  };
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <>
      <div className="adwords">
        <form onSubmit={handleSubmit}>
          <div className="form">
            <Stack flex={1} spacing={2}>
              <TextField
                value={kiril}
                name="kiril"
                onChange={handleInputChange}
                label="Кириллица"
                fullWidth
                placeholder="Кириллица"
                size="small"
                required
              />
              <TextField
                value={latin}
                onChange={handleInputChange}
                name="latin"
                label="Latin"
                fullWidth
                placeholder="Latin"
                size="small"
                required
              />
              <textarea
                value={description_kiril}
                name="description_kiril"
                onChange={handleInputChange}
                rows={3}
                placeholder="Кириллица тусиндирме *"
                required
              ></textarea>
              <textarea
                onChange={handleInputChange}
                value={description_latin}
                name="description_latin"
                rows={3}
                placeholder="Latin túsindirme *"
                required
              ></textarea>
              <Select value={cat} onChange={onChangeCategories} required>
                {categories.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.latin}
                  </MenuItem>
                ))}
              </Select>
              <Button sx={{ flexShrink: 1 }} color="primary" aria-label="upload mp3" component="label">
                <input hidden onChange={handleFile} accept=".mp3,.ogg,.wav" type="file" />
                <VolumeUpIcon />
              </Button>
            </Stack>
            <Stack flex={1} spacing={2}>
              <Synonyms ids={synIds} onAdd={(arr) => setSynIds(arr)} />
              <Antonyms ids={antIds} onAdd={(arr) => setAntIds(arr)} />
            </Stack>
          </div>
          <Stack sx={{ marginTop: "20px" }} direction={"row"} spacing={2}>
            <Button disabled={isSendingForm} type="submit" variant="contained">
              Submit
            </Button>
            <Button onClick={onClickConvert} variant="contained">
              Convertor
            </Button>
          </Stack>

          {/* <div className="adwords__search-result">
              <ul>{wordsList.length > 0 && wordsList.map((item, i) => <li key={i}>{item.latin}</li>)}</ul>
            </div> */}
        </form>
      </div>
    </>
  );
};

export default AdminSingleWord;
