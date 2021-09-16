import { Sellers } from "../salarySellers";
import { formatPrice } from "../util/format"

import { Container } from "./styles";

interface DashboardProps {
  onOpenNewTransctionsModal: () => void;
}

export function Dashboard({ onOpenNewTransctionsModal }: DashboardProps) {
  return (
    <Container>
      <div>
        <button type="button" onClick={onOpenNewTransctionsModal}>
          Novo vendedor
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Salário</th>
            <th>Vendas</th>
            <th>Salário Final</th>
          </tr>
        </thead>
        <tbody>
          {Sellers.map((saller) => (
            <tr key={saller.id}>
              <td>{saller.name}</td>
              <td>
                {formatPrice(saller.salary)}
              </td>
              <td>
                {formatPrice(saller.totalSales)}
              </td>
              <td>
                {formatPrice(saller.commissionSalary)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
