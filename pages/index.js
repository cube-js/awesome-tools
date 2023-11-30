import ListPage from '../components/ListPage';
import { getTools } from '../data/tools';

export default function Home({ tools }) {
  return (
    <ListPage
      tools={tools}
      title="Front-end data tools"
    />
  );
}

export async function getStaticProps() {
  const tools = await getTools();
  return { props: { tools } };
}