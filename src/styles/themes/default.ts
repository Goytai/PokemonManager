import { DefaultTheme } from 'styled-components';

const light: DefaultTheme = {
  title: 'light',

  font: {
    family: "'Roboto', sans-serif",
    colors: {
      1: ['#333333', '#939393'], // Primary's
      2: ['#00A7FD', '#FFFFFF'] // Secondary's
    }
  },

  colors: {
    1: ['#939393', '#FFFFFF', '#F4F4F4', '#DBDBDB'], // Primary's
    2: ['#00A7FD', '#00C1FD80', '#00C1FDCC'] // Secondary's
  }
};

export default light;
