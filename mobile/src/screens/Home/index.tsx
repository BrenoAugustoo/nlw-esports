import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { Image, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import logoImg from '../../assets/logo-nlw-esports.png'
import { Background } from '../../components/Background';
import { Card, GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<Card[]>([])
  const navigation = useNavigation()

  useEffect(() => {
    fetch('http://192.168.0.34:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

  function handleOpenGame({ id, title, bannerUrl }: Card) {
    navigation.navigate('game', {id, title, bannerUrl})
  }
 
  return (
    <Background>
       <SafeAreaView style={styles.container}>
        <Image 
          source={logoImg}
          style={styles.logo}
        />

        <Heading 
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList 
          data={games}
          keyExtractor={item => item.id}
          renderItem={ ({ item }) => (
            <GameCard
              card={item}
              onPress={() => handleOpenGame(item)}
            />
          )} 
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        /> 
      </SafeAreaView>
    </Background>
  );
}