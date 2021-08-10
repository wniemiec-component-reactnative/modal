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
import { Modal as RnModel } from 'react-native';
import styles from './styles';
import ModalContainer from './components/ModalContainer';
import ModalArea from './components/ModalArea';
import ModalHeader from './components/ModalHeader';
import ModalBody from './components/ModalBody';

/**
 * Message box that is displayed on top of your screen. Modals put an overlay 
 * on the screen; therefore, they take visual precedence over all the other 
 * elements.
 * 
 * @param    {object} children Modal content
 * @param    {boolean} visible Indicates whether the modal should be displayed
 * @param    {function(void): void} setVisible Function that is called when the 
 * close button is pressed indicating that the modal should no longer be visible
 * @param    {object} [style=null] Custom style
 * @param    {string} [title=''] Modal title
 */
export default ({ children, visible, setVisible, style=null, title='' }) => {
  
  return (
    <RnModel
      style={styles.body}
      visible={visible}
      transparent={true}
      animationType='fade'
    >
      <ModalContainer>
        <ModalArea style={style}>
          <ModalHeader title={title} setVisible={setVisible} />
          <ModalBody>
            {children}
          </ModalBody>
        </ModalArea>
      </ModalContainer>
    </RnModel>
  );
}
