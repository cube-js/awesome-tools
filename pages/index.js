import dynamic from "next/dynamic";
import React, { useState } from "react";
import Head from "next/head";
// import ToolCard from "../components/ToolCard";
import Chip from "../components/Chip";
import ExploreToolsCard from "../components/ExploreToolsCard";
import H1 from "../components/Text/H1";
import AccentedText from "../components/Text/AccentedText";
import { getTools } from "../data/tools";
import { filter } from "../data/filter";
const ToolCard = dynamic(() => import("../components/ToolCard"));

export default function Home({ tools }) {
  const [exploreTools, setExploreTools] = useState([]);
  const [framework, setFramework] = useState([]);
  const [language, setLanguage] = useState([]);
  const [license, setLicense] = useState([]);

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
      return true;
    } else {
      array.splice(index, 1);
      set([...array]);
      return false;
    }
  };

  return (
    <div className="container custom-container">
      <Head>
        <title>Awesome Tools - Components Page</title>
        <meta name="description" content="This page for developing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <H1>
          Awesome data visualization tools <br /> for software developers
        </H1>
        <div className="flex flex-space-between mb-md">
          <ExploreToolsCard
            onClick={() => setItem(exploreTools, setExploreTools, "charts")}
            text="Charting libraries"
            image="chart"
          />
          <ExploreToolsCard
            onClick={() => setItem(exploreTools, setExploreTools, "low-level")}
            text="Low-level tools"
            image="lines"
          />
          <ExploreToolsCard
            onClick={() => setItem(exploreTools, setExploreTools, "maps")}
            text="Mapping tools"
            image="globe"
          />
          <ExploreToolsCard
            onClick={() => setItem(exploreTools, setExploreTools, "3d")}
            text="3D<br/>tools"
            image="waves"
          />
          <ExploreToolsCard
            onClick={() => setItem(exploreTools, setExploreTools, "grid")}
            text="Data<br/>grids"
            image="waves"
          />
          <ExploreToolsCard
            onClick={() => setItem(exploreTools, setExploreTools, "app")}
            text="Exploration apps"
            image="waves"
          />
        </div>

        <div className="flex flex-items-center mb-sm">
          <AccentedText className="mr-xs">Compatible with</AccentedText>
          <Chip
            active={framework.length === 0 ? "active" : null}
            onClick={() => setFramework([])}
          >
            any framework
          </Chip>
          <AccentedText className="mr-xs ml-xs">or</AccentedText>
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
        <div className="flex flex-items-center">
          <AccentedText className="mr-xs">With support for</AccentedText>
          <Chip
            className="mr-xs"
            src="/images/logo/javascript.svg"
            active={language.includes("javascript") ? "active" : null}
            onClick={() => setItem(language, setLanguage, "javascript")}
          >
            JavaScript
          </Chip>
          <Chip
            src="/images/logo/typescript.svg"
            active={language.includes("typescript") ? "active" : null}
            onClick={() => setItem(language, setLanguage, "typescript")}
          >
            TypeScript
          </Chip>
          <AccentedText className="mr-xs ml-xs">With</AccentedText>
          <Chip
            src="/images/logo/open-source.svg"
            active={license.includes("open-source") ? "active" : null}
            onClick={() => setItem(license, setLicense, "open-source")}
          >
            Open source
          </Chip>
          <AccentedText className="mr-xs ml-xs">or</AccentedText>
          <Chip
            src="/images/logo/tag.svg"
            active={license.includes("proprietary") ? "active" : null}
            onClick={() => setItem(license, setLicense, "proprietary")}
          >
            Proprietary
          </Chip>
          <AccentedText className="ml-xs">license</AccentedText>
        </div>

        <div className="mt-xlg mb-md">
          <AccentedText>{filteredTools.length} awesome tools</AccentedText>
        </div>

        <div>
          <div className="row">
            {filteredTools &&
              filteredTools.map((tool) => (
                <div className="col-sm-6 mb-md" key={tool.id + Math.random()}>
                  <ToolCard {...tool} />
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const tools = await getTools();
  return { props: { tools } };
}
