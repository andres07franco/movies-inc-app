import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { useTranslation } from '@translations';
import { Casting } from '@core/core.module';
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
      <FlatList
        horizontal={true}
        initialNumToRender={4}
        renderItem={({ item }) => (
          <Content>
            <ActorImage
              source={{
                uri: item.profilePath ?? '',
              }}
            />
            <Title type="Caption" color="neutral100" textAlign="center">
              {simplifyName(item.name)}
            </Title>
            <Detail type="Caption" color="neutral90">
              {simplifyName(item.character)}
            </Detail>
          </Content>
        )}
        keyExtractor={(item) => `${item.castId}`}
        data={casting}
      />
    </Container>
  );
};

export default CastingList;
