import Layout from "../../layouts/main";
import MainContent from "../../components/mainContent";
import { lightTextContent } from "../../styles";

export const definition = {
  title: "Débat santé et environnement",
  description:
    "Débat sur la santé au coeur des préoccupations environnementales le jeudi 15 mars 2012 à Douai.",
  href: "debat_sante_environnement",
  date: "2012-03-02T09:00:00Z",
  place: "Douai"
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
        Vous{" "}
        <a href="https://drive.google.com/open?id=1-jpT8RlJyekSbaYdPE52mQuuCQWK8us8">
          trouverez ici (pdf, 188 ko)
        </a>{" "}
        le programme provisoire de la prochaine conférence – débat intitulée : «
        Santé et environnement dans le Nord-Pas-de-Calais ».
      </p>
      <h2>Au programme :</h2>
      <ul>
        <li>
          Débat sur la santé au cœur des préoccupations environnementales,
          incluant un rappel sur la santé dans le Nord-Pas-de-Calais, en
          particulier dans le bassin minier, avec l’intervention de plusieurs
          témoins professionnels ou non de la santé dans la région, notamment le
          Docteur Paul Cordonnier de l’
          <a href="http://apres59.fr/">association A.P.R.E.S.</a> (Association
          Promotion Recherche Environnement Santé publique).
        </li>
        <li>
          Présentation du programme santé d’Eva JOLY par Aline Archimbaud,
          sénatrice de Seine Saint-Denis.
        </li>
      </ul>
      <p>Ce débat sera animé par Herve Mortelette du Groupe EELV Douaisis.</p>
      <p>
        Jeudi 15 mars 2012 à 19 h salle Faveau des Salles d’Anchin, rue Fortier
        à Douai.
      </p>
      <p>Venez tous et invitez vos amis à ce débat !</p>
      <p>
        <a href="https://drive.google.com/open?id=1tBDxhi8qpndE3RHmwO61zCHGvuHEDIQ6">
          Voir la profession de foi
        </a>
      </p>
    </MainContent>
    <style jsx>{lightTextContent}</style>
  </Layout>
);
