import React from "react";

const AcercaDe = () => {
  const version = "1.0.3";
  const fechaActualizacion = "26 de junio de 2025";

  return (
    <div style={styles.container}>
      <h2 style={styles.titulo}>Información de la Aplicación</h2>

      <div style={styles.section}>
        <p><strong>Nombre:</strong> Lilith</p>
        <p><strong>Versión:</strong> {version}</p>
        <p><strong>Última actualización:</strong> {fechaActualizacion}</p>
      </div>

      <div style={styles.section}>
        <p><strong>Desarrollador:</strong> JoyBoy</p>
        <p><strong>Contacto:</strong> WhatsApp 231 159 1893</p>
        <p><strong>Ubicación:</strong> Chignautla pue.</p>
      </div>

      <div style={styles.section}>
        <p><strong>Tecnologías utilizadas:</strong></p>
        <ul style={styles.lista}>
          <li>React.js</li>
          <li>Dexie.js (IndexedDB)</li>
          <li>React Router</li>
          <li>CSS personalizado</li>
        </ul>
      </div>

      <div style={styles.pie}>
        <p>© {new Date().getFullYear()} JoyVolt Corporation. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 500,
    margin: "0 auto",
    padding: "24px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "sans-serif",
    color: "#333",
    lineHeight: 1.6,
  },
  titulo: {
    fontSize: "1.5rem",
    marginBottom: "16px",
    borderBottom: "2px solid #1976d2",
    paddingBottom: "8px",
    color: "#1976d2",
  },
  section: {
    marginBottom: "20px",
  },
  lista: {
    paddingLeft: "20px",
    marginTop: "6px",
  },
  pie: {
    fontSize: "0.85rem",
    color: "#777",
    marginTop: "32px",
    borderTop: "1px solid #ddd",
    paddingTop: "12px",
    textAlign: "center",
  },
};

export default AcercaDe;
