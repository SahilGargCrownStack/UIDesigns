import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import R from 'res/R';
import WelcomeScreen from './src/screens/horizontal-screens/WelcomeScreen';
import SampleListScreen from './src/screens/SamplesListScreen';
import LoginScreen from './src/screens/login-screens/LoginScreen';
import ShoppingCartScreen from './src/screens/shopping-cart-screens/ShoppingCartScreen';
import GalleryScreen from './src/screens/gallery-screens/GalleryScreen';
import YoutubeScreen from './src/screens/youtube-screens/YoutubeScreen';

const ListStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ListStack.Navigator>
        <ListStack.Screen name={R.routes.samplelist} component={SampleListScreen} options={{ headerShown: false }} />
        <ListStack.Screen name={R.routes.welcome} component={WelcomeScreen} options={{ headerShown: false }} />
        <ListStack.Screen name={R.routes.login} component={LoginScreen} options={{ headerShown: false }} />
        <ListStack.Screen name={R.routes.shoppingcart} component={ShoppingCartScreen} options={{ headerShown: false }} />
        <ListStack.Screen name={R.routes.gallery} component={GalleryScreen} options={{ headerShown: false }} />
        <ListStack.Screen name={R.routes.youtube} component={YoutubeScreen} options={{ headerShown: false }} />
      </ListStack.Navigator>
    </NavigationContainer>
  );
};

export default App;