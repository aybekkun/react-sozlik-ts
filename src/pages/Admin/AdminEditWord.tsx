import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Button, MenuItem, Select, SelectChangeEvent, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import useAppSelector from "../../hooks/useAppSelector.hook";
import useHandleFile from "../../hooks/useHandleFile.hook";
import useSimpleForm from "../../hooks/useSimpleForm";
import { updateWord } from "../../redux/admin/asyncActions";
import { fetchCategories } from "../../redux/search/asyncActions";
import { fetchSingleWord } from "../../redux/words/asyncActions";
import Antonyms from "./components/Form/Antonyms";
import Synonyms from "./components/Form/Synonyms";
type FormType = {
  latin: string;
  kiril: string;
  description_latin: string;
  description_kiril: string;
};
const AdminEditWord = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.search);
  const { selectedWord } = useAppSelector((state) => state.words);
  const { id } = useParams();
  const [synIds, setSynIds] = useState<number[]>([]);
  const [antIds, setAntIds] = useState<number[]>([]);
  const [cat, setCat] = useState<string>("");
  const { file, handleFile, handleClearFile } = useHandleFile();
  const { formData, handleInputChange, handleSetFormData, handleSubmit, isSendingForm } = useSimpleForm<FormType>(
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
      if (id) {
        await dispatch(updateWord({ id: id, data: fd })).catch((err) => {
          alert("Request failed!");
        });

      }
    }
  );
  const { latin, kiril, description_latin, description_kiril } = formData;
  const onChangeCategories = (event: SelectChangeEvent) => {
    setCat(event.target.value);
  };
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  useEffect(() => {
    if (id) {
      dispatch(fetchSingleWord({ id: id }));
    }
  }, [id]);
  useEffect(() => {
    handleSetFormData({
      latin: selectedWord.latin,
      kiril: selectedWord.kiril,
      description_kiril: selectedWord.description_kiril,
      description_latin: selectedWord.description_latin,
    });
    if (selectedWord.categories.length > 0) {
      setCat(String(selectedWord.categories[0].id));
    }
    if (selectedWord.antonyms) {
      setAntIds(selectedWord.antonyms.map((item) => item.id));
    }
    if (selectedWord.synonyms) {
      setSynIds(selectedWord.synonyms.map((item) => item.id));
    }
  }, [selectedWord]);
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
                <input hidden onChange={handleFile} accept="audio/*" type="file" />
                <VolumeUpIcon />
              </Button>
            </Stack>
            <Stack flex={1} spacing={2}>
              <Synonyms data={selectedWord.synonyms} ids={synIds} onAdd={(arr) => setSynIds(arr)} />
              <Antonyms data={selectedWord.antonyms} ids={antIds} onAdd={(arr) => setAntIds(arr)} />
            </Stack>
          </div>
          <Button disabled={isSendingForm} sx={{ marginTop: "20px" }} type="submit" variant="contained">
            Edit
          </Button>
          {/* <div className="adwords__search-result">
              <ul>{wordsList.length > 0 && wordsList.map((item, i) => <li key={i}>{item.latin}</li>)}</ul>
            </div> */}
        </form>
      </div>
    </>
  );
};

export default AdminEditWord;
