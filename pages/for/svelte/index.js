import ListPage from '../../../components/ListPage';
import { getTools } from '../../../data/tools';
import { isCompatibleWith } from '../../../data/filter';

export default function Page({ tools }) {
  return (
    <ListPage
      tools={tools}
      title="Svelte data visualization tools"
      showCompatibleWith={false}
    />
  );
}

export async function getStaticProps() {
  const tools = await getTools();
  const filtered = tools.filter(tool => isCompatibleWith(tool, [ "Svelte" ]));
  return { props: { tools: filtered } };
}