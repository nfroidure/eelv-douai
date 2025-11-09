import Aside from "./aside";
import Anchor from "./a";
import Heading2 from "./h2";
import Paragraph from "./p";
import { type News } from "@/utils/news";

export default function LastNews({ definition }: { definition: News }) {
  return (
    <Aside>
      <Heading2>🗞️ Dernière actualité</Heading2>
      <Paragraph>
        <Anchor href={`/actualite/${definition.id}`}>{definition.title}</Anchor>
        <br />
        {definition.description}
      </Paragraph>
    </Aside>
  );
}
