import React from "react";
import { Layout } from "../../Components/Layout/Layout";
interface BlogConnectProps {
  url: string;
}
const SiteComponent = (props: BlogConnectProps) => (
  <>
    <Layout>
      <iframe
        id="Iframe"
        title="Inline Frame Example"
        className="w-full h-full"
        src={props.url}
      />
    </Layout>
  </>
);

export { SiteComponent };
