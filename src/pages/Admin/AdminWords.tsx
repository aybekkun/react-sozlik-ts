import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import WordsTable from "./components/Tables/WordsTable";
import Title from "./components/UI/Title";

const AdminWords = () => {
  const nagigate = useNavigate();
  return (
    <>
      <Box mb={2} display={"flex"} alignItems="center" justifyContent={"space-between"}>
        <Title mb={0} title="Sózler" />
        <Button onClick={()=>nagigate("/admin/adwords")} size="small" variant="contained">
          ADD WORD
        </Button>
      </Box>
      <WordsTable />
    </>
  );
};

export default AdminWords;
