import Link from "../components/link";
import Layout from "../layouts/main";
import MainContent from "../components/mainContent";
import { lightTextContent } from "../styles";

export default () => (
  <Layout
    title="Groupe Local"
    backgroundImage={require("../illustrations/reunion_groupe_eelv.jpg")}
  >
    <MainContent>
      <h1>Groupe Local EÉLV Douaisis</h1>

      <p>
        Le groupe local EÉLV Douaisis représente le mouvement Europe Écologie -
        Les Verts aux alentours de la ville de Douai.
      </p>

      <h2>L'écologie politique dans le douaisis</h2>

      <p>
        L'écologie est au cœur de nos préoccupations. Notre groupe local porte
        et diffuse les idées écologistes dans le douaisis.
      </p>

      <p>
        Sur ce site, vous pouvez{" "}
        <Link href="/a_propos">
          <a>découvrir notre groupe</a>
        </Link>{" "}
        et notre{" "}
        <Link href="/actualite">
          <a>actualité</a>
        </Link>
        .
      </p>

      <p>
        Des{" "}
        <Link href="/ressources">
          <a>ressources utiles</a>
        </Link>{" "}
        sont également disponibles pour découvrir l'écologie en général et plus
        particulièrement dans le douaisis et enfin, vous pouvez{" "}
        <Link href="/contact">
          <a>nous contacter</a>
        </Link>
        .
      </p>

      <h2>Couverture géographique</h2>

      <p>
        Le Groupe Local EÉLV Douaisis représente EÉLV sur les communes de{" "}
        <a href="https://douaisis-agglo.com">Douaisis Agglo</a> et de la{" "}
        <a href="https://www.cc-coeurdostrevent.fr/">
          Communauté de Communes Coeur d'Ostrevent (CCCO)
        </a>
        .
      </p>

      <p>Vous êtes concerné par le groupe local de Douai si vous habitez :</p>

      <ul>
        <li>
          <strong>la 17ème circonscription :</strong> cantons d'Arleux (Arleux,
          Aubigny-au-Bac, Brunémont, Bugnicourt, Cantin, Erchin, Estrées,
          Féchain, Fressain, Gœulzin, Hamel, Lécluse, Marcq-en-Ostrevent,
          Monchecourt, Villers-au-Tertre), Douai-Nord, Douai-Nord-Est (Auby,
          Flers-en-Escrebieux, Râches, Raimbeaucourt, Roost-Warendin), canton de
          Douai Sud (Férin, Roucourt) et Douai-Sud-Ouest (Courchelettes, Cuincy,
          Esquerchin, Lambres-lez-Douai, Lauwin-Planque).
        </li>
        <li>
          <strong>la 16ème circonscription :</strong> Canton de Marchiennes
          (Bouvignies, Bruille-lez-Marchiennes, Erre, Fenain, Hornaing,
          Marchiennes, Pecquencourt, Rieulay, Somain, Tilloy-lez-Marchiennes,
          Vred, Wandignies-Hamage, Warlaing) et communes de Anhiers, Aniche,
          Auberchicourt, Dechy, Écaillon, Flines-lez-Raches, Guesnain, Lallaing,
          Lewarde, Loffre, Masny, Montigny-en-Ostrevent, Sin-le-Noble, et
          Waziers.
        </li>
      </ul>

      <h2>Découvrir EÉLV</h2>

      <p>
        Vous pouvez découvrir le parti Europe Écologie Les Verts en visitant
        également notre <a href="https://eelv.fr/">site national</a> et notre{" "}
        <a href="https://npdc.eelv.fr/">site régional</a>.
      </p>
    </MainContent>
    <style jsx>{lightTextContent}</style>
  </Layout>
);
