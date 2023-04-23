import Aside from "./aside";
import Heading2 from "./h2";
import Anchor from "./a";
import Paragraph from "./p";

export default function JoinUs() {
  return (
    <Aside>
      <Heading2>🌻 Rejoignez-nous !</Heading2>
      <Paragraph>Rejoignez le premier parti écologiste de France !</Paragraph>
      <Paragraph>
        ➡️{" "}
        <Anchor href="https://soutenir.eelv.fr/adherez-rejoignez-eelv/">
          J’adhère
        </Anchor>
      </Paragraph>
    </Aside>
  );
}
