import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./Login.css";

function Login() {

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [cargando, setCargando] = useState(false);

    const iniciarSesion = async (e) => {

        e.preventDefault();

        setError("");
        setCargando(true);

        try {

            await signInWithEmailAndPassword(
                auth,
                correo,
                password
            );

        // eslint-disable-next-line no-unused-vars
        } catch (err) {

            setError("Correo o contraseña incorrectos.");

        }

        setCargando(false);

    };

    return (

        <div className="login">

            <form
                className="login-card"
                onSubmit={iniciarSesion}
            >

                <h2>Atlas</h2>

                <input
                    type="email"
                    placeholder="Correo"
                    value={correo}
                    onChange={(e)=>setCorreo(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                />

                {error && <p className="error">{error}</p>}

                <button>

                    {cargando ? "Entrando..." : "Iniciar sesión"}

                </button>

            </form>

        </div>

    );

}

export default Login;
