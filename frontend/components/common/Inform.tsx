import React from "react";
import { Box, TextareaAutosize, Typography } from "@mui/material";
function Inform() {
  console.log("inform이야");
  return (
    <Box
      sx={{
        mx: "auto",
        position: "relative",
        backgroundColor: "#FFFAFA",
        height: "100vh",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "10vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "ONEMobileLight",
            fontSize: 30,
            fontWeight: 600,
            mb: "1rem",
            zIndex: "10000",
          }}
        >
          BLOOM BLOOM
        </Typography>
        <Box sx={{ height: "10vh", display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "ONEMobileLight",
              fontSize: 25,
              fontWeight: 600,
              zIndex: "10000",
            }}
          >
            BLOOM BLOOM은 모바일 이용을 권장드립니다
          </Typography>
        </Box>
        {/* <Box sx={{ height: "10vh", display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "ONEMobileLight",
              fontSize: 25,
              fontWeight: 600,
            }}
          ></Typography>
        </Box> */}
        <Box sx={{ height: "10vh", display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "OneMobileLight",
              fontWeight: "600",
              fontSize: "12px",
              color: "#6c6c6c",
              zIndex: "10000",
            }}
          >
            화면에 보이는 예쁜 꽃들로 꽃다발 만들고 가세요 진짜 예쁜데..
          </Typography>
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
            top: "10vh",
            right: "12vh",
          }}
        >
          {" "}
          <img
            src={"/img/hydrangeaBlue.png"}
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
            right: "40vh",
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
            top: "40vh",
            right: "62vh",
          }}
        >
          {" "}
          <img
            src={"/img/lilyYellow.png"}
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
            bottom: "55vh",
            left: "22vh",
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
            bottom: "26vh",
            left: "12vh",
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
            bottom: "26vh",
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
            top: "26vh",
            left: "68vh",
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
            top: "10vh",
            right: "100vh",
          }}
        >
          {" "}
          <img
            src={"/img/tulipPurple.png"}
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
            bottom: "12vh",
            right: "44vh",
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
            right: "66vh",
          }}
        >
          {" "}
          <img
            src={"/img/peonyWhite.png"}
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
            bottom: "77vh",
            left: "44vh",
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
            top: "66vh",
            left: "88vh",
          }}
        >
          {" "}
          <img
            src={"/img/gerberaPink.png"}
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
            bottom: "53vh",
            right: "26vh",
          }}
        >
          {" "}
          <img
            src={"/img/gerberaYellow.png"}
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
            top: "52vh",
            left: "44vh",
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
            bottom: "88vh",
            right: "44vh",
          }}
        >
          {" "}
          <img
            src={"/img/lilyPink.png"}
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
            bottom: "12vh",
            left: "44vh",
          }}
        >
          {" "}
          <img
            src={"/img/peonyPink.png"}
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
            top: "23vh",
            right: "80vh",
          }}
        >
          {" "}
          <img
            src={"/img/sunflowerYellow.png"}
            alt="리본"
            width={"100%"}
            height={"auto%"}
          ></img>
        </Box>
      </Box>
    </Box>
  );
}
export default Inform;
