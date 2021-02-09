import Link from "../../components/link";
import Layout from "../../layouts/main";
import MainContent from "../../components/mainContent";
import { border, lightTextContent } from "../../styles";
import { definition as douaiAuCoeur } from "./eelv_douai_au_coeur";
import { definition as nouveauBureau } from "./nouveau_bureau";
import { definition as boucleGayant } from "./boucles_gayant";
import { definition as actionPollution } from "./action_pollution_air";
import { definition as legislatives2012 } from "./legislatives_2012";
import { definition as debatSanteEnvironnement } from "./debat_sante_environnement";
import { definition as cercleDeSilence } from "./cercle_de_silence";
import { definition as bilanFukushimaTransition } from "./bilan_fukushima_transition";
import { definition as victoireMunicipalesDouai2020 } from "./victoire_municipales_douai_2020";
import path from "path";
import { promisify } from "util";
import { readFile } from "fs";

const News = ({ entries }) => (
  <Layout title="Notre actualité">
    <MainContent>
      <h1>Notre actualité</h1>
      <p>
        Découvrez les dernières actions des écologistes de Douai et du Douaisis.
      </p>
      <ul>
        {entries.map((entry) => (
          <li key={entry.href}>
            <h2>
              <Link href={"/actualite/" + entry.href}>
                <a>{entry.title}</a>
              </Link>
            </h2>
            <p>
              {entry.place ? `${entry.place} - ` : ""}
              {new Date(entry.date).toLocaleString()}
            </p>
            <p>{entry.description}</p>
          </li>
        ))}
      </ul>
    </MainContent>
    <style jsx>{`
      ul {
        list-style-type: none;
        padding: 0;
      }
      ul > li {
        list-style-type: none;
        padding: 0;
        border-bottom: ${border} solid #ccc;
      }
      ul > li:last-child {
        border: 0;
      }
    `}</style>
    <style jsx>{lightTextContent}</style>
  </Layout>
);

export async function getStaticProps(context) {
  const localEntries = [
    victoireMunicipalesDouai2020,
    douaiAuCoeur,
    nouveauBureau,
    boucleGayant,
    actionPollution,
    legislatives2012,
    debatSanteEnvironnement,
    cercleDeSilence,
    bilanFukushimaTransition,
  ];
  const contentfulEntries = JSON.parse(
    (
      await promisify(readFile)(path.join(process.cwd(), "data", "news.json"))
    ).toString()
  );

  return {
    props: {
      entries: localEntries
        .concat(contentfulEntries)
        .sort((itemA, itemB) =>
          Date.parse(itemA.date) > Date.parse(itemB.date) ? -1 : 1
        )
        .map(({ title, date, description, place, href }) => ({
          title,
          date,
          description,
          place,
          href,
        })),
    },
  };
}

export default News;
