import { ComponentStyles } from './Styles';

const Message = ({ active, message, type, ...rest }) => { 
  return (
    <ComponentStyles>
    <div className='formulario-group-button'>                    
    {
        active &&
        <div className={type + ' formulario-aviso-erro'}  role="alert">
            { message }
        </div>
    }    
    </div>
    </ComponentStyles>
  );
};

export default Message;
