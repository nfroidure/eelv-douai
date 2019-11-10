import Link from "../../components/link";
import Layout from "../../layouts/main";
import MainContent from "../../components/mainContent";
import { lightTextContent } from "../../styles";

export const definition = {
  title: "Les écologistes aux boucles de Gayant",
  description:
    "Afin de soutenir nos candidats aux européennes, nous avons effectué les boucles de Gayant.",
  href: "boucles_gayant",
  date: "2019-05-31T08:36:00Z",
  place: "Douai",
  illustrations: [
    {
      href: require("../../illustrations/eelv_boucles_gayant.jpg"),
      alt: "Photo de notre groupe sur la ligne de départ"
    }
  ]
};

export default () => (
  <Layout
    title={definition.title}
    description={definition.description}
    backgroundImage={definition.illustrations[0].href}
  >
    <MainContent>
      <h1>{definition.title}</h1>
      <p>
        {definition.place} - {new Date(definition.date).toLocaleString()}
      </p>
      <p>
        <strong>{definition.description}</strong>
      </p>
      <p>Quelques propositions à la Ville de Douai pour l'année prochaine :</p>
      <ul>
        <li>
          un bonus pour les coureurs qui jettent leurs gobelets à la poubelle,
        </li>
        <li>
          pas d'éponge (surtout de ce type), mais des brumisateurs du type de ce
          que l'on retrouve devant la Civette (qui pourront d'ailleurs trouver
          d'autres usages aux fêtes de Gayant par exemple),
        </li>
        <li>
          les camions grue coupent les moteurs car les gaz d'échappement en
          plein effort son très mauvais pour la santé,
        </li>
        <li>des vélos plutôt que des motos pour suivre la course,</li>
        <li>
          une charte environnement à respecter pour les sponsors (pitié, plus de
          ballons de baudruche, plus de gadgets inutiles qu'on jette
          immédiatement...).
        </li>
      </ul>
      <p>
        <a href="https://www.facebook.com/eelvdouai/posts/1042086822846342">
          Voir la publication Facebook
        </a>
      </p>
    </MainContent>
    <style jsx>{lightTextContent}</style>
  </Layout>
);
