import { lightTextContent, lightAsideBox } from "../styles";

export default function Newsletter() {
  return (
    <aside className="aside">
      <h2>💌 Lettre d'information</h2>
      <p>
        Recevez notre lettre d'information{" "}
        <a href="https://framaforms.org/inscription-lettre-dinformation-eelv-douaisis-1577446140">
          en complétant ce formulaire&nbsp;!
        </a>
      </p>
      <style jsx>{lightTextContent}</style>
      <style jsx>{lightAsideBox}</style>
    </aside>
  );
}
