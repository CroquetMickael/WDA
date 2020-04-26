import React, { useState } from "react";
import { InitService } from "./Init.service";
import { navigate } from "@reach/router";
import { InitComponent } from "./InitComponent";

const InitContainer = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  const init = async () => {
    await InitService(username, password, url);
    navigate("/");
  };
  const InitProps = {
    setUsername,
    setPassword,
    setUrl,
    init,
    password,
    url,
    username
  };

  return <>{<InitComponent {...InitProps} />}</>;
};

export { InitContainer };
