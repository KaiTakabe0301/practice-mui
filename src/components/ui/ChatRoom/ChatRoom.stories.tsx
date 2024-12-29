import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { CenterButton, ChatRoomContainer, LeftPanel, Resizer, RightPanel } from './ChatRoom';

const EnhancedChatRoomContainer = () => {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <ChatRoomContainer>
      <LeftPanel expanded={expanded}>
        <div
          style={{
            backgroundColor: 'transparent',
            whiteSpace: 'nowrap',
            height: '100vh',
            width: '100%',
            flexShrink: 0,
          }}
        >
          Left Panel Content
        </div>
      </LeftPanel>
      <Resizer>
        <CenterButton onClick={handleToggle}>{/* ボタン内部のテキスト/アイコンなどはお好みで */}⇆</CenterButton>
      </Resizer>
      <RightPanel>
        <div
          style={{
            backgroundColor: '#eef',
            height: '100vh',
            width: '100%',
            flexShrink: 0,
          }}
        >
          Right Panel Content
        </div>
      </RightPanel>
    </ChatRoomContainer>
  );
};

const meta = {
  title: 'layout/ChatRoom',
  component: EnhancedChatRoomContainer,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof EnhancedChatRoomContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
