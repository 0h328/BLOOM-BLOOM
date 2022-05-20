import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import styled from "styled-components";
import Loading from "../components/common/Loading";

const Custom404 = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setIsLogin(true);
    }
  }, []);
  return <Loading text={"404"} />;
};

export default Custom404;
