export default function Heading({ text, highlight }) {
  if (!text) return null;
  if (!highlight) return text;
  const at = text.toLowerCase().indexOf(highlight.toLowerCase());
  if (at < 0) return text;
  return (
    <>
      {text.slice(0, at)}
      <em className="em-gold">{text.slice(at, at + highlight.length)}</em>
      {text.slice(at + highlight.length)}
    </>
  );
}
