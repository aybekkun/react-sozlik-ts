import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect } from "react";
import useAppDispatch from "../../../../hooks/useAppDispatch.hook";
import useAppSelector from "../../../../hooks/useAppSelector.hook";
import { deleteCategory, fetchCategoriesByDate } from "../../../../redux/admin/asyncActions";
import { setCategoriesCount } from "../../../../redux/admin/slice";
import DateFormat from "../UI/DateFormat";
import EditButtonCategory from "../UI/EditButtonCategory";
type CategoryTableProps = {
  hide?: boolean;
};
const CategoryTable = ({ hide = false }: CategoryTableProps) => {
  const dispatch = useAppDispatch();
  const { categories, categoriesCount } = useAppSelector((state) => state.admin);
  useEffect(() => {
    dispatch(fetchCategoriesByDate());
  }, [categoriesCount]);

  const onDelete = async (id: number) => {
    if (window.confirm("Delete?")) {
      await dispatch(deleteCategory(id));
      dispatch(setCategoriesCount());
    }
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table size={hide ? "small" : "medium"} sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Latin</TableCell>
              <TableCell align="left">Kiril</TableCell>
              {/*               <TableCell align="left">Total</TableCell> */}
              <TableCell align="left">Kún</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((item) => (
              <TableRow key={item.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell align="left">{item.latin}</TableCell>
                <TableCell align="left">{item.kiril}</TableCell>
                <TableCell align="left">
                  <DateFormat created_at={item.created_at} />
                </TableCell>
                <TableCell align="left">
                  <Stack spacing={1} direction={"row"}>
                    <EditButtonCategory id={item.id} latin={item.latin} kiril={item.kiril} />
                    <IconButton onClick={() => onDelete(item.id)} size="small" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CategoryTable;
