import React from "react";
import ToolPage from '../../../components/ToolPage/ToolPage';

import fs from "fs";
import { toolCopyPath, getTool } from "../../../data/tools";

export default function Tool(props) {
  return (
    <ToolPage {...props} />
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(toolCopyPath);
  const ids = files
    .filter((filename) => filename.endsWith(".yml"))
    .map((filename) => filename.split(".")[0]);

  const paths = ids.map(id => ({
    params: {
      id
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const tool = await getTool(params.id);

  return {
    props: {
      id: params.id,
      ...tool,
    },
  };
}
