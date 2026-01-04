import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">Agenda Web de Eventos del Centro</Link>
      </div>
      <div>
        <Link to="/">📅 Eventos</Link>
        <Link to="/favoritos">❤️ Favoritos</Link>
      </div>
    </nav>
  );
}

export default Navbar;
