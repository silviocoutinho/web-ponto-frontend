
// Estilos customizados
const customStyles = {
  headRow: {
    style: {
      backgroundColor: "#000",
      color: "#fff",
      fontSize: "18px",
      fontWeight: "bold",
      minHeight: "60px",
      textAlign: "center",
      justifyContent: "center",

    },
  },
  rows: {
    style: {
      fontSize: "1rem",
      fontFamily: "Arial, sans-serif",
      color: "#000",
      padding: "0.75rem 1rem",
      border: "1px solid #b3b3b3",
      "&:nth-of-type(odd)": {
        backgroundColor: "white", // Ímpar
      },
      "&:nth-of-type(even)": {
        backgroundColor: "#e7f3fd", // Par
      },
       "&:hover": {
        backgroundColor: "#fbe9eb",
        color: "#000",
        cursor: "pointer",
      },
    },
  },
};

const paginationOptions = {
  rowsPerPageText: "Linhas por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

export {paginationOptions, customStyles};
