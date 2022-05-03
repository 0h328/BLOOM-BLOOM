import React from "react";
import { Typography } from "@mui/material";
import { useSpring, animated } from "react-spring";

function Spring() {
  const styles = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <Typography>
      <animated.div style={styles}>로그인중</animated.div>
    </Typography>
  );
}
export default Spring;
