import { validateBr } from 'js-brasil';

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
  
  const PISInvalido = (value) => {
    return !validateBr.pispasep(value);
    
  }
   
  const EmailInvalido = (value) =>{
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return !regex.test(value) 
  }
   
   export { naoExisteValor, valoresNaoIguais, PISInvalido, EmailInvalido  };
   