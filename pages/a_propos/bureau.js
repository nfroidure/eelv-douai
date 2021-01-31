import Link from "../../components/link";
import Layout from "../../layouts/main";
import MainContent from "../../components/mainContent";
import Member from "../../components/member";
import { lightTextContent } from "../../styles";
import MEMBERS from "../../data/members.json";

const EXECUTIVES = MEMBERS.filter((member) => member.role === "Bureau");
const ANIMATORS = MEMBERS.filter(
  (member) => member.role === "Équipe d'animation"
);

export default () => (
  <Layout title="Bureau">
    <MainContent>
      <h1>Le bureau EÉLV Douaisis</h1>
      <p>
        EÉLV Douaisis, en tant que groupe local, a pour but de faire vivre
        l'écologie politique dans le Douaisis et de représenter Europe Écologie
        - Les Verts localement.
      </p>
      <h2>Bureau</h2>
      <div>
        <p>
          À cet effet, un bureau est élu, un mois avant chaque congrès régional,
          dont la fonction est de fluidifier le fonctionnement du groupe et la
          circulation de l'information en son sein.
        </p>
        <p>
          Le bureau est également chargé de maintenir le lien entre le groupe
          local et les diverses instances régionales.
        </p>
      </div>

      {EXECUTIVES.map((executive) => (
        <Member member={executive} />
      ))}

      <h2>Équipe d'animation</h2>
      <div className="sided">
        <p>
          <img
            src={require("../../illustrations/groupe_eelv_douaisis.jpg")}
            alt="Équipe d'animation d'EÉLV Douaisis"
          />
          Le bureau est soutenu dans sa mission par une équipe d'animation
          paritaire de {ANIMATORS.length} personnes.
        </p>
        <p>
          Son rôle est d'effectuer une veille thématique et territoriale en
          participant aux travaux des diverses commissions thématiques d'Europe
          Écologie Les Verts.
        </p>
      </div>

      {ANIMATORS.map((animator) => (
        <Member member={animator} />
      ))}

    </MainContent>
    <style jsx>{lightTextContent}</style>
  </Layout>
);
