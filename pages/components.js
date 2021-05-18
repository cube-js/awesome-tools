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
        <p>shadow - card shadow color</p>
        <ul>
          <li>green</li>
          <li>orange</li>
          <li>pink</li>
          <li>blue</li>
          <li>yellow</li>
          <li>gray (default)</li>
        </ul>
        <h4>Examples: </h4>
        <div>
          <div className="row">
            <div className="col-sm mb-sm">
              <ToolCard
                title="Chart.js"
                src="/images/logo/chartjs.svg"
                alt="chart.js logo"
                shadow="green"
              />
            </div>
            <div className="col-sm mb-sm">
              <ToolCard shadow="orange" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm mb-sm">
              <ToolCard shadow="pink" />
            </div>
            <div className="col-sm mb-sm">
              <ToolCard shadow="blue" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm mb-sm">
              <ToolCard shadow="yellow" />
            </div>
            <div className="col-sm mb-sm">
              <ToolCard shadow="gray" />
            </div>
          </div>
        </div>
        <hr></hr>
      </main>
    </div>
  );
}
