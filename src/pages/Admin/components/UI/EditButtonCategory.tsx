import { Button, Popover, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import useAppDispatch from "../../../../hooks/useAppDispatch.hook";
import useSimpleForm from "../../../../hooks/useSimpleForm";
import { updateCategory } from "../../../../redux/admin/asyncActions";
import { setCategoriesCount } from "../../../../redux/admin/slice";
type EditButtonCategoryProps = {
  id: number;
  latin: string;
  kiril: string;
};

const EditButtonCategory = ({ id, latin, kiril }: EditButtonCategoryProps) => {
  const dispatch = useAppDispatch();

  const { formData, handleInputChange, handleSubmit, isSendingForm } = useSimpleForm(
    { latin: latin, kiril: kiril },
    async () => {
      await dispatch(updateCategory({ id: id, latin: formData.latin.trim(), kiril: formData.kiril.trim() }));
      dispatch(setCategoriesCount());
      handleClose();
    }
  );

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const buttonId = open ? "edit" : undefined;
  return (
    <>
      <Button aria-describedby={buttonId} onClick={handleClick} size="small" variant="contained">
        Edit
      </Button>
      <Popover
        id={buttonId}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box sx={{ width: "10rem", height: "10rem", padding: "5px" }}>
            <TextField
              value={formData.kiril}
              onChange={handleInputChange}
              name="kiril"
              placeholder="Кирилица"
              size="small"
              margin="dense"
            />
            <TextField
              value={formData.latin}
              onChange={handleInputChange}
              name="latin"
              placeholder="Latin"
              size="small"
              margin="dense"
            />
            <Button disabled={isSendingForm} type="submit" variant="contained" size="small" fullWidth>
              Edit
            </Button>
          </Box>
        </form>
      </Popover>
    </>
  );
};

export default EditButtonCategory;
