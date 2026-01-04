import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Eventos from "./pages/Eventos";
import Navbar from "./componentes/Navbar";
import DetalleEvento from "./pages/DetalleEvento";
import Favoritos from "./pages/Favoritos";

function App() {
  const [favoritos, setFavoritos] = useState(() => {
    const guardados = localStorage.getItem("favoritos");
    return guardados ? JSON.parse(guardados) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const toggleFavorito = (id) => {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((favId) => favId !== id)); // Quitar
    } else {
      setFavoritos([...favoritos, id]); // Añadir
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Eventos />} />
        <Route
          path="/favoritos"
          element={
            <Favoritos favoritos={favoritos} toggleFavorito={toggleFavorito} />
          }
        />
        <Route
          path="/evento/:id"
          element={
            <DetalleEvento
              favoritos={favoritos}
              toggleFavorito={toggleFavorito}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
