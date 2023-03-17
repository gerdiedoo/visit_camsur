import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './Components/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}