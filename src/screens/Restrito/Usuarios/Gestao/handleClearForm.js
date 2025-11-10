import { ALERT_DANGER } from './imports'; 

export const handleClearForm = (form, setForm, setGenericMethod, setGenericMessage) => {
    setForm({
        ...form,
        nome: '',
        data_cadastro:0,
        matricula: 0,   
        pis: '', 
        email : '',
        ativo: 0
    });
    setGenericMethod(false);
    setGenericMessage({active: false, message: '', type: ALERT_DANGER});
};
