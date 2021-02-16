import Layout from "../layouts/main";
import MainContent from "../components/mainContent";
import { lightTextContent } from "../styles";

const Page = () => (
  <Layout
    title="Contacter EÉLV Douaisis"
    backgroundImage={require("../illustrations/marie-cagenon-scarpe.jpg")}
  >
    <MainContent>
      <h1>Contacter EÉLV Douaisis</h1>

      <p>
        Vous pouvez nous contacter directement par email sur{" "}
        <a href="mailto:eelv.douai@gmail.com">eelv.douai@gmail.com</a>.
      </p>

      <p>
        Vous pouvez aussi nous retrouver sur les réseaux sociaux (
        <a href="https://www.facebook.com/eelvdouai/">Facebook</a> ou{" "}
        <a href="https://twitter.com/eelv_douai">Twitter</a>).
      </p>
    </MainContent>
    <style jsx>{lightTextContent}</style>
  </Layout>
);

export default Page;
