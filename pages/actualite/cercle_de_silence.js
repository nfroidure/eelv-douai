import Layout from "../../layouts/main";
import MainContent from "../../components/mainContent";
import { lightTextContent } from "../../styles";

export const definition = {
  title: "Cercle de silence",
  description:
    "Cercle de silence en protestation contre l'enfermement systématique des sans-papiers.",
  href: "cercle_de_silence",
  date: "2011-12-03T16:00:00Z",
  place: "Douai"
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
      <p>
        Nous appelons toutes celles et ceux qui souhaitent s’associer à notre
        protestation de façon non violente et silencieuse à nous rejoindre
        chaque{" "}
        <strong>
          troisième samedi du mois place d’Armes à Douai de 18h à 19h
        </strong>
        , pour former le CERCLE DE SILENCE.
      </p>
      <ul>
        <li>
          <strong>Parce que :</strong> Nous refusons que chaque jour, des
          personnes sans papiers soient arrêtées, mises en centres de rétention,
          expulsées.
        </li>
        <li>
          <strong>Parce que :</strong> Nous refusons que soient appliquées en
          notre nom, des décisions politiques qui broient des familles, des
          couples, des individus.
        </li>
        <li>
          <strong>Parce que :</strong> Nous refusons que des hommes, des femmes,
          des enfants, subissent des traitements inhumains et dégradants.
        </li>
      </ul>
      <p>
        Et parce que la machine d’État qui brise des vies chaque jour ne se
        grippera que si chacun y apporte son grain de sable.
      </p>
      <p>
        Ces problèmes sont mondiaux et complexes. Nous ne prétendons pas avoir
        la solution. Aujourd’hui nous pensons que nous pouvons aller plus loin
        ensemble et que le chemin passe par le respect de la dignité de toute
        personne humaine. Telle est fondamentalement notre espérance. Elle passe
        par une réflexion collective qui nous concerne tous.
      </p>
      <blockquote>
        <p>
          Le 21 août 2011, décision du juge des libertés et de la détention de
          Lille de faire sortir du centre de rétention de Lesquin une famille de
          Serbes du Kosovo qui y avait été envoyée par la préfecture du
          Puy-de-Dôme. Le juge avait en effet libéré la famille rom en invoquant
          les « traitements inhumains et dégradants » que le couple Bejzaku et
          ses trois jeunes enfants ont subis au cours de la procédure, de
          l’interpellation au petit matin à Clermont-Ferrand aux douze heures de
          voyage imposées jusqu’à l’autre bout de la France.
        </p>
        <p>
          À son retour à Clermont-Ferrand, le 24 août, la jeune maman, âgée de
          30 ans et enceinte de cinq mois, est admise d’urgence au service des
          grossesses à risques. Elle souffre d’un décollement du placenta.
          Mercredi 21 septembre, au CHU de Clermont-Ferrand, elle donne
          naissance à une petite fille. Mais El Medina, c’était son prénom, n’a
          pas survécu.
        </p>
      </blockquote>
      <p>
        <strong>Inventons une politique d’hospitalité :</strong> Propositions de
        mise en oeuvre facile et rapide, et capable d’avoir un effet immédiat
        sur la vie quotidienne des migrants et des demandeurs d’asile, en
        mettant fin à des situations absurdes et injustes.
      </p>
      <p>
        <strong>
          Demandons aux candidats aux élections à venir leur position par
          rapport à ces propositions :
        </strong>
      </p>
      <ul>
        <li>
          Mettre fin au chantage sur les pays d’origine, en dénonçant les «
          accords de gestion concertée des flux migratoires » qui conditionnent
          la politique de coopération et de développement à des clauses de
          réadmission ;
        </li>
        <li>
          Mettre en place une procédure d’asile unique avec droit au travail ;
        </li>
        <li>
          Attribuer un visa de plein droit pour l’ensemble des membres de
          familles de Français ou d’étrangers installés en France ;
        </li>
        <li>
          Stabiliser le séjour, par la délivrance de plein droit de cartes de
          résident lors du premier renouvellement, pour tous les motifs liés au
          respect de la vie privée et familiale ;
        </li>
        <li>
          Rendre exceptionnel le placement en rétention administrative et
          interdire le placement en rétention des familles, avec ou sans leurs
          enfants, des femmes enceintes, des personnes vulnérables (santé
          fragile, personnes âgées, handicapées) ;
        </li>
        <li>Réduire la durée maximale de rétention ;</li>
        <li>
          Fermer les locaux de rétention permanents et interdire leur création
          provisoire ;
        </li>
        <li>
          Accorder un accès au droit de vote et d’éligibilité pour les élections
          locales et régionales aux étrangers titulaires d’un titre de séjour
          stable, dans le cadre d’une « citoyenneté de résidence ».
        </li>
      </ul>
      <p>
        <strong>
          Prochain cercle de silence à Douai : samedi 17/11/2011 à 18h.
        </strong>
      </p>
      <p>
        Cercles de silence déjà mis en place dans le Nord-Pas de Calais : Lille,
        Roubaix, Tourcoing, Hazebrouck, Maubeuge, Valenciennes, Douai,
        Dunkerque, Bailleul, Arras, Béthune, Calais, Desvres, Saint-Omer, et
        dans plus de 172 villes en France.
      </p>
    </MainContent>
    <style jsx>{lightTextContent}</style>
  </Layout>
);
