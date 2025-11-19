"use client";

import { useState } from "react";
import Header from "../components/Header";

export default function Home() {
  const [nome, setNome] = useState("");
  const [pessoas, setPessoas] = useState(1);
  const [horario, setHorario] = useState("");

  const criarReserva = async () => {
    const res = await fetch("https://SEU-BACKEND.onrender.com/reservas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, pessoas, horario })
    });

    if (res.ok) {
      alert("Reserva criada com sucesso!");
      setNome("");
      setPessoas(1);
      setHorario("");
    } else {
      alert("Erro ao criar reserva.");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="card">
          <h2>Criar Reserva</h2>

          <input
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <input
            type="number"
            min="1"
            placeholder="Número de pessoas"
            value={pessoas}
            onChange={(e) => setPessoas(e.target.value)}
          />

          <input
            type="datetime-local"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
          />

          <button onClick={criarReserva}>Salvar Reserva</button>
        </div>
      </div>
    </>
  );
}
