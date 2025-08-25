const fields = [
    {  
    name: 'Cod.',
    selector: row => row.id,
    sortable: true,
    width: "95px", // largura fixa menor
  },
  {
    name: 'Nome',
    selector: row => row.nome,
    sortable: true,
  },
  {
    name: 'Matr.',
    selector: row => row.matricula,
    sortable: true,
    width: "120px", // largura fixa menor
  },
  {
    name: 'PIS',
    selector: row => row.pis,
  },
  {
    name: 'Ativo',
    selector: row => row.ativo,
    width: "120px", // largura fixa menor
  },
]

export { fields }
