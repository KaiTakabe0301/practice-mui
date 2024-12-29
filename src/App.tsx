import { Box, styled, Typography } from '@mui/material';
import { useState } from 'react';

import { CenterButton, ChatRoomContainer, LeftPanel, Resizer, RightPanel } from './components/ui/ChatRoom';

/**
 * 左パネル内部のコンテンツ
 * - 子要素は縮小させない (flex-shrink: 0)
 * - 折り返ししない場合は white-space: nowrap
 */
const LeftContent = styled(Box)(() => ({
  flexShrink: 0,
  whiteSpace: 'nowrap', // 折り返しを防止（必要に応じて削除）
  padding: '16px',
  boxSizing: 'border-box',
}));

/**
 * 右パネル内部のコンテンツ
 * - 子要素は縮まないように
 */
const RightContent = styled(Box)(() => ({
  flexShrink: 0,
  whiteSpace: 'nowrap', // 折り返しを防止（必要に応じて削除）
  padding: '16px',
  boxSizing: 'border-box',
}));

export default function App() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <>
      <ChatRoomContainer>
        {/* 左パネル */}
        <LeftPanel expanded={expanded}>
          <LeftContent>
            <Typography variant='h6'>Left Panel Content</Typography>
            <Typography variant='body2'>ここに長い文章を入れると、狭いときは見えません。</Typography>
          </LeftContent>
        </LeftPanel>

        {/* 仕切り線とボタン */}
        <Resizer>
          <CenterButton onClick={handleToggle}>{/* ボタン内部のテキスト/アイコンなどはお好みで */}⇆</CenterButton>
        </Resizer>

        {/* 右パネル */}
        <RightPanel>
          <RightContent>
            <Typography variant='h6'>Right Panel Content</Typography>
            <Typography variant='body2'>左パネルが大きくなると、右側は幅が半分程度に縮みます。 子要素は折り返されず、そのまま表示されます。</Typography>
          </RightContent>
        </RightPanel>
      </ChatRoomContainer>
    </>
  );
}
