import ListPage from '../components/ListPage';
import { getTools } from '../data/tools';
import { GlobalSignUp } from '../components/GlobalSignUp/GlobalSignUp';
import { CTAButtons } from '../components/CTAButtons/CTAButtons';

export default function Home({ tools }) {
  return (
    <>
      <ListPage
        tools={tools}
        title="Front-end data tools"
      />
      <GlobalSignUp>
        <CTAButtons
          signupCTAId="awesome-tools.button.cta-global_cloud-signup"
          bookDemoCTAId="awesome-tools.button.cta-global_book-a-demo"
        />
      </GlobalSignUp>
    </>
  );
}

export async function getStaticProps() {
  const tools = await getTools();
  return { props: { tools } };
}