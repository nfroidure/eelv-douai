import Layout from "../../layouts/main";
import MainContent from "../../components/mainContent";
import Gallery from "../../components/gallery";
import { lightTextContent } from "../../styles";

export const definition = {
  title: "Victoire aux municipales pour Douai au Coeur",
  description:
    "Notre campagne s'est terminée par une victoire de la liste d'union que nous avons formée à Douai.",
  href: "victoire_municipales_douai_2020",
  date: "2020-06-28T19:00:00Z",
  place: "Douai",
  illustrations: [
    {
      href: require("../../illustrations/victoire_municipales_douai_2020.jpg"),
      alt: "Photo du groupe EÉLV de Douai",
    },
    {
      href: require("../../illustrations/tractage_douai_au_coeur.jpg"),
      alt: "Photo du groupe EÉLV de Douai",
    },
    {
      href: require("../../illustrations/reunion_publique_douai_au_coeur_2.jpg"),
      alt: "Photo du groupe EÉLV de Douai",
    },
    {
      href: require("../../illustrations/reunion_publique_douai_au_coeur.jpg"),
      alt: "Photo du groupe EÉLV de Douai",
    },
    {
      href: require("../../illustrations/lucile_herve.jpg"),
      alt: "Photo du groupe EÉLV de Douai",
    },
    {
      href: require("../../illustrations/affiches_douai_au_coeur.jpg"),
      alt: "Photo du groupe EÉLV de Douai",
    },
  ],
  hero: {
    href: require("../../illustrations/victoire_municipales_douai_2020.jpg"),
    alt: "Photo du groupe EÉLV de Douai",
  },
};

export default () => (
  <Layout
    title={definition.title}
    description={definition.description}
    backgroundImage={definition.hero.href}
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
        En septembre 2019, avec l'opération "Mon idée écologique pour Douai,
        EÉLV Douai entrait officiellement dans la campagne municipale de 2020 en
        interrogeant les douaisien-nes sur leurs aspirations écologiques. À
        l'occasion des braderies de juillet et d'octobre, nous avons pu
        rencontrer un grand nombre d'entre elleux et mesurer leurs attentes.
      </p>
      <p>
        En parallèle, nous proposions aux partis ouverts aux idées que nous
        défendons, de discuter pour une large union dès le premier tour. Faute
        d'aboutir, nous engagions des réunions bilatérales avec la majorité
        sortante dont nous faisions parti et les initiateurs d'"Ensemble Faisons
        Douai". Il nous apparut alors clair que faire entrer Douai dans la
        transition écologique serait possible en reconduisant l'union de 2014
        mais avec une meilleure représentativité des écologistes dans cette
        majorité renouvelée ainsi que sur la base d'accord programmatiques sans
        équivoque, portés par écrit et d'une ambition sans précédent à Douai.
      </p>
      <p>
        Après de longs mois d'attente, nous sommes heureux/uses que les
        douaisien-nes aient confirmé ces choix et impatient-es de mettre en
        oeuvre le programme qui, suite à la crise dramatique du COVID-19 prend
        un sens encore plus prégnant.
      </p>
      <p>
        La transition écologique et sociale de Douai se fera avec les
        douaisien-nes, en toute transparence et avec le volontarisme que les
        défis qui nous attendent exigent de nous.
      </p>
      <p>
        Merci à tou-tes les douaisien-nes pour leur confiance, chaque vote a
        compté pour cette victoire ! Merci également à nos partenaires du PS, PC
        et de la société civile d'avoir su trouver avec nous ce qui nous
        rassemblait pour offrir à Douai une municipalité aux valeurs
        écologiques, sociales et humanistes.
      </p>
      <p>
        Douai a tous les atouts pour être une ville où il fait bon vivre. Dès
        maintenant et pour 6 ans nous n'aurons de cesse de rendre du pouvoir de
        vivre aux habitant-es de notre belle ville de Douai !
      </p>
      <p>Amicalement, les co-listièr-es Douai au Coeur d'EÉLV Douai</p>
    </MainContent>
    <style jsx>{lightTextContent}</style>
  </Layout>
);
