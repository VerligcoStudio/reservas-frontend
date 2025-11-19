"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";

export default function Reservas() {
  const [reservas, setReservas] = useState([]);

  const carregar = async () => {
    const res = await fetch("https://reservas-backend-gq28.onrender.com");
    const data = await res.json();
    setReservas(data);
  };

  const remover = async (id) => {
    await fetch(`await fetch(`https://reservas-backend-gq28.onrender.com${id}`, {
      method: "DELETE"
    });
    carregar();
  };

  useEffect(() => {
    carregar();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <h2>Reservas feitas</h2>

        {reservas.map((r) => (
          <div className="card" key={r.id}>
            <strong>{r.nome}</strong>
            <p>Pessoas: {r.pessoas}</p>
            <p>Horário: {r.horario}</p>
            <button onClick={() => remover(r.id)}>Excluir</button>
          </div>
        ))}
      </div>
    </>
  );
}
