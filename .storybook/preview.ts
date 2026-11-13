import type { Preview } from '@storybook/nextjs';
import 'the-new-css-reset/css/reset.css';
import '../src/styles/globals.scss';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
