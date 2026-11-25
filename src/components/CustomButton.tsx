import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'social';
  iconText?: string;
}

export default function CustomButton({
  title,
  onPress,
  variant = 'primary',
  iconText,
}: CustomButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isPrimary ? styles.primaryButton : styles.socialButton,
      ]}
      onPress={onPress}
      activeOpacity={0.8}>
      <View style={styles.content}>
        {iconText ? <Text style={styles.icon}>{iconText}</Text> : null}
        <Text
          style={[
            styles.text,
            isPrimary ? styles.primaryText : styles.socialText,
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 6,
  },
  primaryButton: {
    backgroundColor: '#1D61E7',
  },
  socialButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  socialText: {
    color: '#111827',
  },
});