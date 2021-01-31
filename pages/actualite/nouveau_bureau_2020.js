import Layout from "../../layouts/main";
import MainContent from "../../components/mainContent";
import { lightTextContent } from "../../styles";

export const definition = {
  title: "EÉLV Douaisis renouvelle son bureau",
  description: `EÉLV renouvelle son bureau avec cette fois une nouveau, un co-secrétariat paritaire.`,
  href: "nouveau_bureau_2020",
  date: "2020-11-07T16:00:00Z",
  place: "Douai",
  illustrations: [],
};

export default () => (
  <Layout title={definition.title} description={definition.description}>
    <MainContent>
      <h1>{definition.title}</h1>
      <p>
        {definition.place} - {new Date(definition.date).toLocaleString()}
      </p>
      <p>
        <strong>{definition.description}</strong>
      </p>
      <p>
        Lucile Wacheux et Philippe Bernard élus co-secrétaires, Sophie Piquot
        renouvelée trésorière et Sylvie Joos en soutien.
      </p>
    </MainContent>
    <style jsx>{lightTextContent}</style>
  </Layout>
);
