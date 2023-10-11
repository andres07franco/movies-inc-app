import React, { ReactNode, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Headline } from '../../molecules';
import {
  ButtonContaner,
  Container,
  TabBar,
  TabTitleContainer,
} from './tab-layout.style';

interface Props {
  headerButton?: ReactNode | ReactNode[];
  children: ReactNode[];
}
const TabLayout: React.FC<Props> = ({ headerButton, children }) => {
  const [selectedTabindex, setSelectedTabIndex] = useState(0);
  const selectedTab = children && children[selectedTabindex];
  const childElements = React.Children.toArray(children);

  // getting tabs props
  const tabs = childElements.map((child) => {
    if (React.isValidElement(child)) {
      return {
        title: child.props.title || '',
        onSelected: child.props.onSelected ?? null,
      };
    }
    return {
      title: '',
    };
  });

  const handlePressTab = (index: number) => {
    setSelectedTabIndex(index);
    tabs[index].onSelected && tabs[index].onSelected();
  };

  return (
    <>
      <Container>
        <StatusBar style="light" />
        <TabBar>
          <TabTitleContainer>
            {tabs.map((tab, index) => {
              const colorType =
                selectedTabindex === index ? 'primary' : 'secondary';
              return (
                <TouchableOpacity
                  key={tab.title}
                  onPress={() => handlePressTab(index)}
                >
                  <Headline text={tab.title} colorType={colorType} />
                </TouchableOpacity>
              );
            })}
          </TabTitleContainer>
          <ButtonContaner>{headerButton}</ButtonContaner>
        </TabBar>
        {selectedTab}
      </Container>
    </>
  );
};

export { TabLayout };
