// https://storybook.js.org/docs/react/configure/theming
import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'My Design System',
  brandUrl: 'https://rbluena.vercel.app',
  //   brandImage: '',
  brandTarget: '_self',
  colorPrimary: 'white',

  // UI
  // appBg: '#63C7FF',
  // appBorderRadius: 4,

  // Toolbar
  barBg: '#2643b9',
  barTextColor: '#DDDDDD',
  barSelectedColor: '#FFFFFF',
});
