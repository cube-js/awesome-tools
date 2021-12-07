import ListPage from '../../components/ListPage';
import { getTools } from '../../data/tools';
import { hasLicenses, isCompatibleWith } from '../../data/filter';

export default function Page({ tools }) {
  return (
    <ListPage
      tools={tools}
      title="Open source data visualization tools"
      showLicense={false}
    />
  );
}

export async function getStaticProps() {
  const tools = await getTools();
  const filtered = tools.filter(tool => hasLicenses(tool, [ "open-source" ]));
  return { props: { tools: filtered } };
}