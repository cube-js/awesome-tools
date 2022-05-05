import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { filter, setParamsFromRouter } from "../../data/filter";
import allFrameworks from "../../data/frameworks";
import allTypes from "../../data/types";
import Chip from "../Chip";
import ExploreToolsCard from "../ExploreToolsCard";
import H1 from "../Text/H1";
import AccentedText from "../Text/AccentedText";
import { NextSeo } from 'next-seo';

const ToolCard = dynamic(() => import("../ToolCard"));
const ToolsNumberControl = dynamic(() => import("../ToolsNumberControl"));

export default function ListPage({
  tools,
  framework,
  title,
  showType = true,
  showCompatibleWith = true,
  showLicense = true,
}) {
  const router = useRouter();
  const query = router.query;
  const [ isFirstLoad, setLoad ] = useState(false);
  const [ exploreTools, setExploreTools ] = useState([]);
  const [ frameworks, setFrameworks ] = useState([]);
  const [ languages, setLanguages ] = useState([]);
  const [ licenses, setLicenses ] = useState([]);
  const [ renders, setRenders ] = useState([]);

  useEffect(() => {
    if (Object.keys(query).length && !isFirstLoad) {
      setParamsFromRouter(
        query,
        setExploreTools,
        setFrameworks,
        setLanguages,
        setLicenses,
        setRenders,
      );
      setLoad(true);
    }
  }, [ query ]);

  useEffect(() => {
    router.push(
      {
        scroll: false,
        query: {
          ...(framework && { framework }),
          tools: exploreTools,
          ...(!framework && { frameworks }),
          languages,
          licenses,
          renders
        },
      },
      undefined,
      { scroll: false },
    );
  }, [ framework, exploreTools, frameworks, languages, licenses, renders ]);

  const filteredTools = filter(
    tools,
    frameworks,
    languages,
    licenses,
    renders,
    exploreTools,
  );

  const setItem = (array, set, item) => {
    const index = array.indexOf(item);
    if (index === -1) {
      set([ ...array, item ]);
      // return true;
    } else {
      array.splice(index, 1);
      set([ ...array ]);
      // return false;
    }
  };

  return (
    <>
      <NextSeo
        title={`${title} — the awesome list`}
        description={`${title} for application developers: charting libraries, data grids, maps, etc.`}
      />

      <div className="container custom-container">
        <main>
          <H1>{title} <br className="xl-hidden" /> for application developers</H1>

          {showType && (
            <div className="row mb-md">
              {Object.values(allTypes).map(type => (
                <ExploreToolsCard
                  onClick={() => setItem(exploreTools, setExploreTools, type.slug)}
                  active={exploreTools.includes(type.slug) ? "active" : null}
                  text={type.name}
                  image={type.image}
                />
              ))}
            </div>
          )}

          {showCompatibleWith && (
            <div className="flex flex-wrap-row flex-items-center mb-sm">
              <AccentedText className="mr-xs">Compatible with</AccentedText>

              {Object.values(allFrameworks).map(framework => (
                <Chip
                  key={framework.slug}
                  className="mr-xs"
                  icon={framework.icon}
                  title={framework.name}
                  active={frameworks.includes(framework.slug) ? "active" : null}
                  onClick={() => setItem(frameworks, setFrameworks, framework.slug)}
                />
              ))}
            </div>
          )}

          <div className="flex flex-wrap-row flex-items-center mb-sm">
            <AccentedText className="mr-xs">With support for</AccentedText>

            <Chip
              icon="typescript.svg"
              title="TypeScript"
              active={languages.includes("typescript") ? "active" : null}
              onClick={() => setItem(languages, setLanguages, "typescript")} />
            {showLicense && (<AccentedText className="mr-xs ml-xs">and</AccentedText>)}
            {showLicense && (
              <>
                <Chip
                  className="mr-xs"
                  icon="open-source.svg"
                  title="open source"
                  active={licenses.includes("open-source") ? "active" : null}
                  onClick={() => setItem(licenses, setLicenses, "open-source")} />
                <Chip
                  icon="proprietary.svg"
                  title="proprietary"
                  active={licenses.includes("proprietary") ? "active" : null}
                  onClick={() => setItem(licenses, setLicenses, "proprietary")} />
                <AccentedText className="ml-xs">license</AccentedText>
              </>
            )}
          </div>
          <div className="flex flex-wrap-row flex-items-center">
            <AccentedText className="mr-xs">Rendering</AccentedText>

            <Chip
              title="Canvas"
              className="mr-xs"
              active={renders.includes("canvas") ? "active" : null}
              onClick={() => setItem(renders, setRenders, "canvas")} />
            <Chip
              title="SVG"
              className="mr-xs"
              active={renders.includes("svg") ? "active" : null}
              onClick={() => setItem(renders, setRenders, "svg")} />
            <Chip
              title="HTML"
              active={renders.includes("html") ? "active" : null}
              onClick={() => setItem(renders, setRenders, "html")} />
          </div>

          <div className="number-control-wrap">
            <ToolsNumberControl
              filteredTools={filteredTools}
              isChanged={
                exploreTools.length ||
                frameworks.length ||
                languages.length ||
                licenses.length ||
                renders.length
              }
              clearFilters={() => {
                clearFilters([
                  setExploreTools,
                  setFrameworks,
                  setLanguages,
                  setLicenses,
                  setRenders,
                ]);
              }}
            />
          </div>

          <div>
            <div className="row">
              {filteredTools &&
              filteredTools.map((tool) => (
                <div className="col-xl-6 mb-md" key={tool.id + Math.random()}>
                  {/* to lazy load on scroll need to set heigth */}
                  <ToolCard {...tool} />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

function clearFilters(arrayOfFunctions) {
  arrayOfFunctions.forEach((fn) => {
    fn([]);
  });
}
