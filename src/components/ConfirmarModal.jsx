import { useEffect } from "react";
import "./ConfirmarModal.css";

function ConfirmarModal({
  abierto,
  titulo,
  mensaje,
  usuario,
  onConfirmar,
  onCancelar,
}) {

  useEffect(() => {

    const cerrarEsc = (e) => {
      if (e.key === "Escape") {
        onCancelar();
      }
    };

    if (abierto) {
      document.addEventListener("keydown", cerrarEsc);
    }

    return () => {
      document.removeEventListener("keydown", cerrarEsc);
    };

  }, [abierto, onCancelar]);

  if (!abierto) return null;

  return (

    <div
      className="modal-overlay"
      onClick={onCancelar}
    >

      <div
        className="modal-confirmacion"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="modal-cerrar"
          onClick={onCancelar}
        >
          ✕
        </button>

        <div className="modal-avatar">
          👤
        </div>

        <h2>{titulo}</h2>

        {usuario && (
          <div className="modal-usuario">
            {usuario}
          </div>
        )}

        <p>{mensaje}</p>

        <div className="modal-botones">

          <button
            className="btn-cancelar"
            onClick={onCancelar}
          >
            Cancelar
          </button>

          <button
            className="btn-confirmar"
            onClick={onConfirmar}
          >
            Cerrar sesión
          </button>

        </div>

      </div>

    </div>

  );
}

export default ConfirmarModal;