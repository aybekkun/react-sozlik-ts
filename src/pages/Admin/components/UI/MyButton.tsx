import { Button, ButtonProps } from "@mui/material";
import React from "react";
type MyButtonProps = {
  props: ButtonProps;
};

const MyButton = ({ props }: MyButtonProps) => {
  return (
    <Button size="small" variant="contained" {...props}>
      More
    </Button>
  );
};

export default MyButton;
