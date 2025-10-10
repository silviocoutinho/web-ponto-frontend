import { ALERT_WARNING, ALERT_DANGER, ALERT_SUCCESS} from '../../../presentation/errors/alertType';
import { badRequestCode, okCode, createdCode, noContent} from '../../../presentation/helpers/http';

import { Header, Menu } from './../../elements/index'

import Input from '../../../components/Input';
import TagText from '../../../components/TagText';
import InputDate from '../../../components/InputDate';
import Message from '../../../components/Message';
import CheckBox from '../../../components/CheckBox';

import { IndexStyles } from '../../Styles';

import ActionCreator from './../../../../redux/actionCreators'

export {
  ALERT_WARNING,
  ALERT_DANGER,
  ALERT_SUCCESS,
  badRequestCode,
  okCode,
  createdCode,
  noContent,

  Header,
  Menu,

  IndexStyles,
  ActionCreator,
  
  Input, TagText, InputDate, Message, CheckBox
}
