import Aside from "./aside";
import Anchor from "./a";
import Heading2 from "./h2";
import Paragraph from "./p";

export default function Newsletter() {
  return (
    <Aside>
      <Heading2>📢 Gardez le contact</Heading2>
      <Paragraph>Suivez notre actualité sur les réseaux sociaux</Paragraph>
      <Paragraph>
        🐦 <Anchor href="https://twitter.com/eelv_douai">Twitter</Anchor>
        <br />
        🌍 <Anchor href="https://facebook.com/eelv.douai">Facebook</Anchor>
        <br />
        📺{" "}
        <Anchor href="https://www.youtube.com/channel/UCc6DxRA5lGKrhtcvMGdll3g">
          YouTube
        </Anchor>
      </Paragraph>
    </Aside>
  );
}
