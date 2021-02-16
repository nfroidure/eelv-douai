import Layout from "../../layouts/main";
import MainContent from "../../components/mainContent";
import { lightTextContent } from "../../styles";

const Page = () => (
  <Layout title="Les valeurs écologistes">
    <MainContent>
      <h1>Les valeurs écologistes</h1>
      <p>
        Nous pensons qu'une politique pleine et entière se doit d'être déclinée
        de valeurs fondamentales.
      </p>
      <p>
        Dans cette optique, notre groupe local a souhaité mettre en avant les
        valeurs qui fondent notre action.
      </p>
      <p>
        Il ne s'agit pas d'un acte de foi, mais de valeurs intrinsèques qui
        guident les initiatives que notre groupe porte et les combats que nous
        menons.
      </p>
      <h2>Valeurs fondamentales</h2>
      <ul>
        <li>
          Respect de la nature, donc de l'humanité (sobriété, frugalité,
          humilité, contemplation, congruence)
        </li>
        <li>Justice (sociale, civile)</li>
        <li>Égalité (femme-homme, des chances)</li>
        <li>Transparence</li>
        <li>Engagement (courage, solidarité, esprit critique)</li>
        <li>Paix (sociale, militaire)</li>
      </ul>
      <h2>Principes</h2>
      <ul>
        <li>égalité Femme - Homme</li>
        <li>
          démarche d'adapter existant plutôt que raser et partir d'une feuille
          blanche
        </li>
        <li>calendrier naturel</li>
      </ul>
    </MainContent>
    <style jsx>{lightTextContent}</style>
  </Layout>
);

export default Page;
