import Layout from "../../layouts/main";
import MainContent from "../../components/mainContent";
import { lightTextContent } from "../../styles";

export const definition = {
  title:
    "Législatives 2012 : Nos candidat-es",
  description:
    "Lucile Wacheux et Philippe Bernard sont nos candidat-es pour la 17ème circonscription.",
  href: "legislatives_2012",
  date: "2012-05-30T16:00:00Z",
  place: "Douai",
};

export default () => (
  <Layout
    title={definition.title}
    description={definition.description}
  >
    <MainContent>
      <h1>{definition.title}</h1>
      <p>
        {definition.place} - {new Date(definition.date).toLocaleString()}
      </p>
      <p>
        <strong>{definition.description}</strong>
      </p>
      <p>
        Lucile Wacheux et son suppléant Philippe Bernard sont les candidat-es
        d’Europe Écologie - Les Verts dans la 17ème circonscription pour les législatives 2012.
      </p>
      <p>
        <a href="https://drive.google.com/open?id=1tBDxhi8qpndE3RHmwO61zCHGvuHEDIQ6">
          Voir la profession de foi
        </a>
      </p>
    </MainContent>
    <style jsx>{lightTextContent}</style>
  </Layout>
);
