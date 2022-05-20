import React from "react";
import { Box, TextareaAutosize, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface loagingProps {
  text: string;
}
function Loading({ text }: loagingProps) {
  return (
    <Box
      style={{}}
      sx={{
        mx: "auto",
        width: 420,
        position: "relative",
        height: "100vh",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#FFFAFA",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            mx: "auto",
            width: "30vh",
            top: "36vh",
            left: "21vh",
          }}
        >
          <motion.div animate={{ scale: 1.1 }} transition={{ yoyo: Infinity }}>
            <Typography sx={{ fontSize: 30, fontFamily: "OneMobileLight", zIndex:10000 }}>
              {text}
            </Typography>
          </motion.div>
        </Box>
        <Box
          sx={{
            position: "absolute",
            mx: "auto",
            width: "10vh",
            top: "10vh",
            left: "10vh",
          }}
        >
          {" "}
          <img
            src={"/img/peonyPurple.png"}
            alt="리본"
            width={"100%"}
            height={"auto%"}
          ></img>
        </Box>
        <Box
          sx={{
            position: "absolute",
            mx: "auto",
            width: "10vh",
            top: "22vh",
            left: "20vh",
          }}
        >
          {" "}
          <motion.div
            animate={{ scale: 1.1 }}
            transition={{ yoyo: Infinity }}
            // animate={{ y: 3 }}
            // transition={{
            //   yoyo: Infinity,
            // }}
          >
            <img
              src={"/img/hydrangeaBlue.png"}
              alt="리본"
              width={"100%"}
              height={"auto%"}
            ></img>
          </motion.div>
        </Box>
        <Box
          sx={{
            position: "absolute",
            mx: "auto",
            width: "10vh",
            top: "50vh",
            right: "5vh",
          }}
        >
          {" "}
          <img
            src={"/img/carnationPink.png"}
            alt="리본"
            width={"100%"}
            height={"auto%"}
          ></img>
        </Box>
        <Box
          sx={{
            position: "absolute",
            mx: "auto",
            width: "10vh",
            top: "20vh",
            right: "1vh",
          }}
        >
          {" "}
          <motion.div animate={{ scale: 1.1 }} transition={{ yoyo: Infinity }}>
            <img
              src={"/img/lilyYellow.png"}
              alt="리본"
              width={"100%"}
              height={"auto%"}
            ></img>
          </motion.div>
        </Box>
        <Box
          sx={{
            position: "absolute",
            mx: "auto",
            width: "10vh",
            bottom: "3vh",
            left: "16vh",
          }}
        >
          {" "}
          <img
            src={"/img/ranunculusPink.png"}
            alt="리본"
            width={"100%"}
            height={"auto%"}
          ></img>
        </Box>
        <Box
          sx={{
            position: "absolute",
            mx: "auto",
            width: "10vh",
            bottom: "8vh",
            right: "5vh",
          }}
        >
          {" "}
          <img
            src={"/img/gerberaOrange.png"}
            alt="리본"
            width={"100%"}
            height={"auto%"}
          ></img>
        </Box>
        <Box
          sx={{
            position: "absolute",
            mx: "auto",
            width: "10vh",
            top: "1vh",
            right: "18vh",
          }}
        >
          {" "}
          <img
            src={"/img/rosePink.png"}
            alt="리본"
            width={"100%"}
            height={"auto%"}
          ></img>
        </Box>
        <Box
          sx={{
            position: "absolute",
            mx: "auto",
            width: "10vh",
            top: "36vh",
            left: "38vh",
          }}
        >
          {" "}
          <img
            src={"/img/lisianthusWhite.png"}
            alt="리본"
            width={"100%"}
            height={"auto%"}
          ></img>
        </Box>
        <Box
          sx={{
            position: "absolute",
            mx: "auto",
            width: "10vh",
            bottom: "10vh",
            left: "4vh",
          }}
        >
          {" "}
          <motion.div animate={{ scale: 1.1 }} transition={{ yoyo: Infinity }}>
            <img
              alt="리본"
              src={"/img/tulipPurple.png"}
              width={"100%"}
              height={"auto%"}
            ></img>
          </motion.div>
        </Box>
        <Box
          sx={{
            position: "absolute",
            mx: "auto",
            width: "10vh",
            top: "30vh",
            left: "4vh",
          }}
        >
          {" "}
          <img
            src={"/img/carnationOrange.png"}
            alt="리본"
            width={"100%"}
            height={"auto%"}
          ></img>
        </Box>
        <Box
          sx={{
            position: "absolute",
            mx: "auto",
            width: "10vh",
            bottom: "22vh",
            right: "2vh",
          }}
        >
          {" "}
          <motion.div animate={{ scale: 1.1 }} transition={{ yoyo: Infinity }}>
            <img
              src={"/img/peonyWhite.png"}
              alt="리본"
              width={"100%"}
              height={"auto%"}
            ></img>
          </motion.div>
        </Box>
        <Box
          sx={{
            position: "absolute",
            mx: "auto",
            width: "10vh",
            bottom: "22vh",
            left: "24vh",
          }}
        >
          {" "}
          <img
            src={"/img/hyacinthPink.png"}
            alt="리본"
            width={"100%"}
            height={"auto%"}
          ></img>
        </Box>
        <Box
          sx={{
            position: "absolute",
            mx: "auto",
            width: "10vh",
            top: "5vh",
            right: "5vh",
          }}
        >
          {" "}
          <img
            src={"/img/tulipRed.png"}
            alt="리본"
            width={"100%"}
            height={"auto%"}
          ></img>
        </Box>
        <Box
          sx={{
            position: "absolute",
            mx: "auto",
            width: "10vh",
            bottom: "42vh",
            left: "15vh",
          }}
        >
          {" "}
          <img
            src={"/img/hydrangeaPurple.png"}
            alt="리본"
            width={"100%"}
            height={"auto%"}
          ></img>
        </Box>
        <Box
          sx={{
            position: "absolute",
            mx: "auto",
            width: "10vh",
            bottom: "22vh",
            left: "0vh",
          }}
        >
          {" "}
          <img
            src={"/img/freesiaPink.png"}
            alt="리본"
            width={"100%"}
            height={"auto%"}
          ></img>
        </Box>
        <Box
          sx={{
            position: "absolute",
            mx: "auto",
            width: "10vh",
            top: "-3vh",
            left: "-2vh",
          }}
        >
          {" "}
          <motion.div animate={{ scale: 1.1 }} transition={{ yoyo: Infinity }}>
            <img
              src={"/img/ranunculusYellow.png"}
              alt="리본"
              width={"100%"}
              height={"auto%"}
            ></img>
          </motion.div>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          mx: "auto",
          top: "59vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      ></Box>
    </Box>
  );
}

export default Loading;
