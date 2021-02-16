import { lightTextContent, lightAsideBox } from "../styles";

export default function JoinUs() {
  return (
    <aside className="aside">
      <h2>🌻 Rejoignez-nous !</h2>
      <p>Rejoignez le premier parti écologiste de France !</p>
      <p>
        ➡️{" "}
        <a href="https://soutenir.eelv.fr/adherez-rejoignez-eelv/">J'adhère</a>
      </p>
      <style jsx>{lightTextContent}</style>
      <style jsx>{lightAsideBox}</style>
    </aside>
  );
}
