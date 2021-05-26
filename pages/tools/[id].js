import dynamic from "next/dynamic";
import React, { useState } from "react";
import Head from "next/head";
import H1 from "../../components/Text/H1";
import fs from "fs";
// import yaml from "node-yaml";
import { toolCopyPath, readTool } from "../../data/tools";

export default function Tool(props) {
  return (
    <div className="container custom-container">
      <Head>
        <title>Awesome Tools - Components Page</title>
        <meta name="description" content="This page for developing" />
      </Head>

      <main>
        <H1>{props.title}</H1>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(toolCopyPath);
  const ids = files
    .filter((filename) => filename.endsWith(".yml"))
    .map((filename) => filename.split(".")[0]);

  const paths = ids.map((id) => {
    return {
      params: {
        id: id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const tool = await readTool(params.id);

  return {
    props: {
      ...tool,
    },
  };
  // Fetch necessary data for the blog post using params.id
}
