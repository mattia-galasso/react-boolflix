export default function LanguageFlag({ language }) {
  /* LANGUAGE TO IMAGE */
  function languageFlag(language) {
    const supportedLanguages = ["en", "fr", "it", "ja"];
    if (!supportedLanguages.includes(language)) {
      return (
        <img
          src={`./flags/undefined.png`}
          alt="Undefined"
          className="flagImage"
        />
      );
    }
    return (
      <img
        src={`./flags/${language}.png`}
        alt={language}
        className="flagImage"
      />
    );
  }

  return (
    <li>
      <p className="cardTitle">Original Language:</p> {languageFlag(language)}
    </li>
  );
}
