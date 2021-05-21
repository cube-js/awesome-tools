import React, { useState } from "react";
import Head from "next/head";
import ToolCard from "../components/ToolCard";
import Chip from "../components/Chip";
import ExploreToolsCard from "../components/ExploreToolsCard";
import H1 from "../components/Text/H1";
import AccentedText from "../components/Text/AccentedText";

export default function Home() {
  const [exploreTools, setExploreTools] = useState(null);
  const [framework, setFramework] = useState(null);
  const [language, setLanguage] = useState(null);
  const [license, setLicense] = useState(null);

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
          <AccentedText>34 awesome tools</AccentedText>
        </div>

        <div>
          <div className="row">
            <div className="col-sm mb-md">
              <ToolCard
                title="Chart.js"
                src="/images/logo/chartjs.svg"
                label="easy-to-start"
                description="Simple yet flexible JavaScript charting <br/> for designers & developers"
                language="JavaScript"
                framework="Universal"
                shadow="green"
              />
            </div>
            <div className="col-sm mb-md">
              <ToolCard
                shadow="orange"
                title="Recharts"
                src="/images/logo/recharts.png"
                label="well-documented"
                description="A composable charting library built on React components"
                language="TypeScript"
                framework="React"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm mb-md">
              <ToolCard
                shadow="pink"
                title="Echarts"
                src="/images/logo/echarts.png"
                label="diverse-chart-type"
                description="An Open Source JavaScript Visualization Library"
                language="TypeScript"
                framework="Universal"
              />
            </div>
            <div className="col-sm mb-md">
              <ToolCard
                shadow="blue"
                title="Mapbox GL JS"
                src="/images/logo/mapbox-gl.png"
                label="easy-to-customize"
                description="Interactive, thoroughly customizable maps in the browser, powered by vector tiles and WebGL"
                language="TypeScript"
                framework="Universal"
                developer="mapbox"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm mb-md">
              <ToolCard
                shadow="yellow"
                title="D3.js"
                src="/images/logo/d3.png"
                label="very-popular"
                description="JavaScript library for manipulating documents <br/> based on data"
                language="TypeScript"
                framework="Universal"
              />
            </div>
            <div className="col-sm mb-md">
              <ToolCard
                shadow="gray"
                title="Google Charts"
                src="/images/logo/google-charts.png"
                description="Google chart tools are powerful, simple to use, <br/> and free"
                language="TypeScript"
                framework="Universal"
                developer="google"
              />
            </div>
          </div>
          <div className="row">
            {/* <div className="col-sm mb-md">
              <ToolCard
                shadow="gray"
                title="D3.js"
                src="/images/logo/d3.png"
                label="very-popular"
                description="JavaScript library for manipulating documents <br/> based on data"
                language="TypeScript"
                framework="Universal"
              />
            </div> */}
            <div className="col-sm mb-md">
              <ToolCard
                shadow="gray"
                title="Highcharts"
                src="/images/logo/highcharts.png"
                description="JavaScript charting library based on SVG"
                language="TypeScript"
                framework="Universal"
                developer="highcharts"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
