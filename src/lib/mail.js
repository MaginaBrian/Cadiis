export function mailHref(email, subject = "", body = "") {
  const query = [
    subject && `subject=${encodeURIComponent(subject)}`,
    body && `body=${encodeURIComponent(body)}`,
  ]
    .filter(Boolean)
    .join("&");
  return `mailto:${email}${query ? `?${query}` : ""}`;
}
