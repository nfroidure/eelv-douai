import { lightTextContent, vRythm } from "../styles";
import css from "styled-jsx/css";

const memberBlockStyle = css`
  .root {
    clear: left;
    padding-top: ${vRythm};
  }
  h3 {
  }
`;

export default function Member({ member }) {
  return (
    <div className="root">
      <h3>{member.name}</h3>
      <p>{member.responsibilities.join(", ")}</p>
      {member.bio ? <p>{member.bio}</p> : null}
      <p>
        {member.emails.length
          ? [
              <strong>
                Email&nbsp;:{" "}
                <a href={`mailto:${member.emails[0]}`}>{member.emails[0]}</a>
              </strong>,
              <br />,
            ]
          : null}
        <strong>Téléphone&nbsp;:</strong> {member.phone}
        {member.twitter || member.facebook ? (
          <span>
            <br />
            <strong>Réseaux sociaux&nbsp;:</strong>
            <br />{" "}
            {member.twitter ? (
              <a href={`https://twitter.com/${member.twitter}`}>Twitter</a>
            ) : null}
            {member.twitter && member.facebook ? " - " : null}
            {member.facebook ? (
              <a href={`https://www.facebook.com/${member.facebook}`}>
                Facebook
              </a>
            ) : null}
          </span>
        ) : null}
      </p>
      <style jsx>{lightTextContent}</style>
      <style jsx>{memberBlockStyle}</style>
    </div>
  );
}
