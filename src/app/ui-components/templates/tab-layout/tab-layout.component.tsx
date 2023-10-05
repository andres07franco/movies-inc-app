import React, { ReactNode, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Headline } from '../../molecules';
import { Container, TabBar } from './tab-layout.style';
import { TouchableOpacity } from 'react-native';

interface Props {
  children: ReactNode[];
}
const TabLayout: React.FC<Props> = ({ children }) => {
  const [selectedTabindex, setSelectedTabIndex] = useState(0);
  const childElements = React.Children.toArray(children);

  // getting titles
  const titles = childElements.map((child) => {
    if (React.isValidElement(child)) {
      return child.props.title || '';
    }
    return null;
  });

  const selectedTab = children && children[selectedTabindex];

  const handlePressTab = (index: number) => setSelectedTabIndex(index);

  return (
    <Container>
      <StatusBar style="light" />
      <TabBar>
        {titles.map((title, index) => {
          const colorType =
            selectedTabindex === index ? 'primary' : 'secondary';
          return (
            <TouchableOpacity key={title} onPress={() => handlePressTab(index)}>
              <Headline text={title} colorType={colorType} />
            </TouchableOpacity>
          );
        })}
      </TabBar>
      {selectedTab}
    </Container>
  );
};

export { TabLayout };
