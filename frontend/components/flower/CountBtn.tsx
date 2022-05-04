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
          backgroundColor: "rgba(82, 82, 82, 0.29)",
          maxWidth: "80px",
          minWidth: "80px",
          maxHeight: "20px",
          minHeight: "20px",
          marginTop: "5px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={onDecrease}
          style={{
            maxWidth: "20px",
            maxHeight: "20px",
            minWidth: "20px",
            minHeight: "20px",
            // backgroundColor: "white",
          }}
        >
          <RemoveIcon />
        </IconButton>
        <Box
          style={{
            display: "flex",
            textAlign: "center",
            maxWidth: "40px",
            minWidth: "40px",
            backgroundColor: "white",
            justifyContent: "center",
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
            // backgroundColor: "white",
          }}
        >
          <AddIcon />
        </IconButton>
      </ButtonGroup>
    </>
  );
}

export default CountBtn;
