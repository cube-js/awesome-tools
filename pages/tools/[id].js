import dynamic from "next/dynamic";
import React, { useState } from "react";
import Head from "next/head";
import Header from "../../components/ToolPage/Header";
import Description from "../../components/ToolPage/Description";
import DescriptionCards from "../../components/ToolPage/DescriptionCards";

import fs from "fs";
import { toolCopyPath, getTool } from "../../data/tools";

const Gallery = dynamic(() => import("../../components/Gallery"));
const Popularity = dynamic(() =>
  import("../../components/ToolPage/Popularity")
);
const News = dynamic(() => import("../../components/ToolPage/News"));
const HowToGetStarted = dynamic(() =>
  import("../../components/ToolPage/HowToGetStarted")
);
const HowToGetHelp = dynamic(() =>
  import("../../components/ToolPage/HowToGetHelp")
);

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
        <DescriptionCards
          licenses={props.licenses}
          frameworks={props.frameworks}
          languages={props.languages}
          links={props.links}
          slugs={props.slugs}
        />
        <Gallery gallery={props.gallery} link={props?.links?.examples} />
        <Popularity github={props.github_data} />
        {props.twitter_feed && (
          <News
            news={props.twitter_feed}
            link={
              props?.tags?.twitter
                ? `https://twitter.com/search?q=${props?.tags?.twitter?.[0]}`
                : "/"
            }
          />
        )}
        {props.content && props.content.length > 0 && (
          <HowToGetStarted content={props.content} />
        )}
        <HowToGetHelp
          logo={props.logo}
          name={props.title}
          links={props.links}
          stackoverflow={
            props?.tags?.stackoverflow
              ? `https://stackoverflow.com/questions/tagged/${props?.tags?.stackoverflow[0]}`
              : null
          }
        />
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
  const tool = await getTool(params.id);

  return {
    props: {
      ...tool,
    },
  };
}
