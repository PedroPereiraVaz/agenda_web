import { useEffect, useState } from "react";
import ListaEventos from "../componentes/ListaEventos";
import { FiltroCategoria, Buscador } from "../componentes/Utiles";
import { obtenerEventos } from "../servicios/eventosServicio";

function Eventos() {
  const [eventos, setEventos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todos");

  useEffect(() => {
    obtenerEventos().then((data) => {
      setEventos(data);
      setCargando(false);
    });
  }, []);

  const eventosFiltrados = eventos.filter((e) => {
    const coincideTexto =
      e.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      e.lugar.toLowerCase().includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todos" || e.categoria === categoria;

    return coincideTexto && coincideCategoria;
  });

  if (cargando) return <h1>⏳ Cargando agenda...</h1>;

  return (
    <div>
      <h1>Agenda de Eventos</h1>

      <div className="filtros">
        <Buscador onBuscar={setBusqueda} />
        <FiltroCategoria onFiltrar={setCategoria} />
      </div>
      <ListaEventos eventos={eventosFiltrados} />
      <p className="contador">
        Mostrando <strong>{eventosFiltrados.length}</strong> de{" "}
        <strong>{eventos.length}</strong> eventos
      </p>
    </div>
  );
}

export default Eventos;
