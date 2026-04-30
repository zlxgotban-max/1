export default function TeamSection() {
  const members = ["Henry Ferreira", "João Nunes", "Laudir Feliciano", "Manuel Frigideira"];
  return (
    <section>
      <h2>Equipa</h2>
      <ul>{members.map(m => <li key={m}>{m}</li>)}</ul>
    </section>
  );
}