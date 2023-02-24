import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton, Pagination } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Stack } from "@mui/system";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAppDispatch from "../../../../hooks/useAppDispatch.hook";
import useAppSelector from "../../../../hooks/useAppSelector.hook";
import { deleteWord } from "../../../../redux/admin/asyncActions";
import { fetchWords } from "../../../../redux/words/asyncActions";
import { setWordsCount, setWordsPage } from "../../../../redux/words/slice";
import Audio from "../UI/Audio";
import DateFormat from "../UI/DateFormat";
const WordsTable = () => {
  const dispatch = useAppDispatch();
  const { data, currentPage, total, wordsCount } = useAppSelector((state) => state.words);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchWords({ page: currentPage, limit: 10 }));
  }, [currentPage, wordsCount]);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setWordsPage(value));
  };
  const onDelete = async (id: number) => {
    if (window.confirm("Delete?")) {
      await dispatch(deleteWord(id));
      dispatch(setWordsCount());
    }
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sóz</TableCell>
              <TableCell align="left">Сөз</TableCell>
              <TableCell align="left">Audio</TableCell>
              <TableCell align="left">Desc__kiril</TableCell>
              <TableCell align="left">Desc_Latin</TableCell>
              <TableCell align="left">Kategoriya</TableCell>
              <TableCell align="left">Kún</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="item">
                  {item.latin}
                </TableCell>
                <TableCell align="left">{item.kiril}</TableCell>
                <TableCell align="left">
                  <Audio src={item.audio} />
                </TableCell>
                <TableCell align="left">{item.description_latin}</TableCell>
                <TableCell align="left">{item.description_kiril}</TableCell>
                <TableCell align="left">{item.categories.length > 0 && item.categories[0].latin}</TableCell>
                <TableCell align="left">
                  <DateFormat created_at={item.created_at} />
                </TableCell>
                <TableCell align="left">
                  {
                    <Stack spacing={1} direction={"row"}>
                      <Button onClick={()=>navigate("/admin/words/"+item.id)} size="small" variant="contained">
                        Edit
                      </Button>
                      <IconButton onClick={() => onDelete(item.id)} size="small" color="error">
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination sx={{ mt: 2 }} page={currentPage} onChange={handleChange} count={Math.ceil(total / 10)} />
    </>
  );
};

export default WordsTable;
