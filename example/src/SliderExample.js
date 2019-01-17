/* @flow */

import * as React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Slider, SliderContainer, withTheme } from 'react-native-paper';

const DEFAULT_VALUE = 2;

class SliderExample extends React.Component {
  static title = 'Sliders';

  constructor(props) {
    super(props);
    this.state = {
      value: DEFAULT_VALUE,
    };
  }

  render() {
    return (
      <View style={{ marginTop: 80 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <SliderContainer caption="Default Slider">
            <Slider />
          </SliderContainer>

          <View style={{ marginTop: 50 }} />
          <SliderContainer caption="Slider with color">
            <Slider
              minimumValue={-10}
              maximumValue={42}
              minimumTrackTintColor="#1fb28a"
              maximumTrackTintColor="#d3d3d3"
              thumbTintColor="#1a9274"
            />
          </SliderContainer>
          <View style={{ marginTop: 50 }} />
          <SliderContainer caption="Slider with custom style">
            <Slider
              trackStyle={iosStyles.track}
              thumbStyle={iosStyles.thumb}
              minimumTrackTintColor="#1073ff"
              maximumTrackTintColor="#b7b7b7"
            />
          </SliderContainer>
          <View style={{ marginTop: 50 }} />
          <SliderContainer caption="Slider with thumbImage">
            <Slider
              minimumTrackTintColor="#13a9d6"
              thumbImage={require('../assets/thumb.png')}
              thumbStyle={customStyles9.thumb}
              thumbTintColor="#0c6692"
            />
          </SliderContainer>
          <View style={{ marginTop: 50 }} />
          <SliderContainer caption="Disabled Slider">
            <Slider disabled />
          </SliderContainer>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    paddingBottom: 20,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});

const iosStyles = StyleSheet.create({
  track: {
    height: 2,
    borderRadius: 1,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.35,
  },
});

const customStyles9 = StyleSheet.create({
  thumb: {
    width: 30,
    height: 30,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
});

export default withTheme(SliderExample);
