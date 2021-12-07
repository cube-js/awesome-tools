import ListPage from '../components/ListPage';
import { getTools } from '../data/tools';

export default function Home({ tools }) {
  return (
    <ListPage
      tools={tools}
      title="Data visualization tools"
    />
  );
}

export async function getStaticProps() {
  const tools = await getTools();
  return { props: { tools } };
}