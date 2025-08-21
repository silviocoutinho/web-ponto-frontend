const BotaoTabela = ({ label, color, handle, handlers,row}) => {
  return (
    <div>
      <button
        onClick={() => handle(row, handlers)}
        style={{
          backgroundColor: color,    
          color: "white",
          border: "none",
          padding: "0.5em 1em",   // flexível
          borderRadius: "0.5em",
          cursor: "pointer",
          fontSize: "0.9rem",      // relativo
          flexShrink: 0,
        }}
        >
          {label}
      </button>
    </div>
  )
};

export default BotaoTabela;
