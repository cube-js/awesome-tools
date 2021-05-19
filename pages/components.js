import Head from "next/head";
import ToolCard from "../components/ToolCard";

export default function Home() {
  return (
    <div className="container custom-container">
      <Head>
        <title>Awesome Tools - Components Page</title>
        <meta name="description" content="This page for developing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Components Page</h1>
        <hr></hr>
        <h3>Tool Card Component</h3>
        <h4>Props:</h4>
        <p>src - image src</p>
        <p>alt - image alt text</p>
        <p>title - tool name</p>
        <p>link - link on GitHub, need to load data</p>
        <p>developer - object, name and src</p>
        <p>framework:</p>
        <ul>
          <li>Universal</li>
          <li>React</li>
          <li>Vue</li>
          <li>Angular</li>
        </ul>
        <p>language:</p>
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
            <div className="col-sm mb-sm">
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
            <div className="col-sm mb-sm">
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
            <div className="col-sm mb-sm">
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
            <div className="col-sm mb-sm">
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
            <div className="col-sm mb-sm">
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
            <div className="col-sm mb-sm">
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
            {/* <div className="col-sm mb-sm">
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
            <div className="col-sm mb-sm">
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
        <hr></hr>
      </main>
    </div>
  );
}
