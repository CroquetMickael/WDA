import React, { useState, useEffect } from "react";
import { SiteComponent } from "./Site.component";
import { SiteService } from "./Site.service";

const SiteContainer = () => {
  const [url, setUrl] = useState<string>("");
  const IframeElement = document.getElementById("Iframe")?.innerHTML;

  console.log(IframeElement);

  useEffect(() => {
    SiteService(setUrl);
  }, []);

  return <SiteComponent url={url} />;
};

export { SiteContainer };
