import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground , ImageSourcePropType, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

export interface Card {
  id: string
  title: string
  _count: {
    ads: number
  }
  bannerUrl: string
}

interface GameCardProps extends TouchableOpacityProps {
  card: Card
}

export function GameCard({ card, ...rest }: GameCardProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest} >
      <ImageBackground 
        style={styles.cover}
        source={{uri: card.bannerUrl}}
      >

        <LinearGradient 
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.name} >
            {card.title}
          </Text>
          <Text style={styles.ads} >
            {card._count.ads} anúncios
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}