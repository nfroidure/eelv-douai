import Link from "../components/link";
import { lightTextContent, lightAsideBox } from "../styles";

export default function LastNews({ definition }) {
  return (
    <aside className="aside">
      <h2>🗞️ Dernière actualité</h2>
      <p>
        <Link href={`/actualite/${definition.href}`}>
          <a>{definition.title}</a>
        </Link>
        <br />
        {definition.description}
      </p>
      <style jsx>{lightTextContent}</style>
      <style jsx>{lightAsideBox}</style>
    </aside>
  );
}
