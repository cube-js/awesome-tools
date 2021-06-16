import dynamic from "next/dynamic";
import React, { useState } from "react";
import Head from "next/head";
import Header from "../../components/ToolPage/Header";
import Description from "../../components/ToolPage/Description";
import DescriptionCards from "../../components/ToolPage/DescriptionCards";

import fs from "fs";
import { toolCopyPath, getTool } from "../../data/tools";
import useSlackMembers from "../../data/useSlackMembers";

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
  const slackMembers = useSlackMembers();

  return (
    <div className="container custom-container mt-lg">
      <Head>
        <title>{props.title} — Awesome dataviz tools by Cube.js</title>
        <meta
          name="description"
          content={`${props.title} is one of many awesome data visualization tools for software developers by Cube.js`}
        />
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
        {props.gallery && props.gallery.length !== 0 && (
          <Gallery gallery={props.gallery} link={props?.links?.examples} />
        )}
        <Popularity
          slugs={props.slugs}
          github={props.github_data}
          positions={props.positions}
          percentages={props.percentages}
        />
        {props.twitter_feed && props.twitter_feed.length > 0 && (
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
          slackMembers={slackMembers}
          logo={props.logo}
          name={props.title}
          links={props.links}
          positions={props.positions}
          stackoverflow={
            props?.tags?.stackoverflow
              ? `https://stackoverflow.com/questions/tagged/${props?.tags?.stackoverflow[0]}`
              : null
          }
          stackoverflow_data={props.stackoverflow_data}
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
