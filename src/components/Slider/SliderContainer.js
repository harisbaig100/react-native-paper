/* @flow */

import * as React from 'react';
import Slider from './Slider';
import { StyleSheet, Text, View } from 'react-native';

const DEFAULT_VALUE = 2;

type Props = {
  /**
   * children should be the component Slider.
   */
  children: React.Node,
  /**
   * The titile for the Slider.
   */
  caption: String,
};

export default class SliderContainer extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      value: DEFAULT_VALUE,
    };
  }

  render() {
    return (
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.caption} numberOfLines={1}>
            {this.props.caption}
          </Text>
        </View>
        {this._renderChildren()}
      </View>
    );
  }

  _renderChildren = () =>
    React.Children.map(this.props.children, child => {
      if (child.type === Slider || child.type === Slider) {
        const value = this.state.value;
        return React.cloneElement(child, {
          value,
          onValueChange: val => this.setState({ value: val }),
        });
      }
      return child;
    });
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  caption: {
    //   flex: 1,
    fontSize: 15,
  },
});
