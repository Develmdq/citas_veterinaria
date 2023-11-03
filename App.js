import React, {useState} from 'react';
import {View} from 'react-native';
import globalStyles from './src/GlobalStyles/globalStyles';
import Splash from './src/components/Splash/Splash';
import Body from './src/components/Body/Body';

const App = () => {
  const [animated, setAnimated] = useState(true);

  return (
    <>
      {animated ? (
        <View style={globalStyles.container}>
          <Splash onAnimationEnd={() => setAnimated(false)} />
        </View>
      ) : (
        <View style={globalStyles.container}>
          <Body />
        </View>
      )}
    </>
  );
};

export default App;
