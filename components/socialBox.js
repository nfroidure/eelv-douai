import { lightTextContent, lightAsideBox } from "../styles";

export default function Newsletter() {
  return (
    <aside className="aside">
      <h2>📢 Gardez le contact</h2>
      <p>Suivez notre actualité sur les réseaux sociaux</p>
      <p>
        🐦 <a href="https://twitter.com/eelv_douai">Twitter</a>
        <br />
        🌍 <a href="https://facebook.com/eelv.douai">Facebook</a>
        <br />
        📺{" "}
        <a href="https://www.youtube.com/channel/UCc6DxRA5lGKrhtcvMGdll3g">
          YouTube
        </a>
      </p>
      <style jsx>{lightTextContent}</style>
      <style jsx>{lightAsideBox}</style>
    </aside>
  );
}
