import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';
import { useTranslation } from '@translations';
import { Casting } from '@core/movies/entities/casting.entity';
import { ActorImage } from '../../atoms';
import { Container, Content, Detail, Title } from './casting-list.style';
interface Props {
  casting: Casting[];
}
export const CastingList: React.FC<Props> = ({ casting }) => {
  const { t } = useTranslation();
  const simplifyName = useCallback((name: string) => {
    const arrayName = name.split(' ');
    if (arrayName.length === 1) {
      return name;
    }
    arrayName.pop();
    return arrayName.join(' ');
  }, []);
  return (
    <Container>
      <Title type="Subtitle" color="neutral100">
        {t('ActorText')}
      </Title>
      <ScrollView horizontal={true}>
        {casting.map((cast) => (
          <Content key={cast.castId}>
            <ActorImage
              source={{
                uri: cast.profilePath ?? '',
              }}
            />
            <Title type="Caption" color="neutral100" textAlign="center">
              {simplifyName(cast.name)}
            </Title>
            <Detail type="Caption" color="neutral90">
              {simplifyName(cast.character)}
            </Detail>
          </Content>
        ))}
      </ScrollView>
    </Container>
  );
};

export default CastingList;
