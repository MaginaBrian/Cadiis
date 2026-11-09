export default function ObserveFlow({ steps }) {
  return (
    <div className="flow">
      <div className="flow__track" aria-hidden="true">
        <span className="flow__dot" />
      </div>
      {steps.map((step) => (
        <article className="card flow__step" key={step.n}>
          <p className="eyebrow">{step.n}</p>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </article>
      ))}
    </div>
  );
}
