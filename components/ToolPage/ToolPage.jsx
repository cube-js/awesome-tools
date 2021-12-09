import React from "react";
import dynamic from "next/dynamic";
import { NextSeo } from 'next-seo';
import Header from "./Header";
import Description from "./Description";
import DescriptionCards from "./DescriptionCards";

import useSlackMembers from "../../data/useSlackMembers";
import types from '../../data/types';
import Integrations from './Integrations';

const Gallery = dynamic(() => import("../Gallery"));
const Popularity = dynamic(() => import("./Popularity"));
const HowToGetStarted = dynamic(() => import("./HowToGetStarted"));
const HowToGetHelp = dynamic(() => import("./HowToGetHelp"));

export default function ToolPage(props) {
  const type = types[props.types[0]];
  const slackMembers = useSlackMembers();

  return (
    <>
      <NextSeo
        title={`${props.title} — ${type.descriptor}`}
        description={`${props.title} examples, tutorials, compatibility, and popularity`}
      />

      <div className="container custom-container mt-lg">
        <main>
          <Header
            logo={props.logo}
            title={props.title}
            developer={props.developer}
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
          {props.integrations?.length > 0 && (
            <Integrations integrations={props.integrations} />
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
                  props?.tags?.stackoverflow.join(" or "),
                )}`
                : null
            }
            stackoverflow_data={props.stackoverflow_data}
          />
        </main>
      </div>
    </>
  );
}