import dynamic from "next/dynamic";
import React, { useState } from "react";
import Head from "next/head";
import H1 from "../../components/Text/H1";
import Header from "../../components/ToolPage/Header";
import Description from "../../components/ToolPage/Description";
import DescriptionCards from "../../components/ToolPage/DescriptionCards";

import fs from "fs";
import { toolCopyPath, readTool } from "../../data/tools";

const Gallery = dynamic(() => import("../../components/Gallery"));

export default function Tool(props) {
  console.log(props);
  return (
    <div className="container custom-container mt-lg">
      <Head>
        <title>Awesome Tools - Components Page</title>
        <meta name="description" content="This page for developing" />
      </Head>

      <main>
        <Header
          logo={props.logo}
          title={props.title}
          website={props?.links?.website}
          github={props?.slugs?.github}
          achievement={props?.achievement}
        />
        <Description based={props.based_on} description={props.description} />
        <DescriptionCards links={props.links} slugs={props.slugs} />
        <Gallery gallery={props.gallery} />
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
}
