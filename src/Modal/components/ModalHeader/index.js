/**
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default function ModalHeader({ title, setVisible }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        {title}
      </Text>
      <ModalClose setVisible={setVisible} />
    </View>
  );
}

function ModalClose({ setVisible }) {
  return (
    <TouchableHighlight
      style={styles.modalClose}
      onPress={() => setVisible(false)}
      underlayColor='transparent'
    >
      <CloseButton />
    </TouchableHighlight>
  );
}

function CloseButton() {
  return (
    <Text style={styles.closeText}>
      X
    </Text>
  );
}
