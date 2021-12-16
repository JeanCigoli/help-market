import { devices } from './device';

export const props = {
  styles: {
    colors: {
      gray: {
        light: '#cccccc',
        medium: '#adadad',
        bold: '#808080',
      },
      red: {
        medium: '#f14e32',
      },
      green: {
        medium: '#68D99A',
      },
      white: {
        normal: '#FFFFFF',
        opacity: '#FFFFFFAA',
      },
      black: {
        normal: '#060608',
        opacity: '#06060899',
      },
    },
    font: {
      tiny: '0.7rem',
      small: '0.9rem',
      default: '1.1rem',
      medium: '1.25rem',
      large: '2.0rem',
      xLarge: '2.5rem',
      xxLarge: '3.5rem',
    },
    spacing: {
      shorter: '4px',
      short: '8px',
      base: '16px',
      smaller: '32px',
      tall: '64px',
    },
  },
  devices,
};

export type Theme = typeof props;
