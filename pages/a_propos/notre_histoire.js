import Link from "../../components/link";
import Layout from "../../layouts/main";
import MainContent from "../../components/mainContent";
import { lightTextContent } from "../../styles";

export default () => (
  <Layout title="Notre histoire">
    <MainContent>
      <h1>Notre histoire</h1>
      <blockquote><p>
        <q>“L'avenir est une porte, le passé en est la clé”</q> -{" "}
        <cite>Victor Hugo</cite>
      </p></blockquote>
      <p>
        Europe Écologie Les Verts (abrégé en EELV ou EÉLV) est un parti
        politique écologiste français qui succède au parti Les Verts le 13
        novembre 2010.
      </p>
      <p>
        En 2014, remporte les élections municipales à Douai aux côté du Parti
        Socialiste (PS), du Parti Communiste (PC) et obtient trois élus pour le
        compte d'EÉLV (Lucile Wacheux, 12e adjointe au maire, délégation :
        Citoyenneté - Jumelage et Jackie Avenel, 3e Adjoint au maire, délégation
        Cadre de vie).
      </p>
      <p>
        Aujourd'hui, EÉLV Douaisis continue de porter l'écologie politique sur
        Douai et ses communes voisines afin de voir enfin la nature respectée.
      </p>
    </MainContent>
    <style jsx>{lightTextContent}</style>
  </Layout>
);
