import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { CheckCircle } from 'phosphor-react-native';
import { MaterialIcons } from '@expo/vector-icons'
import * as Clipboard from 'expo-clipboard';

import { Heading } from '../Heading';

import { THEME } from '../../theme';
import { styles } from './styles';
import { useState } from 'react';

interface DuoModalProps extends ModalProps {
  discord: string;
  onCloseModal: () => void;
 }

export function DuoModal({ discord, onCloseModal ,...props } : DuoModalProps) {
  const [ isCopying, setIsCopying ] = useState(false)

  async function handleCopyDiscordUserToClipboard() {
    setIsCopying(true)
    await Clipboard.setStringAsync(discord)

    Alert.alert('Discord copiado!', 'Agora só basta adicionar essa pessoa.')
    setIsCopying(false)
  }

  return (
    <Modal 
      transparent
      statusBarTranslucent
      animationType="fade"
      {...props} 
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity 
            style={styles.closeIcon} 
            onPress={onCloseModal}
          >
            <MaterialIcons 
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight="bold"
          />

          <Heading
            title="Let's play!"
            subtitle="Agora é só começar a jogar"
            style={{ alignItems: 'center', marginTop: 24}}
          />  

          <Text style={styles.label} >
            Adicione no Discord
          </Text>

          <TouchableOpacity  
            style={styles.discordButton}
            onPress={handleCopyDiscordUserToClipboard}
            disabled={isCopying}
          >
            <Text style={styles.discord} >
              {isCopying ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord }
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
 
  );
}