import { Text, TouchableOpacity, View } from 'react-native';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';
import { THEME } from '../../theme';
import { GameController } from 'phosphor-react-native';

export interface DuoCardData {
  id: string
  hourEnd: string
  hourStart: string
  name: string
  useVoiceChannel: boolean
  weekDays: string[]
  yearsPlaying: number
}

interface DuoCardProps {
  duoCard: DuoCardData
  onConnect: () => void;
}

export function DuoCard({ duoCard, onConnect}: DuoCardProps) {
  return (
    <View style={styles.container}>
      <DuoInfo
        label="Nome"
        value={duoCard.name}
      />
      <DuoInfo
        label="Tempo de jogo"
        value={`${duoCard.yearsPlaying} anos \u2022 ${duoCard.hourStart} - ${duoCard.hourEnd}`}
      />

      <DuoInfo
        label="Disponibilidade"
        value={`${duoCard.weekDays.length} dias`}
      />

      <DuoInfo
        label="Chamada de áudio?"
        value={duoCard.useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={duoCard.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT }
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onConnect}
      >
        <GameController
          color={THEME.COLORS.TEXT}
          size={20}
        />

        <Text style={styles.buttonTitle} >
          Conectar
        </Text>
      </TouchableOpacity>
    </View>
  );
}