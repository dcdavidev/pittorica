import type { Meta, StoryObj } from '@storybook/react';

import { Blockquote } from './Blockquote.js';

const meta: Meta<typeof Blockquote> = {
  title: 'Components/Blockquote',
  component: Blockquote,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      'This is a simple and elegant quote that demonstrates the Blockquote component.',
  },
};

export const WithAuthor: Story = {
  args: {
    author: 'Albert Einstein',
    children:
      'Life is like riding a bicycle. To keep your balance, you must keep moving.',
  },
};

export const WithAuthorAndSource: Story = {
  args: {
    author: 'Steve Jobs',
    source: 'Stanford University Commencement Speech',
    children:
      "Your time is limited, so don't waste it living someone else's life.",
  },
};

export const WithFormatting: Story = {
  args: {
    author: 'William Shakespeare',
    children:
      "To be, or not to be—that is the question:\nWhether 'tis nobler in the mind to suffer\nThe slings and arrows of outrageous fortune,\nOr to take arms against a sea of troubles\nAnd by opposing end them. <strong>To die</strong>, to sleep—\nNo more—and by a sleep to say we end\nThe heartache and the thousand natural shocks\nThat flesh is heir to. <em>'Tis a consummation\nDevoutly to be wished.</em>",
  },
};

export const WithInlineElements: Story = {
  args: {
    author: 'Albert Einstein',
    children:
      'The value of a man should be seen in what he gives and not in what he is able to receive. <b>Knowledge</b> is like a garden; if it is not cultivated, it cannot be harvested. <i>Imagination</i> is more important than knowledge.',
  },
};

export const Colored: Story = {
  args: {
    color: 'secondary',
    author: 'Emily Dickinson',
    children:
      'Unto a broken heart<br />No other one may go<br />Without the high prerogative<br />Itself hath suffered too',
  },
};
