import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

export const ChatRoomContainer = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  height: '100vh',
  margin: 0,
  padding: 0,
}));

/**
 * 左側のパネル
 * - expanded = true のときに幅を「500px」
 * - expanded = false のときに幅を「20px」
 */
export const LeftPanel = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'expanded',
})<{ expanded: boolean }>(({ expanded }) => ({
  width: expanded ? '500px' : '20px',
  flex: '0 0 auto',
  visibility: expanded ? 'visible' : 'hidden',
  transition: 'width 0.3s ease',
}));

/**
 * 仕切り線部分
 * - position: relative を使い、中央ボタンを absolute 配置
 */
export const Resizer = styled(Box)(() => ({
  position: 'relative',
  width: '2px',
  display: 'flex',
  flex: '0 0 auto',
  backgroundColor: '#333',
  cursor: 'col-resize',
}));

/**
 * 右パネル
 * - expanded = true のときは「50%」に
 * - expanded = false のときは「自動で残り幅いっぱい」
 */
export const RightPanel = styled(Box)(() => ({
  flex: '0 1 100%',
  flexShrink: 0,
  transition: 'flex-basis 0.3s ease, width 0.3s ease',
}));

export const CenterButton = styled(Button)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '24px',
  height: '24px',
  borderRadius: '50%',
  padding: 0,
  border: '1px solid #333',
  backgroundColor: '#fff',
  cursor: 'pointer',
}));
