const naoExisteValor = (value) => {
    if (!value) return true;
    if (Array.isArray(value) && value.length === 0) return true;
    if (typeof value === "string" && !value.trim()) return true;
    return false;
  }
  
  const valoresNaoIguais = (valueA, valueB) => {
    if (valueA !== valueB) return true;
    return false;
  }   
   
   
   export { naoExisteValor, valoresNaoIguais  };
   