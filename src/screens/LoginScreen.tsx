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
import { UserData } from './SignUpScreen';

interface LoginScreenProps {
  users: UserData[];
  onSwitchToSignUp: () => void;
}

export default function LoginScreen({
  users,
  onSwitchToSignUp,
}: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const matchedUser = users.find(
      u => u.email === email.trim().toLowerCase() && u.password === password,
    );

    if (matchedUser) {
      Alert.alert('Success', 'User login successfully');
    } else {
      Alert.alert('Error', 'User not found');
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <View style={styles.logoRow}>
        <View style={styles.logoBadge}>
          <Text style={styles.logoIcon}>🛡️</Text>
        </View>
        <Text style={styles.logoText}>Logoipsum</Text>
      </View>

      <Text style={styles.heading}>Sign in to your{'\n'}Account</Text>
      <Text style={styles.subheading}>
        Enter your email and password to log in
      </Text>

      <View style={styles.form}>
        <CustomInput
          label="Email"
          placeholder="Loisbecket@gmail.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <CustomInput
          label="Password"
          placeholder="*******"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.forgotBtn}
          onPress={() => Alert.alert('Info', 'Password reset pressed')}>
          <Text style={styles.forgotText}>Forgot Password ?</Text>
        </TouchableOpacity>

        <CustomButton title="Log In" onPress={handleLogin} />

        <View style={styles.dividerRow}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.line} />
        </View>

        <CustomButton
          title="Continue with Google"
          variant="social"
          iconText="G"
          onPress={() => Alert.alert('Google', 'Continue with Google pressed')}
        />

        <CustomButton
          title="Continue with Facebook"
          variant="social"
          iconText="f"
          onPress={() =>
            Alert.alert('Facebook', 'Continue with Facebook pressed')
          }
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don’t have an account? </Text>
        <TouchableOpacity onPress={onSwitchToSignUp}>
          <Text style={styles.linkText}>Sign Up</Text>
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
    paddingTop: 28,
    paddingBottom: 30,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },
  logoBadge: {
    backgroundColor: '#1D61E7',
    borderRadius: 6,
    padding: 4,
    marginRight: 8,
  },
  logoIcon: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  logoText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    lineHeight: 36,
    marginBottom: 8,
  },
  subheading: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 24,
  },
  form: {
    width: '100%',
  },
  forgotBtn: {
    alignSelf: 'flex-end',
    marginBottom: 18,
  },
  forgotText: {
    fontSize: 12,
    color: '#1D61E7',
    fontWeight: '600',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  orText: {
    marginHorizontal: 12,
    fontSize: 12,
    color: '#6B7280',
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