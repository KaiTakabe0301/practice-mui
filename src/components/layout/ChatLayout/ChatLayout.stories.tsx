import type { Meta, StoryObj } from '@storybook/react';

import { ChatLayout } from './ChatLayout';

const meta = {
  title: 'ChatLayout',
  component: ChatLayout,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof ChatLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>ChatLayout</div>,
  },
};
