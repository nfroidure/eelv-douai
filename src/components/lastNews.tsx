import Aside from "./aside";
import Anchor from "./a";
import Heading2 from "./h2";
import Paragraph from "./p";

export default function LastNews({ definition }) {
  return (
    <Aside>
      <Heading2>🗞️ Dernière actualité</Heading2>
      <Paragraph>
        <Anchor legacyBehavior href={`/actualite/${definition.href}`}>
          {definition.title}
        </Anchor>
        <br />
        {definition.description}
      </Paragraph>
    </Aside>
  );
}
