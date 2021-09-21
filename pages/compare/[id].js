import dynamic from "next/dynamic";
import React, { useState } from "react";
import Head from "next/head";
import H2 from '../../components/Text/H2'
import Header from "../../blocks/ToolPage/Header";
import Description from "../../blocks/ToolPage/Description";
import DescriptionCards from "../../blocks/ToolPage/DescriptionCards";

import fs from "fs";
import { toolCopyPath, getTool } from "../../data/tools";
import useSlackMembers from "../../data/useSlackMembers";

const Gallery = dynamic(() => import("../../blocks/Gallery"));
const Popularity = dynamic(() => import("../../blocks/ToolPage/Popularity"));
const News = dynamic(() => import("../../blocks/ToolPage/News"));
const HowToGetStarted = dynamic(() =>
  import("../../blocks/ToolPage/HowToGetStarted")
);
const HowToGetHelp = dynamic(() => import("../../blocks/ToolPage/HowToGetHelp"));

export default function Tool({id, firstTool, secondTool}) {
  console.log(firstTool);
  console.log(secondTool);

  return (
    <div className="container custom-container mt-lg">
      <Head>
        <title>
          Compare {firstTool.title} and {secondTool.title} — Awesome dataviz
          tools by Cube.js
        </title>
        <meta
          name="description"
          content={`Compare ${firstTool.title} and ${secondTool.title} is one of many awesome data visualization tools for software developers by Cube.js`}
        />
        <meta
          property="twitter:title"
          content={`Compare ${firstTool.title} and ${secondTool.title} — Awesome dataviz tools by Cube.js`}
        />
        <meta
          property="og:title"
          content={`Compare ${firstTool.title} and ${secondTool.title} — Awesome dataviz tools by Cube.js`}
        />
        <meta
          property="og:url"
          content={`https://awesome.cube.dev/compare/${id}`}
        />
      </Head>

      <main>
        <H2>Can’t decide between {firstTool.title} and {secondTool.title}?</H2>
        {/* <Header
          logo={props.logo}
          title={props.title}
          website={props?.links?.website}
          github={props?.slugs?.github}
          achievement={props?.feature_label}
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
        {props.github_data && (
          <Popularity
            slugs={props.slugs}
            github={props.github_data}
            positions={props.positions}
            percentages={props.percentages}
          />
        )}
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
              ? `https://stackoverflow.com/questions/tagged/${encodeURIComponent(
                  props?.tags?.stackoverflow.join(" or ")
                )}`
              : null
          }
          stackoverflow_data={props.stackoverflow_data}
        /> */}
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(toolCopyPath);
  const ids = files
    .filter((filename) => filename.endsWith(".yml"))
    .map((filename) => filename.split(".")[0]);
  
  const paths = []

  ids.forEach(firstTool => {
    ids.forEach(secondTool => {
      if (firstTool !== secondTool) {
        paths.push({
          params: { id: `${firstTool}-vs-${secondTool}`, firstTool: firstTool, secondTool},
        });
      }
    })
  })

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const tools = params.id.split("-vs-")
  const firstTool = await getTool(tools[0]);
  const secondTool = await getTool(tools[1]);

  return {
    props: {
      id: params.id,
      firstTool,
      secondTool,
    },
  };
}
