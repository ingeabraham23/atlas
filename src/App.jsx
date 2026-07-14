import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Navbar from "./components/Navbar";
import Login from "./components/Login";

import Tiempos from "./components/Tiempos";
import Datos from "./components/Datos";
import TablaReporte from "./components/Reporte";
import Comision from "./components/Comision";
import AcercaDe from "./components/AcercaDe";

function App() {

  const [usuario, setUsuario] = useState(undefined);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
    });

    return () => unsubscribe();

  }, []);

  // Mientras Firebase verifica la sesión
  if (usuario === undefined) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "20px",
        }}
      >
        Cargando...
      </div>
    );
  }

  // Si no hay usuario, mostrar login
  if (!usuario) {
    return <Login />;
  }

  // Si hay usuario, mostrar la app
  return (
    <HashRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Tiempos />} />
          <Route path="/datos" element={<Datos />} />
          <Route path="/reporte" element={<TablaReporte />} />
          <Route path="/comision" element={<Comision />} />
          <Route path="/acerca" element={<AcercaDe />} />
        </Routes>

      </div>
    </HashRouter>
  );
}

export default App;