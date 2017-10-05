import { AppRegistry , I18nManager} from 'react-native';
import App from './App';

I18nManager.forceRTL(false);

AppRegistry.registerComponent('RTLdemo', () => App);
