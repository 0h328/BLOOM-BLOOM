import React from "react";
import { Box, ButtonGroup, IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
interface countProps {
  onDecrease: () => void;
  onIncrease: () => void;
  count: number;
}
function CountBtn({ onDecrease, onIncrease, count }: countProps) {
  return (
    <>
      <ButtonGroup
        variant="text"
        aria-label="text button group"
        style={{
          backgroundColor: "white",
          maxWidth: "80px",
          minWidth: "80px",
          maxHeight: "20px",
          minHeight: "20px",
          marginTop: "5px",
        }}
      >
        <IconButton
          onClick={onDecrease}
          style={{
            maxWidth: "20px",
            maxHeight: "20px",
            minWidth: "20px",
            minHeight: "20px",
          }}
        >
          <RemoveIcon />
        </IconButton>
        <Box
          style={{
            textAlign: "center",
            maxWidth: "40px",
            minWidth: "40px",
          }}
        >
          {count}
        </Box>
        <IconButton
          onClick={onIncrease}
          style={{
            maxWidth: "20px",
            maxHeight: "20px",
            minWidth: "20px",
            minHeight: "20px",
          }}
        >
          <AddIcon />
        </IconButton>
      </ButtonGroup>
      ;
    </>
  );
}

export default CountBtn;
