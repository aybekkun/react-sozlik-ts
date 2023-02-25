import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import TranslateIcon from "@mui/icons-material/Translate";
import { Box, Grid } from "@mui/material";
import useAppSelector from "../../hooks/useAppSelector.hook";
import CategoryTable from "./components/Tables/CategoryTable";
import WordsTable from "./components/Tables/WordsTable";
import Title from "./components/UI/Title";
const AdminMain = () => {
  const { total } = useAppSelector((state) => state.words);
  const { categories } = useAppSelector((state) => state.admin);
  return (
    <>
      <Grid container>
        <Grid mb={2} display={"flex"} xs={12}>
          <Box mr={2} display={"flex"} alignItems="center">
            <TranslateIcon /> {total} sóz
          </Box>
          <Box display={"flex"} alignItems="center">
            <DashboardCustomizeIcon /> {categories.length} category
          </Box>
        </Grid>
        <Grid xs={6}>
          <Title title="Sózler sáne boyınsha" />
          <WordsTable hide={true} />
        </Grid>
        <Grid sx={{ ml: "10px" }} xs={5}>
          <Title title="Kategoriya" />
          <CategoryTable hide={true} />
        </Grid>
      </Grid>
    </>
  );
};

export default AdminMain;
