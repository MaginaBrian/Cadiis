import { useState } from "react";
import { contact } from "../data/content";
import { mailHref } from "../lib/mail";

const empty = { name: "", organisation: "", interest: "" };

export default function ContactForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [opened, setOpened] = useState(false);

  function set(field, value) {
    setValues((current) => ({ ...current, [field]: value }));
    setOpened(false);
  }

  function validate() {
    const next = {};
    if (values.name.trim().length < 2) next.name = "Enter your name.";
    if (values.organisation.trim().length < 2) next.organisation = "Enter your organisation.";
    if (!values.interest) next.interest = "Choose an interest.";
    return next;
  }

  function submit(event) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    const body = `Name: ${values.name.trim()}\nOrganisation: ${values.organisation.trim()}\nInterest: ${values.interest}\n`;
    window.location.href = mailHref(contact.email, `Enquiry from ${values.name.trim()}`, body);
    setOpened(true);
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      <label>
        Name
        <input name="name" autoComplete="name" value={values.name} onChange={(e) => set("name", e.target.value)} aria-invalid={Boolean(errors.name)} />
        {errors.name ? <span className="error">{errors.name}</span> : null}
      </label>
      <label>
        Organisation
        <input name="organisation" autoComplete="organization" value={values.organisation} onChange={(e) => set("organisation", e.target.value)} aria-invalid={Boolean(errors.organisation)} />
        {errors.organisation ? <span className="error">{errors.organisation}</span> : null}
      </label>
      <label>
        Interest
        <select name="interest" value={values.interest} onChange={(e) => set("interest", e.target.value)} aria-invalid={Boolean(errors.interest)}>
          <option value="">Select an interest</option>
          {contact.interests.map((interest) => (
            <option key={interest} value={interest}>{interest}</option>
          ))}
        </select>
        {errors.interest ? <span className="error">{errors.interest}</span> : null}
      </label>
      <button className="btn btn--brass" type="submit">Send enquiry</button>
      {opened ? (
        <p role="status">Your email app should open with this enquiry addressed to {contact.email}. If it does not, write to that address directly.</p>
      ) : (
        <p className="fine">This opens your email app. The message is not stored on the website.</p>
      )}
    </form>
  );
}
