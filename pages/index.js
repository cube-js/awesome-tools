import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { getTools } from "../data/tools";
import { filter, setParamsFromRouter } from "../data/filter";
import Chip from "../components/Chip";
import ExploreToolsCard from "../components/ExploreToolsCard";
import H1 from "../components/Text/H1";
import AccentedText from "../components/Text/AccentedText";
import { useRouter } from "next/router";
import LazyLoad from "react-lazy-load";

const ToolCard = dynamic(() => import("../components/ToolCard"));
const ToolsNumberControl = dynamic(() =>
  import("../components/ToolsNumberControl")
);

export default function Home({ tools }) {
  const title = 'Awesome dataviz tools by Cube.js';

  const router = useRouter();
  const query = router.query;
  const [isFirstLoad, setLoad] = useState(false);
  const [exploreTools, setExploreTools] = useState([]);
  const [framework, setFramework] = useState([]);
  const [language, setLanguage] = useState([]);
  const [license, setLicense] = useState([]);

  useEffect(() => {
    if (Object.keys(query).length && !isFirstLoad) {
      setParamsFromRouter(
        query,
        setExploreTools,
        setFramework,
        setLanguage,
        setLicense
      );
      setLoad(true);
    }
  }, [query]);

  useEffect(() => {
    router.push(
      {
        scroll: false,
        query: { tools: exploreTools, framework, language, license },
      },
      undefined,
      { scroll: false }
    );
  }, [exploreTools, framework, language, license]);

  const filteredTools = filter(
    tools,
    framework,
    language,
    license,
    exploreTools
  );

  const setItem = (array, set, item) => {
    const index = array.indexOf(item);
    if (index === -1) {
      set([...array, item]);
      // return true;
    } else {
      array.splice(index, 1);
      set([...array]);
      // return false;
    }
  };

  return (
    <div className="container custom-container">
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Awesome data visualization tools for software developers by Cube.js"
        />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://awesome.cube.dev/" />
      </Head>

      <main>
        <H1>
          Awesome data visualization tools <br className="xl-hidden" /> for
          software developers
        </H1>
        <div className="row mb-md">
          <ExploreToolsCard
            onClick={() => setItem(exploreTools, setExploreTools, "charts")}
            active={exploreTools.includes("charts") ? "active" : null}
            text="Charting<br/>libraries"
            image="chart"
          />
          <ExploreToolsCard
            onClick={() => setItem(exploreTools, setExploreTools, "low-level")}
            active={exploreTools.includes("low-level") ? "active" : null}
            text="Low-level<br/>tools"
            image="lines"
          />
          <ExploreToolsCard
            onClick={() => setItem(exploreTools, setExploreTools, "maps")}
            active={exploreTools.includes("maps") ? "active" : null}
            text="Mapping<br/>tools"
            image="globe"
          />
          <ExploreToolsCard
            onClick={() => setItem(exploreTools, setExploreTools, "3d")}
            active={exploreTools.includes("3d") ? "active" : null}
            text="3D<br/>tools"
            image="3d"
          />
          <ExploreToolsCard
            onClick={() => setItem(exploreTools, setExploreTools, "grid")}
            active={exploreTools.includes("grid") ? "active" : null}
            text="Data<br/>grids"
            image="grid"
          />
          <ExploreToolsCard
            onClick={() => setItem(exploreTools, setExploreTools, "app")}
            active={exploreTools.includes("app") ? "active" : null}
            text="Exploration<br/>apps"
            image="apps"
          />
        </div>

        <div className="flex flex-wrap-row flex-items-center mb-sm">
          <AccentedText className="mr-xs">Compatible with</AccentedText>

          <Chip
            className="mr-xs"
            src="/images/logo/react.svg"
            active={framework.includes("react") ? "active" : null}
            onClick={() => setItem(framework, setFramework, "react")}
          >
            React
          </Chip>
          <Chip
            className="mr-xs"
            src="/images/logo/angular.svg"
            active={framework.includes("angular") ? "active" : null}
            onClick={() => setItem(framework, setFramework, "angular")}
          >
            Angular
          </Chip>
          <Chip
            src="/images/logo/vue.svg"
            active={framework.includes("vue") ? "active" : null}
            onClick={() => setItem(framework, setFramework, "vue")}
          >
            Vue
          </Chip>
        </div>
        <div className="flex flex-wrap-row flex-items-center">
          <AccentedText className="mr-xs">With support for</AccentedText>

          <Chip
            src="/images/logo/typescript.svg"
            active={language.includes("typescript") ? "active" : null}
            onClick={() => setItem(language, setLanguage, "typescript")}
          >
            TypeScript
          </Chip>
          <AccentedText className="mr-xs ml-xs">and</AccentedText>
          <Chip
            className="mr-xs"
            src="/images/logo/open-source.svg"
            active={license.includes("open-source") ? "active" : null}
            onClick={() => setItem(license, setLicense, "open-source")}
          >
            open source
          </Chip>
          {/* <AccentedText className="mr-xs ml-xs">or</AccentedText> */}
          <Chip
            src="/images/logo/dollar.svg"
            active={license.includes("proprietary") ? "active" : null}
            onClick={() => setItem(license, setLicense, "proprietary")}
          >
            proprietary
          </Chip>
          <AccentedText className="ml-xs">license</AccentedText>
        </div>

        <div className="number-control-wrap">
          <ToolsNumberControl
            filteredTools={filteredTools}
            isChanged={
              exploreTools.length ||
              framework.length ||
              language.length ||
              license.length
            }
            clearFilters={() => {
              clearFilters([
                setExploreTools,
                setFramework,
                setLanguage,
                setLicense,
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
  );
}

function clearFilters(arrayOfFunctions) {
  arrayOfFunctions.forEach((fn) => {
    fn([]);
  });
}

export async function getStaticProps(params) {
  const tools = await getTools();
  return { props: { tools } };
}
