import Layout from "../../layouts/main";
import MainContent from "../../components/mainContent";
import Gallery from "../../components/gallery";
import { lightTextContent } from "../../styles";

export const definition = {
  title: "Action contre la pollution de l'air à Douai",
  description:
    "Action pour des mesures concrètes contre la pollution de l'air.",
  href: "action_pollution_air",
  date: "2019-05-07T16:00:00Z",
  place: "Douai",
  illustrations: [
    {
      href: require("../../illustrations/action_pollution_air.jpg"),
      alt: "Photo de l'opération de tractage rue du Kioske"
    },
    {
      href: require("../../illustrations/action_pollution_air_5.jpg"),
      alt: "Photo de la vierge marie et du petit Jésus protégé par un masque"
    },
    {
      href: require("../../illustrations/action_pollution_air_6.jpg"),
      alt:
        "Photo de la statue “La Jeunesse” (Parc Bertin) protégée par un masque"
    },
    {
      href: require("../../illustrations/action_pollution_air_7.jpg"),
      alt: "Photo de la statue du Général De Gaulle protégé par un masque"
    },
    {
      href: require("../../illustrations/action_pollution_air_8.jpg"),
      alt:
        "Photo de la statue représentant Marceline Desbordes-Valmore protégée par un masque"
    },
    {
      href: require("../../illustrations/action_pollution_air_2.jpg"),
      alt:
        "Photo de la statue Esméralda rue de la Tour de Bourgogne équipée d'un masque pour l'occasion"
    },
    {
      href: require("../../illustrations/action_pollution_air_4.jpg"),
      alt:
        "Photo de la statue Esméralda rue de la Tour de Bourgogne et photographe"
    }
  ],
  hero: {
    href: require("../../illustrations/action_pollution_air_3.jpg"),
    alt: "Photo de l'opération de tractage"
  }
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
      <p>
        La pollution de l'air tue 36 000 personnes chaque année, pour demander
        des mesures concrètes, nous avons symboliquement équipé les statues de
        la ville de Douai de masques anti-pollution.
      </p>
      <p>
        Puis, nous avons distribué des tracts aux habitants pour les informer
        sur ce problème de santé publique.
      </p>
      <Gallery illustrations={definition.illustrations} />
    </MainContent>
    <style jsx>{lightTextContent}</style>
  </Layout>
);
