import { Typography } from "@mui/material";
import { TypographyProps } from "@mui/system";
import React from "react";
type TitleProps = {
  title: string;
  mb?: number;
};
const Title = ({ mb = 2, title, ...props }: TitleProps & TypographyProps) => {
  return (
    <Typography mb={mb} variant="h5" {...props}>
      {title}
    </Typography>
  );
};

export default Title;
