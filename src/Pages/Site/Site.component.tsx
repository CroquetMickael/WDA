import React, { useState, useEffect } from "react";
import { Layout } from "../../Components/Layout/Layout";
import { SiteService } from "./Site.service";

const SiteContainer = () => {
  const [url, setUrl] = useState<string>("");
  const IframeElement = document.getElementById("Iframe")?.innerHTML;

  console.log(IframeElement);

  useEffect(() => {
    SiteService(setUrl);
  }, []);

  return (
    <Layout>
      <iframe
        id="Iframe"
        title="Inline Frame Example"
        className="w-full h-full"
        src={url}
      />
    </Layout>
  );
};

export { SiteContainer };
