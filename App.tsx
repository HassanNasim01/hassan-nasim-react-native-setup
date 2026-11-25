import React, { useState } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import SignUpScreen, { UserData } from './src/screens/SignUpScreen';
import LoginScreen from './src/screens/LoginScreen';

export default function App() {
  // Starts on the Sign Up screen first
  const [currentScreen, setCurrentScreen] = useState<'signup' | 'login'>('signup');

  // Stores the list of all registered users
  const [users, setUsers] = useState<UserData[]>([]);

  const handleRegisterUser = (newUser: UserData) => {
    setUsers(prevUsers => [...prevUsers, newUser]);
    // Switches automatically to Login after signup
    setCurrentScreen('login');
  };

  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      {currentScreen === 'signup' ? (
        <SignUpScreen
          onRegisterUser={handleRegisterUser}
          onSwitchToLogin={() => setCurrentScreen('login')}
        />
      ) : (
        <LoginScreen
          users={users}
          onSwitchToSignUp={() => setCurrentScreen('signup')}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});