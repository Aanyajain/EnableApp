import Onboarding from 'react-native-onboarding-swiper';
import {Image, StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import React from 'react';

const Skip = ({...props}) => (
  <TouchableOpacity {...props}>
    <Text style={{color: 'black', marginLeft: 20}}>SKIP</Text>
  </TouchableOpacity>
);
const Next = ({...props}) => (
  <TouchableOpacity {...props}>
    <Text style={{color: 'black', marginRight: 20}}>NEXT</Text>
  </TouchableOpacity>
);

const Dots = ({selected}) => {
  let backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';
  return (
    <View
      style={{
        backgroundColor,
        width: 9,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 3,
      }}
    />
  );
};

const SplashScreen = ({navigation}) => (
  <Onboarding
    bottomBarHighlight={false}
    SkipButtonComponent={Skip}
    NextButtonComponent={Next}
    DotComponent={Dots}
    onDone={() => navigation.navigate('Home')}
    onSkip={() => navigation.replace('Home')}
    titleStyles={{fontWeight: 'bold', marginTop: -10}}
    subTitleStyles={{fontSize: 16, flexWrap: 'wrap'}}
    pages={[
      {
        backgroundColor: '#3aa9fd',
        image: (
          <Image source={require('../images/blind2.png')} style={styles.img} />
        ),
        title: 'Helping the ones to see',
        titleStyles: {color: '#053161', fontSize: 28},
        subtitle: 'Be guided by the sound than the text',
        subTitleStyles: {color: '#053161', fontSize: 18},
      },
      {
        backgroundColor: '#f7cc82',
        image: (
          <Image source={require('../images/deaf2.png')} style={styles.img} />
        ),
        title: "Can't hear",
        titleStyles: {color: '#773b03', fontSize: 28},
        subtitle: 'Know what other person is saying by reading ',
        subTitleStyles: {color: '#773b03', fontSize: 18},
      },
      {
        backgroundColor: '#82cec6',
        image: (
          <Image
            source={require('../images/signlang2.png')}
            style={styles.img}
          />
        ),
        title: 'Difficulty in reading',
        titleStyles: {color: '#035359', fontSize: 28},
        subtitle: 'Communicate in your own language via signs!',
        subTitleStyles: {color: '#035359', fontSize: 18},
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
