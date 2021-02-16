import Link from "../../components/link";
import Layout from "../../layouts/main";
import MainContent from "../../components/mainContent";
import { lightTextContent } from "../../styles";

const Page = () => (
  <Layout title="Présentation du groupe local">
    <MainContent>
      <h1>Présentation</h1>
      <p>
        Envie d'en savoir plus sur notre groupe local ? Tout ce que vous devez
        savoir sur notre groupe se trouve dans les rubriques suivantes !
      </p>
      <h2>Bureau</h2>
      <p>
        Le fonctionnement du groupe local est organisé par un bureau élu tous
        les 3 ans. Découvrez les{" "}
        <Link href="/a_propos/bureau">
          <a href="/a_propos/bureau">membres de notre bureau</a>
        </Link>{" "}
        sur cette page.
      </p>
      <h2>Élus et candidats</h2>
      <p>
        Découvrez les personnes candidates aux diverses élections et les
        personnes élues et leur action sur{" "}
        <Link href="/a_propos/nos_elus">
          <a href="/a_propos/nos_elus">la page suivante</a>
        </Link>
        .
      </p>
      {false ? (
        <div>
          <p>À finaliser avant de place ces sections:</p>
          <h2>Histoire</h2>
          <p>
            Découvrez{" "}
            <Link href="/a_propos/notre_histoire">
              <a href="/a_propos/notre_histoire"> l'histoire du groupe local</a>
            </Link>{" "}
            EÉLV de Douai et alentours.
          </p>
          <h2>Valeurs</h2>
          <p>
            À l'occasion d'une de nos réunions, nous avons souhaité transcrire{" "}
            <Link href="/a_propos/valeurs">
              <a href="/a_propos/valeurs">nos valeurs</a>
            </Link>{" "}
            afin d'accueillir au mieux les nouveaux membres du groupe.
          </p>
        </div>
      ) : null}
      <p>
        N'hésitez pas à{" "}
        <Link href="/a_propos/notre_histoire">
          <a href="/a_propos/notre_histoire">nous contacter</a>
        </Link>{" "}
        pour toute demande supplémentaire d'informations.
      </p>
    </MainContent>
    <style jsx>{lightTextContent}</style>
  </Layout>
);

export default Page;
