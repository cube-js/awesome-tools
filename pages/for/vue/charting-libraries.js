import ListPage from '../../../components/ListPage';
import { getTools } from '../../../data/tools';
import { hasTypes, isCompatibleWith } from '../../../data/filter';

export default function Page({ tools }) {
  return (
    <ListPage
      tools={tools}
      title="Vue charting libraries"
      showType={false}
      showCompatibleWith={false}
    />
  );
}

export async function getStaticProps() {
  const tools = await getTools();
  const filtered = tools.filter(tool =>
    hasTypes(tool, [ "charts" ]) &&
    isCompatibleWith(tool, [ "Vue" ])
  );
  return { props: { tools: filtered } };
}