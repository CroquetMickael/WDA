import React, { useState } from "react";
import { Layout } from "../../Components/Layout/Layout";
import { Editor } from "./Component/Editor/EditorComponent";

const NewContentComponent = () => {
  return (
    <Layout overflow={false}>
      <Editor />
    </Layout>
  );
};

export { NewContentComponent };
