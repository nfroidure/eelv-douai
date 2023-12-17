import ContentBlock from "../components/contentBlock";
import Heading1 from "../components/h1";
import Paragraph from "../components/p";
import buildMetadata from "../utils/metadata";

export async function generateMetadata() {
  return buildMetadata({
    pathname: "/404",
    title: "Page non-trouvée",
    description: "La page que vous recherchez semble inexistante.",
  });
}

export default async function Page() {
  return (
    <ContentBlock>
      <Heading1>Ooops!</Heading1>
      <Paragraph>
        La page que vous recherchez n’existe pas ou plus.
      </Paragraph>{" "}
    </ContentBlock>
  );
}
