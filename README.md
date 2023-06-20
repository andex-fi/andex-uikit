# Andex UIkit

[![Version](https://img.shields.io/npm/v/@andex/uikit)](https://www.npmjs.com/package/@andex/uikit) [![Size](https://img.shields.io/bundlephobia/min/@andex/uikit)](https://www.npmjs.com/package/@andex/uikit)

Andex UIkit is a set of React components and hooks used to build pages on Andex's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @andex/uikit`


## Setup

### Providers

Before using Andex UIkit, you need to provide the theme file to UIKit provider.

```
import { UIKitProvider, light, dark } from '@andex/uikit'
...
<UIKitProvider theme={isDark ? dark : light}>...</UIKitProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@andex/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://andex.github.io/andex-uikit/)
