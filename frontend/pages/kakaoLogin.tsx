import React, { useEffect, useState } from "react";
import { login } from "../components/apis/auth";

function KakaoLogin() {
  const [code, setCode] = useState<string>();
  useEffect(() => {
    // let code = new URL(window.location.href).searchParams.get("code");
    setCode(new URL(window.location.href).searchParams.get("code"));
    // loginApi(code);
  }, []);

  useEffect(() => {
    if (code !== undefined) loginApi(code);
  }, [code]);

  const loginApi = async (code: string) => {
    try {
      const response = await login(code);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return <></>;
}

export default KakaoLogin;
