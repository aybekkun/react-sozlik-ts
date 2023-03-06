import { Box } from "@mui/material";
import CategoryTable from "./components/Tables/CategoryTable";
import AddButtonCategory from "./components/UI/AddButtonCategory";
import Title from "./components/UI/Title";

const AdminCategory = () => {
  return (
    <>
      <Box mb={2} display={"flex"} alignItems="center" justifyContent={"space-between"}>
        <Title mb={0} title="Kategoriya" />
        <AddButtonCategory />
      </Box>
      <CategoryTable />
    </>
  );
};

export default AdminCategory;
