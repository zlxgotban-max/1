export default function NosComparison() {
  const data = [
    { name: "Cisco IOS", type: "Proprietário", pros: "Muito estvel", cons: "Custo elevado" },
    { name: "FortiOS", type: "Proprietário", pros: "Segurança avançada", cons: "Caro" },
    { name: "RouterOS", type: "Proprietário", pros: "Muito completo", cons: "Interface complexa" },
    { name: "OpenWISP", type: "Open Source", pros: "Flexível, gratuito", cons: "Requer setup" }
  ];
  return (
    <section>
      <h2>Comparativo NOS</h2>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
        {data.map(i => <div key={i.name} style={{border: '1px solid #333', padding: '15px'}}>
          <h3>{i.name}</h3><p>Tipo: {i.type}</p><p>Pros: {i.pros}</p><p>Cons: {i.cons}</p>
        </div>)}
      </div>
    </section>
  );
}