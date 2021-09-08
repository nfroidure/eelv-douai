import Layout from "../layouts/main";
import MainContent from "../components/mainContent";
import { lightTextContent } from "../styles";

const ORGANISATION_NAME = "EÉLV Douaisis";
const DOMAIN_NAME = "eelv-douaisis.fr";

const Page = () => (
  <Layout title="Mentions légales">
    <MainContent>
      <h1>Mentions légales</h1>

      <h1>Conditions générales d'utilisation</h1>
      <p>
        La navigation sur ce site est soumise aux présentes conditions
        d'utilisation. Les personnes qui accèdent aux informations mises à
        disposition par {ORGANISATION_NAME} sur son site Internet reconnaissent
        en avoir pris connaissance et les accepter.
      </p>
      <h2>Édition</h2>
      <p>
        Le site {DOMAIN_NAME} est édité par EÉLV Haut-de-France pour le
        Douaisis, personne morale sis 30 Rue des Meuniers, 59000 Lille. Le
        directeur de publication est Nicolas FROIDURE.
      </p>
      <h2>Propriété intellectuelle</h2>
      <p>
        Le contenu de ce site et notamment, mais non exclusivement, les textes,
        photographies, mise en page, charte graphique, marques, logos et autres
        signes distinctifs qui apparaissent dans ce site sont protégés par les
        droits de propriété intellectuelle.
      </p>
      <p>
        Toute reproduction, représentation, modification, publication,
        transmission, dénaturation totale ou partielle du site ou de son
        contenu, par quelque procédé que ce soit, et sur quelque support que ce
        soit est interdite sauf accord express du directeur de publication.
      </p>
      <p>
        Toute exploitation non autorisée du site ou de son contenu, des
        informations qui y sont divulguées, engagerait la responsabilité de
        l'utilisateur et constituerait une contrefaçon sanctionnée par les
        articles L 335-2 et suivants du Code de la Propriété Intellectuelle. Il
        en est de même des bases de données figurant, le cas échéant, sur le
        site {DOMAIN_NAME}
        qui sont protégées par les dispositions de la loi du 1er juillet 1998
        portant transposition dans le Code de la Propriété Intellectuelle de la
        Directive Européenne du 11 mars 1996 relative à la protection juridique
        des bases de données.
      </p>
      <p>
        A ce titre, toute reproduction ou extraction engagerait la
        responsabilité de l'utilisateur.
      </p>
      <h2>Contenu du site</h2>
      <p>
        Malgré tous le soin apporté à la réalisation de ce site et à son
        actualisation régulière, des erreurs peuvent s'être glissées dans les
        informations et/ou documents présentés. Les utilisateurs du site
        procéderont donc à toutes vérifications utiles. {ORGANISATION_NAME}{" "}
        pourra à tout moment, sans préavis, apporter des améliorations ou des
        changements aux programmes ou aux services décrits sur ce site.
      </p>
      <p>
        {ORGANISATION_NAME} décline toute responsabilité en cas de difficulté
        d'accès à son site ou d'interruptions dans la connexion quelles qu'en
        soient les causes.
      </p>
      <p>
        De plus, {ORGANISATION_NAME} ne saurait être tenu responsable d'un
        dommage ou virus qui pourrait infecter votre ordinateur ou tout matériel
        informatique, suite à une utilisation ou accès au site ou téléchargement
        provenant de ce site.
      </p>
      <h2>Liens hypertextes et références</h2>
      <p>
        Le site {DOMAIN_NAME} donne accès à d'autres sites via des liens
        hypertextes, notamment dans les rubriques Crédits et Annuaire. N'étant
        pas les gestionnaires de ces sites, nous ne pouvons pas en contrôler le
        contenu. En conséquence, nous ne pourrons en aucun cas être tenus pour
        responsables du contenu des sites ainsi accessibles, ou des éventuelles
        collectes et transmissions de données personnelles, installation de
        cookies ou tout autre procédé tendant aux mêmes fins, effectués par ces
        sites.
      </p>
      <p>
        Tout site public ou privé est autorisé à établir, sans autorisation
        préalable, un lien vers le site {DOMAIN_NAME} à condition :
      </p>
      <ul>
        <li>
          que les pages de {DOMAIN_NAME} ne soient pas imbriquées à l'intérieur
          des pages d'un autre site, notamment à l'intérieur de frames ou de
          cadres,
        </li>
        <li>
          de n'utiliser à l'intérieur de la balise &lt;a&gt; ainsi qu'à
          l'intérieur de la balise &lt;title&gt; que des mots en rapport direct
          avec le contenu de ce site et/ou de la page pointée en particulier.
        </li>
      </ul>
      <h2>Crédits</h2>
      <ul>
        <li>
          Design / code :{" "}
          <a
            href="https://nicolasfroidure.fr"
            title="Visiter le site de Nicolas Froidure"
          >
            Nicolas Froidure
          </a>
        </li>
      </ul>
    </MainContent>
    <style jsx>{lightTextContent}</style>
  </Layout>
);

export default Page;
