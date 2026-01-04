import { Link } from "react-router-dom";

export function BtnVerDetalle({ id }) {
  return (
    <Link to={`/evento/${id}`}>
      <button>Ver detalle</button>
    </Link>
  );
}

export function BtnAnadirFavorito({ esFavorito, onClick }) {
  return (
    <button className={`${esFavorito ? "activo" : ""}`} onClick={onClick}>
      {esFavorito ? "✅ En Favoritos" : "❤️ Añadir a Favoritos"}
    </button>
  );
}

export function BtnQuitarFavorito({ onClick }) {
  return (
    <button onClick={onClick} title="Quitar">
      Quitar
    </button>
  );
}
