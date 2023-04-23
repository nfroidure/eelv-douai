import Anchor from "./a";
import Heading3 from "./h3";
import Paragraph from "./p";
import Strong from "./strong";

export type Member = {
  name: string;
  responsibilities: string[];
  bio: string;
  phone: string;
  twitter: string;
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
        {member.twitter || member.facebook ? (
          <>
            <br />
            <Strong>Réseaux sociaux&nbsp;:</Strong>
            <br />{" "}
            {member.twitter ? (
              <Anchor href={`https://twitter.com/${member.twitter}`}>
                Twitter
              </Anchor>
            ) : null}
            {member.twitter && member.facebook ? " - " : null}
            {member.facebook ? (
              <Anchor href={`https://www.facebook.com/${member.facebook}`}>
                Facebook
              </Anchor>
            ) : null}
            {(member.twitter || member.facebook) && member.blog ? " - " : null}
            {member.blog ? <Anchor href={`${member.blog}`}>Blog</Anchor> : null}
          </>
        ) : null}
      </Paragraph>
    </div>
  );
}
