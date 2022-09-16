import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground , ImageSourcePropType, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

export interface Card {
  id: string
  name: string
  ads: string
  cover: ImageSourcePropType
}

interface GameCardProps extends TouchableOpacityProps {
  card: Card
}

export function GameCard({ card, ...rest }: GameCardProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest} >
      <ImageBackground 
        style={styles.cover}
        source={card.cover}
      >

        <LinearGradient 
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.name} >
            {card.name}
          </Text>
          <Text style={styles.ads} >
            {card.ads} anúncios
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}