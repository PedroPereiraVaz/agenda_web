import { useEffect, useState } from "react";
import ListaEventos from "../componentes/ListaEventos";
import { obtenerEventos } from "../servicios/eventosServicio";

function Favoritos({ favoritos, toggleFavorito }) {
  const [eventos, setEventos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    obtenerEventos().then((data) => {
      setEventos(data);
      setCargando(false);
    });
  }, []);

  if (cargando) return <h1>⏳ Cargando tus favoritos...</h1>;
  const eventosFavoritos = eventos.filter((e) => favoritos.includes(e.id));

  return (
    <div>
      <h1>Mis Eventos Favoritos ❤️</h1>

      {eventosFavoritos.length === 0 ? (
        <h1>No tienes favoritos aún. ¡Ve a añadir algunos!</h1>
      ) : (
        <ListaEventos eventos={eventosFavoritos} onEliminar={toggleFavorito} />
      )}
    </div>
  );
}

export default Favoritos;
