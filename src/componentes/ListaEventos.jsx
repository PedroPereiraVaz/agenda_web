import { BtnVerDetalle, BtnQuitarFavorito } from "./Botones";

function ListaEventos({ eventos, onEliminar }) {
  if (!eventos || eventos.length === 0) {
    return <p>No se encontraron eventos.</p>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Categoría</th>
            <th>Fecha</th>
            <th>Lugar</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {eventos.map((e) => (
            <tr key={e.id}>
              <td>{e.titulo}</td>
              <td>{e.categoria}</td>
              <td>{e.fecha}</td>
              <td>{e.lugar}</td>
              <td>
                <div>
                  <BtnVerDetalle id={e.id} />
                  {onEliminar && (
                    <BtnQuitarFavorito onClick={() => onEliminar(e.id)} />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaEventos;
