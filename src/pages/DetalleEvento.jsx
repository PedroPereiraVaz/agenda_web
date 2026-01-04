import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { obtenerEventoPorId } from "../servicios/eventosServicio";
import { BtnAnadirFavorito } from "../componentes/Botones";

function DetalleEvento({ favoritos, toggleFavorito }) {
  const { id } = useParams();
  const idNum = parseInt(id);

  const [evento, setEvento] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    obtenerEventoPorId(id)
      .then((data) => {
        setEvento(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error(err);
        setCargando(false);
      });
  }, [id]);

  const esFavorito = favoritos.includes(idNum);

  if (cargando) return <h1>⏳ Cargando detalles...</h1>;

  if (!evento)
    return (
      <h1>
        ❌ Evento no encontrado <Link to="/">Volver</Link>
      </h1>
    );

  return (
    <div>
      <h2>
        <Link to="/">⬅ Volver al listado</Link>
      </h2>

      <div className="detalles">
        <header>
          <h1>{evento.titulo}</h1>
          <h2>{evento.categoria}</h2>
        </header>

        <div>
          <p>
            <strong>📅 Fecha:</strong> {evento.fecha}
          </p>
          <p>
            <strong>📍 Lugar:</strong> {evento.lugar}
          </p>
        </div>

        <div className="descripcion">
          <h3>Descripción</h3>
          <p>{evento.descripcion}</p>
        </div>

        <footer>
          <BtnAnadirFavorito
            esFavorito={esFavorito}
            onClick={() => toggleFavorito(idNum)}
          />
        </footer>
      </div>
    </div>
  );
}

export default DetalleEvento;
