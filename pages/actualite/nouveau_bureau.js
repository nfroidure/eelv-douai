import Layout from "../../layouts/main";
import MainContent from "../../components/mainContent";
import Gallery from "../../components/gallery";
import { lightTextContent } from "../../styles";import Link from "../../components/link";

export const definition = {
  title: "EÉLV Douaisis se dote d'un nouveau bureau",
  description: `Au terme d’une assemblée générale ayant eu lieu le samedi 14 décembre,
 une nouvelle équipe d’animation a été élue par le groupe local EÉLV
 Douaisis.`,
  href: "nouveau_bureau",
  date: "2019-12-14T19:00:00Z",
  place: "Douai",
  illustrations: [
    {
      href: require("../../illustrations/bureau_eelv_douaisis.jpg"),
      alt: "Photo de Nicolas Froidure et Sophie Piquot",
    },
    {
      href: require("../../illustrations/groupe_eelv_douaisis.jpg"),
      alt: "Photo de groupe EÉLV Douaisis",
    },
  ],
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
      <Gallery illustrations={definition.illustrations} />
      <p>
        Nicolas Froidure occupera la fonction de secrétaire et Sophie Piquot,
        celle de trésorière. Ils ont été élus pour assumer ces fonctions dès le
        premier tour à la majorité absolue.
      </p>
      <p>
        Pour les assister dans cette tâche, une équipe d’animation paritaire
        composée de 8 personnes s’est proposée. Le groupe ainsi formé s'est fixé
        les missions suivantes :
      </p>
      <ul>
        <li>développer l’écologie politique dans le Douaisis,</li>
        <li>mettre l’accent sur l’intégration des nouveaux venus,</li>
        <li>
          créer des ponts avec les organisations syndicales, associations et
          autres partis politiques.
        </li>
      </ul>
      <p>
        Pour pour plus d'informations sur sa composition,{" "}
        <Link href="/a_propos/bureau">
          <a>rendez-vous sur la page dédiée au bureau</a>
        </Link>
      </p>
      <p>
        <a href="https://drive.google.com/drive/u/1/folders/1w6pfL2PtY3uxQBDeru1GabMRiwmWVHJG">
          📢 Voir le dossier de presse complet
        </a>
      </p>
    </MainContent>
    <style jsx>{lightTextContent}</style>
  </Layout>
);
