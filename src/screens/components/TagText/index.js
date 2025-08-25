import { Badge } from 'react-bootstrap';
import { ComponentStyles } from './Styles';

const TagText = ({ label, variant='success', classBadge, width='7rem'}) => { 
  return (
    <ComponentStyles >     
      <p className='formulario-info'>
      <span>                       
          <Badge variant={variant} className={classBadge}>{label}</Badge>
      </span>       
      </p>
    </ComponentStyles>
  );
};

export default TagText;
