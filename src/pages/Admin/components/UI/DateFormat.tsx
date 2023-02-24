import dayjs, { Dayjs } from "dayjs";
import React from "react";
type DateFormatProps = {
  created_at: string | Date | Dayjs;
};
const DateFormat = ({ created_at }:DateFormatProps) => {
  return <span style={{whiteSpace:"nowrap"}}>{dayjs(created_at).format("DD-MM-YYYY HH:mm")}</span>;
};

export default DateFormat;
