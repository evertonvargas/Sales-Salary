interface Seller{
  id: string;
  name: string;
  salary: number;
  totalSales: number;
  commissionSalary: number;
}

export const Sellers: Seller[] = [
  {
    id: "1x152se",
    name: "Everton",
    salary: 3500,
    totalSales: 8000,
    commissionSalary: 4700,
  }
]