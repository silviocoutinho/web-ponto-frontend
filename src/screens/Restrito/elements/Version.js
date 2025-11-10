import { IndexStyles } from '../Styles'
import { version } from '../../../../package.json';

const {    
    REACT_APP_ENV
} = process.env;
    
    
const envAPP = REACT_APP_ENV === 'test' ? 'Amb. Teste' : 'Amb. Produção';

const VersaoSoftware = props => {      
    return(
        <IndexStyles>                      
           <div className='version-software'>Versao: {version} - {envAPP}</div>
        </IndexStyles> 
    );
};




export default VersaoSoftware;
