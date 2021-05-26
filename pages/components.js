import React, { useState } from "react";
import Head from "next/head";
import ToolCard from "../components/ToolCard";
import Chip from "../components/Chip";
import ExploreToolsCard from "../components/ExploreToolsCard";
import Button from "../components/Button";

export default function Home() {
  const [state, setState] = useState(false);
  // setInterval(() => {
  //   setState(!state);
  // }, 1000);
  return (
    <div className="container custom-container">
      <Head>
        <title>Awesome Tools - Components Page</title>
        <meta name="description" content="This page for developing" />
      </Head>

      <main>
        <h1>Components Page</h1>
        <hr></hr>
        <h3>Card</h3>
        <h4>Props:</h4>
        <p>isBig - can make card bigger</p>
        <p>icon - icon src</p>
        <p>text - main text</p>
        <p>footerElement - footer text, may be a link</p>

        <h4>Examples: </h4>
        <hr></hr>
        <h3>Button</h3>
        <h4>Props:</h4>
        <p>href - link href</p>
        <h4>Examples: </h4>
        <div className="flex">
          <Button href="/" className={"mr-md"}>
            Website
          </Button>
          <Button href="/">GitHub</Button>
        </div>
        <hr></hr>
        <h3>ExploreToolsCard</h3>
        <h4>Props:</h4>
        <p>text - text on card</p>
        <p>image - choose image</p>
        <ul>
          <li>chart</li>
          <li>lines</li>
          <li>globe</li>
          <li>waves</li>
        </ul>
        <h4>Examples: </h4>
        <div className="flex flex-space-between">
          <ExploreToolsCard text="Charting libraries" image="chart" />
          <ExploreToolsCard text="Low-level tools" image="lines" />
          <ExploreToolsCard text="Mapping tools" image="globe" />
          <ExploreToolsCard text="3D<br/>tools" image="waves" />
          <ExploreToolsCard text="Data<br/>grids" image="waves" />
          <ExploreToolsCard text="Exploration apps" image="waves" />
        </div>
        <hr></hr>

        <h3>Chip Component</h3>
        <h4>Props:</h4>
        <p>src - image src</p>
        <p>alt - image alt text</p>
        <p>active attribute - set active colors</p>
        <h4>Examples: </h4>
        <div className="row">
          <div className="col-sm mb-md">
            <Chip active={state ? "active" : null}>any framework</Chip>
            <Chip src="/images/logo/react.svg" active={state ? "active" : null}>
              React
            </Chip>
            <Chip
              src="/images/logo/angular.svg"
              active={state ? "active" : null}
            >
              Angular
            </Chip>
            <Chip src="/images/logo/vue.svg" active={state ? "active" : null}>
              Vue
            </Chip>
            <Chip
              src="/images/logo/javascript.svg"
              active={state ? "active" : null}
            >
              JavaScript
            </Chip>
            <Chip
              src="/images/logo/typescript.svg"
              active={state ? "active" : null}
            >
              TypeScript
            </Chip>
            <br />
            <br />
            <Chip
              src="/images/logo/open-source.svg"
              active={state ? "active" : null}
            >
              Open source
            </Chip>
            <Chip src="/images/logo/tag.svg" active={state ? "active" : null}>
              Proprietary
            </Chip>
          </div>
        </div>
        <hr></hr>
        <h3>Tool Card Component</h3>
        <h4>Props:</h4>
        <p>logo - image src</p>
        <p>title - tool name</p>
        <p>
          github_data - data of release and github stars. Is Object. Example:
          props.github_data.stars, props.github_data.last_release.date. This way
          need to convenient use in yaml
        </p>
        <p>developer - object, name and src</p>
        <p>frameworks:</p>
        <ul>
          <li>Universal</li>
          <li>React</li>
          <li>Vue</li>
          <li>Angular</li>
        </ul>
        <p>languages:</p>
        <ul>
          <li>TypeScript</li>
          <li>JavaScript</li>
        </ul>
        <p>shadow - card shadow color</p>
        <ul>
          <li>green</li>
          <li>orange</li>
          <li>pink</li>
          <li>blue</li>
          <li>yellow</li>
          <li>gray (default)</li>
        </ul>
        <p>label - label image (not required)</p>
        <ul>
          <li>easy-to-start</li>
          <li>well-documented</li>
          <li>diverse-chart-type</li>
          <li>easy-to-customize</li>
          <li>very-popular</li>
        </ul>
        <h4>Examples: </h4>
        <div>
          <div className="row">
            <div className="col-sm mb-md">
              <ToolCard
                title="Chart.js"
                logo="/images/logo/chartjs.svg"
                label="easy-to-start"
                description="Simple yet flexible JavaScript charting <br/> for designers & developers"
                languages={["JavaScript"]}
                frameworks={["Universal"]}
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
