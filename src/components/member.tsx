import { BLUESKY_APP } from "../utils/constants";
import Anchor from "./a";
import Heading3 from "./h3";
import Paragraph from "./p";
import Strong from "./strong";

export type Member = {
  name: string;
  responsibilities: string[];
  bio: string;
  phone: string;
  mastodon: string;
  bluesky: string;
  facebook: string;
  blog: string;
  role: string;
  emails: string[];
};

export default function Member({ member }: { member: Member }) {
  return (
    <div className="root">
      <Heading3>{member.name}</Heading3>
      <Paragraph>{member.responsibilities.join(", ")}</Paragraph>
      {member.bio ? <Paragraph>{member.bio}</Paragraph> : null}
      <Paragraph>
        {member.emails.length
          ? [
              <Strong>
                Email&nbsp;:{" "}
                <Anchor href={`mailto:${member.emails[0]}`}>
                  {member.emails[0]}
                </Anchor>
              </Strong>,
              <br />,
            ]
          : null}
        <Strong>Téléphone&nbsp;:</Strong> {member.phone}
        {member.facebook || member.bluesky || member.mastodon ? (
          <>
            <br />
            <Strong>Réseaux sociaux&nbsp;:</Strong>
            <br />{" "}
            {["facebook", "mastodon", "bluesky", "blog"]
              .filter((type) => member[type])
              .map((type, index) => (
                <>
                  {index > 0 ? " - " : null}
                  {type === "facebook" ? (
                    <Anchor
                      href={`https://www.facebook.com/${member.facebook}`}
                    >
                      Facebook
                    </Anchor>
                  ) : null}
                  {type === "mastodon" ? (
                    <Anchor
                      href={`https://${member.mastodon.split("@").pop()}/@${
                        member.mastodon.split("@")[1]
                      }`}
                    >
                      Mastodon
                    </Anchor>
                  ) : null}
                  {type === "bluesky" ? (
                    <Anchor
                      href={`https://${BLUESKY_APP}/profile/${
                        member.bluesky.split("@")[1]
                      }.${member.bluesky.split("@").pop()}`}
                    >
                      Bluesky
                    </Anchor>
                  ) : null}
                  {type === "blog" ? (
                    <Anchor href={`${member.blog}`}>Blog</Anchor>
                  ) : null}
                </>
              ))}
          </>
        ) : null}
      </Paragraph>
    </div>
  );
}
