import React from 'react';
import { View, ScrollView } from 'react-native';
import Profile_card from './profileCard';

const profile = {
  name: 'HAFIZ MUHAMMAD DANIAL',
  bio: 'Skilled developer with experience in React Native, Visual Studio.',
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s',
};
const profile1 = {
  name: 'Sermad',
  bio: 'Skilled developer with experience in React Native, Visual Studio.',
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s',
};
const App = () => {
  return (
    <ScrollView>
      <Profile_card profile={profile} />
      <Profile_card profile={profile1} />

    </ScrollView>
  );
};
export default App;
