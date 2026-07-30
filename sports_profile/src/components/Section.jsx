function Section({ title, children }) {
  return (
    <section className="section">

      <h2>{title}</h2>

      <div className="line"></div>

      {children}

    </section>
  );
}

export default Section;