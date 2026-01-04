export function Buscador({ onBuscar }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre o lugar..."
        onChange={(e) => onBuscar(e.target.value)}
      />
    </div>
  );
}

export function FiltroCategoria({ onFiltrar }) {
  const categorias = ["Todos", "Charla", "Torneo", "Taller", "Excursión"];

  return (
    <select onChange={(e) => onFiltrar(e.target.value)}>
      {categorias.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}
