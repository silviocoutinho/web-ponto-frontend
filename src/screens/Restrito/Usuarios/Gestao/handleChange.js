import { formatDateToPresentation } from "./dataPresentation";

export  const handleChange = (field, evt, form, setForm, mode)  => {    
    if ((field.substring(0, 4) === 'data')) {
        setForm({
            ...form,
            [field]: formatDateToPresentation(evt)
        });
    } 
    else if (field === 'ativo') {
        evt.target.value = (evt.target.value === 'on') ? 'off' : 'on';
        setForm({
            ...form,
            [field]: (evt.target.value === 'on') ? 1 : 0            
        });  
    }  
    else {
        setForm({
            ...form,
            [field]: evt.target.value
        });  
    }                                   
};
