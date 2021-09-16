import Modal from "react-modal";
import { FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Sellers } from "../salarySellers";
import closeImg from "../assets/Fechar.svg";

import { Container } from "./styles";

Modal.setAppElement("#root");

interface NewTransctionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewSallerModal({ isOpen, onRequestClose }: NewTransctionModalProps) {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [commissionSalary, setCommissionSalary] = useState(0);

  useEffect(() => {
    setCommissionSalary(0.15 * totalSales + salary);
  }, [salary, totalSales]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    Sellers.push({
      id: uuidv4(),
      name,
      salary,
      totalSales,
      commissionSalary,
    });

    setName("");
    setSalary(0);
    setTotalSales(0);

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleSubmit}>
        <h2>Cadastrar Vendedor</h2>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="number"
          placeholder="Salário"
          value={salary}
          onChange={(event) => setSalary(Number(event.target.value))}
        />
        <input
          type="number"
          placeholder="Total de Vendas"
          value={totalSales}
          onChange={(event) => setTotalSales(Number(event.target.value))}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
