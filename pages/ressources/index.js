import Link from "../../components/link";
import Layout from "../../layouts/main";
import MainContent from "../../components/mainContent";
import { lightTextContent } from "../../styles";

const Page = () => (
  <Layout
    title="Ressources"
    backgroundImage={require("../../illustrations/ressources.jpg")}
  >
    <MainContent>
      <h1>Ressources</h1>
      <p>
        Nous proposons quelques ressources pour vous aider dans la découverte de
        notre combat politique :
      </p>
      <ul>
        {false ? (
          <li>
            <Link href="/ressources/faq">
              <a>questions fréquemment posées</a>
            </Link>
            ,
          </li>
        ) : null}
        <li>
          <Link href="/ressources/etre-ecologiste">
            <a>être écologiste</a>
          </Link>
          ,
        </li>
        <li>
          <a
            href="https://drive.google.com/drive/u/2/folders/1ai43TauLWdLgRSBv670HBCTmJOO9UaL2"
            onClick={openInNewTab}
          >
            archives des lettres aux adhérent-es et sympathisant-es
          </a>
          ,
        </li>
        <li>
          <a
            href="https://drive.google.com/drive/u/2/folders/1dGPkrksHbigVHMNse1RjjAlvJsbcsI8y"
            onClick={openInNewTab}
          >
            archives des communiqués de presse
          </a>
          .
        </li>
      </ul>
      <p>Les liens suivants peuvent également vous intéresser :</p>
      <ul>
        <li>
          <a href="https://www.sortirdunucleaire.org/" onClick={openInNewTab}>
            Réseau sortir du nucléaire
          </a>
          ,
        </li>
        <li>
          <a href="https://www.greenpeace.fr/" onClick={openInNewTab}>
            GreenPeace
          </a>
          ,
        </li>
        <li>
          <a
            href="https://gon.fr/gon/section-la-gorgebleue/"
            onClick={openInNewTab}
          >
            Groupe ornithologique et naturaliste
          </a>
          ,
        </li>
        <li>
          <a href="https://www.lpo.fr/" onClick={openInNewTab}>
            LPO
          </a>
          ,
        </li>
        <li>
          <a href="https://www.atmo-hdf.fr/" onClick={openInNewTab}>
            Atmo HDF
          </a>
          ,
        </li>
        <li>
          <a href="https://zerowastefrance.org" onClick={openInNewTab}>
            Zéro Waste France
          </a>
          ,
        </li>
        <li>
          <a
            href="http://www.reseau-environnement-sante.fr/"
            onClick={openInNewTab}
          >
            Réseau environnement santé
          </a>
          ,
        </li>
        <li>
          <a
            href="https://www.colibris-lemouvement.org/"
            onClick={openInNewTab}
          >
            Le mouvement Colibris
          </a>
          .
        </li>
      </ul>
    </MainContent>
    <style jsx>{lightTextContent}</style>
  </Layout>
);

export default Page;

function openInNewTab(e) {
  event.stopPropagation();
  event.preventDefault();
  window.open(e.target.href, "_blank").focus();
}
