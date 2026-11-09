export default function Photo({ src, alt, caption, eager = false, framed = false, className = "" }) {
  return (
    <figure className={`photo ${framed ? "photo--framed" : ""} ${className}`.trim()}>
      <span className="photo__media">
        <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} decoding="async" />
        <span className="photo__tint" aria-hidden="true" />
      </span>
      {caption ? <figcaption className="photo__caption">{caption}</figcaption> : null}
    </figure>
  );
}
