import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '../Container/Container';
import { Textarea, type TextareaProps } from './Textarea';

const longText = `This is a very long story.
The Textarea component should automatically grow as I type.
Each new line causes the DOM element's height to be recalculated in real time thanks to useLayoutEffect.

First line: the ref captures the element.
Second line: it is reset to 'auto'.
Third line: it is set to scrollHeight.

This ensures that the scrollbar does not appear and the field perfectly adapts to the content.
This is the final line.`;

const meta: Meta<TextareaProps> = {
  title: 'Inputs/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container size="medium" padding="large">
        <Story />
      </Container>
    ),
  ],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    rows: { control: { type: 'number', min: 1, max: 10 } },
    hasError: { control: 'boolean' },
    disabled: { control: 'boolean' },
    helpText: { control: 'text' },
  },
  args: {
    label: 'Post Description',
    placeholder: 'Enter your content here...',
    required: true,
    rows: 4,
  },
};

export default meta;

export const Default: StoryObj<TextareaProps> = {
  args: {
    placeholder: 'Type here to see auto-resize...',
    label: 'Content (Auto-resize)',
  },
};

export const ErrorState: StoryObj<TextareaProps> = {
  args: {
    hasError: true,
    helpText: 'The content is too short to be saved.',
    label: 'Message Body',
  },
};

export const Disabled: StoryObj<TextareaProps> = {
  args: {
    disabled: true,
    value: 'This field has been disabled for editing.',
    label: 'Comments (Locked)',
  },
};

export const WithInitialLongContent: StoryObj<TextareaProps> = {
  args: {
    value: longText,
    label: 'Existing Post',
    placeholder: 'The scrollbar should not appear...',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Checks that the component correctly calculates the initial height based on the content.',
      },
    },
  },
};

export const FixedRows: StoryObj<TextareaProps> = {
  args: {
    rows: 8,
    label: 'Notes Field (8 minimum rows)',
    placeholder: 'The minimum height is 8 rows.',
  },
};
