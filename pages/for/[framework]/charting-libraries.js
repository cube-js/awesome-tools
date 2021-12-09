import ListPage from '../../../components/ListPage';
import { getTools } from '../../../data/tools';
import { hasTypes, isCompatibleWith } from '../../../data/filter';
import frameworks from '../../../data/frameworks';

export default function Page({ tools, framework }) {
  const frameworkName = frameworks[framework].name;

  return (
    <ListPage
      tools={tools}
      framework={framework}
      title={`${frameworkName} charting libraries`}
      showType={false}
      showCompatibleWith={false}
    />
  );
}

export async function getStaticPaths() {
  const paths = Object.values(frameworks).map(framework => ({
    params: { framework: framework.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const tools = await getTools();
  const filtered = tools.filter(tool => hasTypes(tool, [ "charts" ]) && isCompatibleWith(tool, [ params.framework ]));

  return {
    props: {
      tools: filtered,
      framework: params.framework,
    }
  };
}