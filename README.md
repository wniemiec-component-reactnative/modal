![](https://github.com/wniemiec-component-reactnative/modal/blob/master/docs/img/logo/logo.jpg)

<h1 align='center'>Modal</h1>
<p align='center'>Message box that is displayed on top of your screen.</p>
<p align="center">
	<a href="https://github.com/wniemiec-component-reactnative/modal/actions/workflows/windows.yml"><img src="https://github.com/wniemiec-component-reactnative/modal/actions/workflows/windows.yml/badge.svg" alt=""></a>
	<a href="https://github.com/wniemiec-component-reactnative/modal/actions/workflows/macos.yml"><img src="https://github.com/wniemiec-component-reactnative/modal/actions/workflows/macos.yml/badge.svg" alt=""></a>
	<a href="https://github.com/wniemiec-component-reactnative/modal/actions/workflows/ubuntu.yml"><img src="https://github.com/wniemiec-component-reactnative/modal/actions/workflows/ubuntu.yml/badge.svg" alt=""></a>
	<a href="https://reactnative.dev/"><img src="https://img.shields.io/badge/React Native-0.60+-D0008F.svg" alt="React Native compatibility"></a>
	<a href="https://github.com/wniemiec-component-reactnative/modal/releases"><img src="https://img.shields.io/github/v/release/wniemiec-component-reactnative/modal" alt="Release"></a>
	<a href="https://github.com/wniemiec-component-reactnative/modal/blob/master/LICENSE"><img src="https://img.shields.io/github/license/wniemiec-component-reactnative/modal" alt="License"></a>
</p>
<hr />

## ❇ Introduction
React Native component that that is displayed on top of the screen. Modals put an overlay on the screen; therefore, they take visual precedence over all the other elements.

## 🖼 Gallery

<div style="display: flex; flex-direction: row; justify-content: center; align-items: center; flex-wrap: wrap"
<img height=400 src="https://raw.githubusercontent.com/wniemiec-component-reactnative/modal/master/docs/img/screens/img1.png" alt="image 1" />

<img height=400 src="https://raw.githubusercontent.com/wniemiec-component-reactnative/modal/master/docs/img/screens/img2.png" alt="image 2" />

<img height=400 src="https://raw.githubusercontent.com/wniemiec-component-reactnative/modal/master/docs/img/screens/img3.png" alt="image 3" />

<img height=400 src="https://raw.githubusercontent.com/wniemiec-component-reactnative/modal/master/docs/img/screens/img4.png" alt="image 4" />
</div>

## ❓ How to use
1. Install the component
```
$ npm install --save @wniemiec-component-reactnative/modal
```

2. Import the component
```
import Modal from '@wniemiec-component-reactnative/modal';
```

3. Use it
```
[...]

import React, { useState } from 'react';
import { View } from 'react-native';

[...]

const [visible, setVisible] = useState(true);

[...]

<View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Modal visible={visible} setVisible={setVisible} title='Some title...'>
	<Text>Some text...</Text>
  </Modal>
</View>

[...]
```

## 📖 Documentation
|        Property        |Type|Description|Default|
|----------------|-------------------------------|-----------------------------|--------|
|visible |`object`|Indicates whether the modal should be displayed | - |
|setVisible |`function(void): void`|Function that is called when the close button is pressed indicating that the modal should no longer be visible | - |
|style |`string`|Custom style  |`null`|
|title |`string`|Modal title  |`""`|

## 🚩 Changelog
Details about each version are documented in the [releases section](https://github.com/wniemiec-component-reactnative/modal/releases).

## 🤝 Contribute!
See the documentation on how you can contribute to the project [here](https://github.com/wniemiec-component-reactnative/modal/blob/master/CONTRIBUTING.md).

## 📁 Files

### /
|        Name        |Type|Description|
|----------------|-------------------------------|-----------------------------|
|docs |`Directory`|Documentation files|
|src     |`Directory`| Source files|
