import { readJSON } from "../../../utils/files";
import buildMetadata from "../../../utils/metadata";
import { Fragment } from "react";
import Member from "../../../components/member";
import Heading1 from "../../../components/h1";
import Heading2 from "../../../components/h2";
import Paragraph from "../../../components/p";
import Img from "../../../components/img";
import ContentBlock from "../../../components/contentBlock";
import MainContent from "../../../components/mainContent";
import Hero from "../../../components/hero";
import type { Member as AMember } from "../../../components/member";

export async function generateMetadata() {
  return buildMetadata({
    pathname: "/a_propos/bureau",
    title: "Bureau",
    description: "Découvrez les membres de notre bureau.",
  });
}

export default async function Page() {
  const members = await readJSON<AMember[]>("./data/members.json");
  const executives = members.filter((member) => member.role === "Bureau");
  const animators = members.filter(
    (member) => member.role === "Équipe d'animation"
  );

  return (
    <Fragment>
      <Hero />
      <MainContent>
        <ContentBlock>
          <Heading1>Le bureau EÉLV Douaisis</Heading1>
          <Paragraph>
            EÉLV Douaisis, en tant que groupe local, a pour but de faire vivre
            l’écologie politique dans le Douaisis et de représenter Europe
            Écologie - Les Verts localement.
          </Paragraph>
          <Heading2>Bureau</Heading2>
          <div>
            <Paragraph>
              À cet effet, un bureau est élu, un mois avant chaque congrès
              régional, dont la fonction est de fluidifier le fonctionnement du
              groupe et la circulation de l’information en son sein.
            </Paragraph>
            <Paragraph>
              Le bureau est également chargé de maintenir le lien entre le
              groupe local et les diverses instances régionales.
            </Paragraph>
          </div>

          {executives.map((executive) => (
            <Member member={executive} />
          ))}

          <Heading2>Équipe d’animation</Heading2>
          <div className="sided">
            <Paragraph>
              <Img
                orientation="landscape"
                src={"/illustrations/groupe_eelv_douaisis.jpg"}
                alt="Équipe d’animation d’EÉLV Douaisis"
              />
              Le bureau est soutenu dans sa mission par une équipe d’animation
              paritaire de {animators.length} personnes.
            </Paragraph>
            <Paragraph>
              Son rôle est d’effectuer une veille thématique et territoriale en
              participant aux travaux des diverses commissions thématiques
              d’Europe Écologie Les Verts.
            </Paragraph>
          </div>

          {animators.map((animator) => (
            <Member member={animator} />
          ))}
        </ContentBlock>
      </MainContent>
    </Fragment>
  );
}
