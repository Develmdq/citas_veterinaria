import React from 'react'
import {View} from 'react-native';
import LottieView from 'lottie-react-native'
import * as Animatable from 'react-native-animatable';
import dog_steps from '../../../assets/dog_steps.json'
import logo from '../../../assets/logo.png'
import styles from './style'

const Splash = ({onAnimationEnd}) => {
  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView source={dog_steps} autoPlay loop />
      </View>
      <View style={styles.logoContainer}>
        <Animatable.Image
          source={logo}
          animation={'bounceIn'}
          duration={4000}
          onAnimationEnd={onAnimationEnd}
          style={styles.logo}
        />
      </View>
    </View>
  );
};

export default Splash
