import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import {
  faClock,
  faDollarSign,
  faInfoCircle,
  faReceipt,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConfirmarModal from "./ConfirmarModal";

const navigationItems = [
  { path: "/", icon: faClock, label: "Tiempos" },
  { path: "/datos", icon: faTableList, label: "Datos" },
  { path: "/reporte", icon: faReceipt, label: "Reporte" },
  { path: "/comision", icon: faDollarSign, label: "" },
  { path: "/acerca", icon: faInfoCircle, label: "" },
];



function Navbar() {

  const [mostrarModal, setMostrarModal] = useState(false);

  const location = useLocation();

  const cerrarSesion = async () => {

  try{

    await signOut(auth);

  }catch(error){

    console.log(error);

  }

};

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {navigationItems.map((item) => (
          <li
            key={item.path}
            className={`nav-item ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            <Link to={item.path} className="nav-link">
              <FontAwesomeIcon icon={item.icon} className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <button
    className="btn-cerrar"
    onClick={() => setMostrarModal(true)}
>
    Cerrar sesión
</button>

<ConfirmarModal
    abierto={mostrarModal}
    titulo="Cerrar sesión"
    usuario={auth.currentUser?.email}
    mensaje="¿Estás seguro de que deseas cerrar la sesión? Tendrás que volver a iniciar sesión para acceder nuevamente a la aplicación."
    onCancelar={() => setMostrarModal(false)}
    onConfirmar={cerrarSesion}
/>
    </nav>
  );
}

export default Navbar;