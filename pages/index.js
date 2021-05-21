import yaml from "node-yaml";
import fs from "fs";
import React, { useState } from "react";
import Head from "next/head";
import ToolCard from "../components/ToolCard";
import Chip from "../components/Chip";
import ExploreToolsCard from "../components/ExploreToolsCard";
import H1 from "../components/Text/H1";
import AccentedText from "../components/Text/AccentedText";

export default function Home({ tools }) {
  const [exploreTools, setExploreTools] = useState(null);
  const [framework, setFramework] = useState(null);
  const [language, setLanguage] = useState(null);
  const [license, setLicense] = useState(null);

  const filteredTools = tools.filter((tool) => {
    let isValidFramework = true;
    let isValidLanguage = true;
    let isValidLicense = true;
    let isValidType = true;
    if (exploreTools) {
      isValidType = tool?.type?.includes(exploreTools);
    }
    if (framework) {
      isValidFramework =
        tool.framework?.toLowerCase() === framework.toLowerCase();
    }
    if (language) {
      isValidLanguage = tool.language?.toLowerCase() === language.toLowerCase();
    }
    if (license) {
      isValidLicense = tool.license?.toLowerCase() === license.toLowerCase();
    }
    return isValidFramework && isValidLanguage && isValidLicense && isValidType;
  });

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
            onClick={() => {
              setExploreTools("Charting libraries");
            }}
            text="Charting libraries"
            image="chart"
          />
          <ExploreToolsCard
            onClick={() => setExploreTools("Low-level tools")}
            text="Low-level tools"
            image="lines"
          />
          <ExploreToolsCard
            onClick={() => setExploreTools("Mapping tools")}
            text="Mapping tools"
            image="globe"
          />
          <ExploreToolsCard
            onClick={() => setExploreTools("3D tools")}
            text="3D<br/>tools"
            image="waves"
          />
          <ExploreToolsCard
            onClick={() => setExploreTools("Data grids")}
            text="Data<br/>grids"
            image="waves"
          />
          <ExploreToolsCard
            onClick={() => setExploreTools("Exploration apps")}
            text="Exploration apps"
            image="waves"
          />
        </div>

        <div className="flex flex-items-center mb-sm">
          <AccentedText className="mr-xs">Compatible with</AccentedText>
          <Chip
            active={!framework ? "active" : null}
            onClick={() => setFramework(null)}
          >
            any framework
          </Chip>
          <AccentedText className="mr-xs ml-xs">or</AccentedText>
          <Chip
            className="mr-xs"
            src="/images/logo/react.svg"
            active={framework === "react" ? "active" : null}
            onClick={() => setFramework("react")}
          >
            React
          </Chip>
          <Chip
            className="mr-xs"
            src="/images/logo/angular.svg"
            active={framework === "angular" ? "active" : null}
            onClick={() => setFramework("angular")}
          >
            Angular
          </Chip>
          <Chip
            src="/images/logo/vue.svg"
            active={framework === "vue" ? "active" : null}
            onClick={() => setFramework("vue")}
          >
            Vue
          </Chip>
        </div>
        <div className="flex flex-items-center">
          <AccentedText className="mr-xs">With support for</AccentedText>
          <Chip
            className="mr-xs"
            src="/images/logo/javascript.svg"
            active={language === "javascript" ? "active" : null}
            onClick={() => setLanguage("javascript")}
          >
            JavaScript
          </Chip>
          <Chip
            src="/images/logo/typescript.svg"
            active={language === "typescript" ? "active" : null}
            onClick={() => setLanguage("typescript")}
          >
            TypeScript
          </Chip>
          <AccentedText className="mr-xs ml-xs">With</AccentedText>
          <Chip
            src="/images/logo/open-source.svg"
            active={license === "open-source" ? "active" : null}
            onClick={() => setLicense("open-source")}
          >
            Open source
          </Chip>
          <AccentedText className="mr-xs ml-xs">or</AccentedText>
          <Chip
            src="/images/logo/tag.svg"
            active={license === "proprietary" ? "active" : null}
            onClick={() => setLicense("proprietary")}
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
  const files = fs.readdirSync(`${process.cwd()}/copy/tools`);
  const ids = files.map((filename) => filename.split(".")[0]);
  const tools = [];

  for (const id of ids) {
    const tool = await yaml.read(`${process.cwd()}/copy/tools/${id}.yaml`);
    tools.push({
      id: id,
      ...tool,
    });
  }

  return { props: { tools } };
}
