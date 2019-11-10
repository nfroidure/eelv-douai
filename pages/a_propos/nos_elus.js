import Link from "../../components/link";
import Layout from "../../layouts/main";
import MainContent from "../../components/mainContent";
import { lightTextContent } from "../../styles";

export default () => (
  <Layout title="Nos élus et candidats">
    <MainContent>
      <h1>Nos élus et candidats</h1>
      <h2>Lucile Wacheux</h2>
      <ul>
        <li>
          <strong>Depuis 2014 :</strong> 12e adjointe au maire de la Ville de
          Douai. Délégation : Citoyenneté - Jumelage
        </li>
        <li>
          <strong>2015 :</strong> Candidate aux départementales pour le canton de
          Douai
        </li>
        <li>
          <strong>2012 :</strong> Candidate aux législatives pour la 17ème
          circonscription
        </li>
      </ul>
      <h2>Hervé Mortelette</h2>
      <ul>
        <li>
          <strong>2015 :</strong> Candidat aux départementales pour le canton de
          Douai
        </li>
      </ul>
      <h2>Philippe Bernard</h2>
      <ul>
        <li>
          <strong>2012 :</strong> Candidat aux législatives pour la 17ème
          circonscription
        </li>
      </ul>
      <h2>Jackie Avenel</h2>
      <ul>
        <li>
          <strong>De 2014 à 2020 :</strong> 2e adjoint au maire de la Ville de
          Douai. Délégation : Cadre de vie
        </li>
        <li>
          <strong>2008 :</strong> Candidat aux cantonales pour le canton de
          Douai-Sud-Ouest
        </li>
      </ul>
      <h2>Marie-Andrée Coquelle</h2>
      <ul>
        <li>
          <strong>2008 :</strong> Candidate aux cantonales pour le canton de
          Douai-Nord
        </li>
      </ul>
      <h2>Alexandre Pirierros</h2>
      <ul>
        <li>
          <strong>1992 :</strong> Candidat aux cantonales pour le canton de
          Douai-Nord-Est
        </li>
      </ul>
      <h2>Victor Sion</h2>
      <ul>
        <li>
          <strong>1992 :</strong> Candidat aux cantonales pour le canton de
          Douai-Sud-Ouest
        </li>
      </ul>
      <h2>Annie Duchossoy</h2>
      <ul>
        <li>
          <strong>1992 :</strong> Candidate aux cantonales pour le canton de
          Douai-Sud
        </li>
      </ul>
    </MainContent>
    <style jsx>{lightTextContent}</style>
  </Layout>
);
