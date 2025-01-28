import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Email de recuperação enviado!");
    } catch (err) {
      setMessage("Erro ao enviar o email.");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Esqueci a Senha</h2>
        <form onSubmit={handlePasswordReset}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            required
          />
          <button type="submit">Recuperar Senha</button>
        </form>
        {message && <p className="error">{message}</p>}
      </div>
    </div>
  );
}

export default ForgotPassword;
