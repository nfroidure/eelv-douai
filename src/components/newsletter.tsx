import Aside from "./aside";
import Anchor from "./a";
import Heading2 from "./h2";
import Paragraph from "./p";

export default function Newsletter() {
  return (
    <Aside>
      <Heading2>💌 Lettre d’information</Heading2>
      <Paragraph>
        Recevez notre lettre d’information{" "}
        <Anchor href="https://framaforms.org/inscription-lettre-dinformation-des-ecologistes-du-douaisis-1577446140">
          en complétant ce formulaire&nbsp;!
        </Anchor>
      </Paragraph>
    </Aside>
  );
}
