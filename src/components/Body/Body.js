import React, { useState} from 'react';
import { View, Text } from 'react-native';
import Form from '../Form/Form';
import Appointment from '../Appointment/Appointment'
import Buttons from '../Buttons/Buttons';

const Body = () => {
  const [viewForm, setViewForm] = useState(false)

  return (
    <View>
      <Appointment />
      <Form />
      <Buttons />
    </View>
  );
};

export default Body;
