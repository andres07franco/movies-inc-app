import React from 'react';
import { Container, Detail, Profile, Title } from './casting-list.style';
import { Casting } from '@core/movies/entities/casting.entity';
import { ScrollView, View } from 'react-native';

interface Props {
  casting: Casting[];
}
const CastingList: React.FC<Props> = ({ casting }) => {
  return (
    <Container>
      <Title type="Subtitle" color="neutral100" style={{ paddingBottom: 20 }}>
        Actors
      </Title>
      <ScrollView horizontal={true}>
        {casting.map((cast) => (
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              paddingHorizontal: 10,
              width: 90,
            }}
          >
            <Profile
              source={{
                uri: `https://image.tmdb.org/t/p/original${cast.profilePath}`,
              }}
            />
            <Title
              type="Caption"
              color="neutral100"
              style={{ textAlign: 'center' }}
            >
              {cast.name.split(' ')[0] + ' ' + cast.name.split(' ')[1]}
            </Title>
            <Detail type="Caption" color="neutral90">
              {cast.character.split(' ')[0]}
            </Detail>
          </View>
        ))}
      </ScrollView>
    </Container>
  );
};

export default CastingList;
