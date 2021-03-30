import Onboarding from 'react-native-onboarding-swiper';
import {Image, StyleSheet} from 'react-native';
import React from 'react';

const SplashScreen = () => (
  <Onboarding
    pages={[
      {
        backgroundColor: '#fff',
        image: (
          <Image source={require('../images/blind.jpg')} style={styles.img} />
        ),
        title: 'Helping the ones to see',
        subtitle: 'Be guided by the sound than the text',
      },
      {
        backgroundColor: 'white',
        image: (
          <Image source={require('../images/deaf.jpg')} style={styles.img} />
        ),
        title: "Can't hear",
        subtitle: 'Know what other person is saying by reading ',
      },
      {
        backgroundColor: 'white',
        image: (
          <Image
            source={require('../images/signlang.jpg')}
            style={styles.img}
          />
        ),
        title: 'Difficulty in reading',
        subtitle: 'Communicate in your own language via signs!',
      },
    ]}
  />
);

const styles = StyleSheet.create({
  img: {
    width: 400,
    height: 400,
  },
});

export default SplashScreen;
