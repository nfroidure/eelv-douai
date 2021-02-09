import Layout from "../../layouts/main";
import MainContent from "../../components/mainContent";
import Gallery from "../../components/gallery";
import { lightTextContent } from "../../styles";

export const definition = {
  title: "Pour les municipales, EÉLV mise sur l'union avec Douai Au Coeur",
  description: `Le groupe EÉLV Douai a décidé de s'unir avec les membres du Parti
 Communiste (PC), du Parti Socialiste (PS) et les citoyens du collectif Vivre Douai
 au sein de la liste Douai au Coeur créée pour l'occasion.`,
  href: "eelv_douai_au_coeur",
  date: "2019-12-20T19:00:00Z",
  place: "Douai",
  illustrations: [
    {
      href: require("../../illustrations/groupe_eelv_douai_au_coeur.jpg"),
      alt: "Photo du groupe de Douai",
    },
    {
      href: require("../../illustrations/signature_jean_christophe_leclercq.jpg"),
      alt: "Signature de la charte par Jean-Christophe Leclercq",
    },
    {
      href: require("../../illustrations/signature_stephanie_stiernon.jpg"),
      alt: "Signature de la charte par Stéphanie Stiernon",
    },
  ],
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
      <Gallery illustrations={definition.illustrations} />
      <p>
        Le groupe EÉLV Douai fait liste commune avec le PS, le PC et le
        collectif Vivre Douai pour les municipales 2020 autour d’un projet
        politique écologique et social pour la ville. Ils partagent un bilan
        encourageant et des perspectives d'améliorations dans un programme
        quadripartite qualitatif qu’EÉLV Douai est impatient de présenter.
      </p>
      <h3>Une politique franchement écologique et sociale</h3>
      <p>
        En juin, le groupe EÉLV a organisé une conférence de presse et a émis le
        souhait d’un rassemblement autour d’un projet politique écologique et
        social pour la ville de Douai et ses habitants. Les militants ont décidé
        de rencontrer et comprendre les listes de gauche afin de découvrir les
        synergies possibles, les convergences.
      </p>
      <p>
        Forts de ces échanges, les militants d’EÉLV Douai se sont regroupés en
        Assemblée Générale et ont voté à la majorité l’union PS, PC et collectif
        Vivre Douai. En effet, il y a bien peu de divergences au regard de ce
        qui nous unit. Ce rassemblement est apparu comme la meilleure chance
        pour Douai de développer une politique d’ouverture et de transition
        écologique.
      </p>

      <h3>Nos coeurs restent ouverts à la gauche qui s’écologise</h3>
      <p>
        Lors de la création de cette liste commune, il a été convenu qu’une
        ouverture vers LREM ou tout parti plus à droite n’est pas envisageable.
        EÉLV Douai croit toujours fermement à une alliance plus large qui
        permette à toutes les sensibilités de gauche de s’exprimer dans un
        conseil municipal divers et solidaire.
      </p>

      <h3>Une charte des candidat-es EÉLV</h3>
      <p>
        Tou-tes nos candidat-es ont signé une charte d'engagement visant à
        assurer une organisation exemplaire de notre groupe au sein du futur
        conseil municipal.
      </p>
      <p>
        Pour pour d'information sur cette belle liste,{" "}
        <a href="https://douaiaucoeur.fr">visitez le site Douai Au Coeur </a>
      </p>
      <p>
        <a href="https://drive.google.com/drive/u/1/folders/1ZPaBUUPLG1iJFXEj8FIBhkJAz4-tm5Kt">
          📢 Voir le dossier de presse complet
        </a>
      </p>
    </MainContent>
    <style jsx>{lightTextContent}</style>
  </Layout>
);
