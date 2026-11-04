"use client";

import { useState, type FormEvent } from "react";

export function ContactForm({ assuntos }: { assuntos: string[] }) {
  const [aviso, setAviso] = useState("");

  // Sem backend: o formulário é demonstrativo e nada é enviado.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAviso("Formulário de demonstração: nenhuma mensagem foi enviada.");
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="campo">
        <label htmlFor="nome">Nome</label>
        <input id="nome" name="nome" type="text" autoComplete="name" required />
      </div>
      <div className="campo">
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="campo inteiro">
        <label htmlFor="assunto">Assunto</label>
        <select id="assunto" name="assunto">
          {assuntos.map((assunto) => (
            <option key={assunto}>{assunto}</option>
          ))}
        </select>
      </div>
      <div className="campo inteiro">
        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" required />
      </div>
      <label className="consentimento inteiro">
        <input type="checkbox" name="consentimento" required />
        <span>Autorizo o uso dos meus dados apenas para o retorno deste contato, conforme a LGPD.</span>
      </label>
      <button type="submit">Enviar mensagem</button>
      <p className="aviso-envio inteiro" role="status">
        {aviso}
      </p>
    </form>
  );
}
