import { formatDateToPresentation } from "./dataPresentation";

export  const handleChange = (field, evt, form, setForm, mode)  => {    
    if ((field.substring(0, 4) === 'data')) {
        setForm({
            ...form,
            [field]: formatDateToPresentation(evt)
        });
    } 
    else if (field === 'destino') {
        setForm({
            ...form,
            [field]: evt.target.value
            
        }); 
    }  
    else {
        setForm({
            ...form,
            [field]: evt.target.value
        });  
    }                                   
};
