import Link from "../../components/link";
import Layout from "../../layouts/main";
import MainContent from "../../components/mainContent";
import { lightTextContent } from "../../styles";
import { definition as douaiAuCoeur } from "./eelv_douai_au_coeur";
import { definition as nouveauBureau } from "./nouveau_bureau";
import { definition as boucleGayant } from "./boucles_gayant";
import { definition as actionPollution } from "./action_pollution_air";
import { definition as legislatives2012 } from "./legislatives_2012";
import { definition as debatSanteEnvironnement } from "./debat_sante_environnement";
import { definition as cercleDeSilence } from "./cercle_de_silence";
import { definition as bilanFukushimaTransition } from "./bilan_fukushima_transition";
import { definition as victoireMunicipalesDouai2020 } from "./victoire_municipales_douai_2020";

const News = ({ entries }) => (
  <Layout title="Notre actualité">
    <MainContent>
      <h1>Notre actualité</h1>
      <p>
        Découvrez les dernières actions des écologistes de Douai et du Douaisis.
      </p>
      <ul>
        {entries.map(entry => (
          <li key={entry.href}>
            <h2>
              <Link href={"/actualite/" + entry.href}>
                <a>{entry.title}</a>
              </Link>
            </h2>
            <p>
              {entry.place} - {new Date(entry.date).toLocaleString()}
            </p>
            <p>{entry.description}</p>
          </li>
        ))}
      </ul>
    </MainContent>
    <style jsx>{lightTextContent}</style>
  </Layout>
);

News.getInitialProps = async () => {
  return {
    entries: [
      victoireMunicipalesDouai2020,
      douaiAuCoeur,
      nouveauBureau,
      boucleGayant,
      actionPollution,
      legislatives2012,
      debatSanteEnvironnement,
      cercleDeSilence,
      bilanFukushimaTransition
    ]
  };
};

export default News;
