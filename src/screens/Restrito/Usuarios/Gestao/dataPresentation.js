import { Badge } from 'react-bootstrap';
import { orderBy } from 'lodash';

export const formatDataBySpecificOrder = (data, field, orderData) => { 
    return orderBy(data, field, orderData);  
};


const formatAtivoToPresentation = (ativo) => {    
    return (ativo ? 
            <><Badge variant='success' className='tabela-badge'>Sim</Badge></>
            :
            <><Badge variant='danger' className='tabela-badge'>Não</Badge></>
    );
};


export const formatDateToPresentation = (dateToFormat) => {   
    const date = new Date(dateToFormat);
    return ('0' + date.getDate()).slice(-2) + '/' +
         ('0' + (date.getMonth() + 1)).slice(-2) + '/' +
         ('000' + date.getFullYear()).slice(-4);
};

export const formatToShortDate = (dateToFormat) => {
    return ('0' + dateToFormat.slice(3,5)).slice(-2) + '/' +
           ('0' + dateToFormat.slice(0,2)).slice(-2) + '/' +
                  dateToFormat.slice(6);
};

export const formatDateISO = (value) => {
    return value.slice(6)+ '-' +
            ('0' + value.slice(3,5)).slice(-2) + '-' +
            ('0' + value.slice(0,2)).slice(-2); 
                  
};

export const formatNumberToPresentation = (number) => {
    return String(number).padStart(2,0);
}
  
export const dataPresentation =(arrayDB, orderData='desc')=>{  
    const sortedData = formatDataBySpecificOrder(arrayDB, 'nome', orderData);   
    return sortedData.map(record => {
       return ({               
         
            id: record.fun_id,
            nome: record.fun_nome,
            matricula: record.fun_matricula,
            pis: record.fun_pis,
            ativo: formatAtivoToPresentation(record.fun_ativo)
       });
     })     
};



