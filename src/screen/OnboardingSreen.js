import React from "react";
import {
  View, Text, Image, Button
} from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import { images } from "../constants";


const Skip = ({ ...props }) => {
  return (
    <Button
      title='Skip'
      color='#000000'
    />
  )
}
const Next = ({ ...props }) => {
  return (
    <Button
      title='Next'
      color='#000000'
      {...props}
    />
  )
}
const Done = ({ ...props }) => {
  return (
    <Button
      title='Done'
      color='#000000'
      {...props}
    />
  )
}
const Boarding = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image
            source={images.boarding1}
            resizeMode="contain"
            style={{
              width: '100%',
              height: 400
            }}
          />,
          title: 'Connect to the Word',
          subtitle: 'A new way to connect with the word'
        },
        {
          backgroundColor: '#66CCCC',
          image: <Image source={images.boarding2}
            resizeMode="contain"
            style={{
              width: '100%',
              height: 400
            }} />,
          title: 'Share your Favorites',
          subtitle: 'Share your connect with similar kind of poeple',
        },
        {
          backgroundColor: '#CC6666',
          image: <Image source={images.boarding3}
            rresizeMode="contain"
            style={{
              width: '100%',
              height: 400
            }} />,
          title: 'Become Star',
          subtitle: 'let the spot light capture you',
        },

      ]}
    />
  )
}
export default Boarding;