import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export interface UserData {
  fullName: string;
  email: string;
  dob: string;
  phone: string;
  password: string;
}

interface SignUpScreenProps {
  onRegisterUser: (newUser: UserData) => void;
  onSwitchToLogin: () => void;
}

export default function SignUpScreen({
  onRegisterUser,
  onSwitchToLogin,
}: SignUpScreenProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!fullName.trim() || !email.trim() || !password.trim()) {
      Alert.alert('Missing Fields', 'Please enter Full Name, Email, and Password.');
      return;
    }

    const newUser: UserData = {
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      dob: dob.trim(),
      phone: phone.trim(),
      password: password,
    };

    onRegisterUser(newUser);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <TouchableOpacity onPress={onSwitchToLogin} style={styles.backBtn}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Sign up</Text>
      <Text style={styles.subheading}>Create an account to continue!</Text>

      <View style={styles.form}>
        <CustomInput
          label="Full Name"
          placeholder="Lois Becket"
          value={fullName}
          onChangeText={setFullName}
        />

        <CustomInput
          label="Email"
          placeholder="Loisbecket@gmail.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <CustomInput
          label="Birth of date"
          placeholder="18/03/2024"
          value={dob}
          onChangeText={setDob}
          rightIconText="📅"
        />

        <CustomInput
          label="Phone Number"
          placeholder="(454) 726-0592"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          leftPrefixText="🇬🇧 ⌄"
        />

        <CustomInput
          label="Set Password"
          placeholder="*******"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <View style={styles.buttonSpacing}>
          <CustomButton title="Register" onPress={handleRegister} />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <TouchableOpacity onPress={onSwitchToLogin}>
          <Text style={styles.linkText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 30,
  },
  backBtn: {
    marginBottom: 16,
    alignSelf: 'flex-start',
  },
  backArrow: {
    fontSize: 22,
    color: '#111827',
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },
  subheading: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 24,
  },
  form: {
    width: '100%',
  },
  buttonSpacing: {
    marginTop: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  footerText: {
    fontSize: 13,
    color: '#6B7280',
  },
  linkText: {
    fontSize: 13,
    color: '#1D61E7',
    fontWeight: '600',
  },
});