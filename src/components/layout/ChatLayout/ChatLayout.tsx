import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from '@mui/material';
import { PropsWithChildren, useCallback, useState } from 'react';

export type ChatLayoutProps = PropsWithChildren;

export function ChatLayout({ children }: ChatLayoutProps) {
  const drawerWidth = 240;
  const [open, setOpen] = useState(false);

  const handleToggleDrawer = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <Stack direction={'row'} height={'100vh'}>
      <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar variant='dense'>
          <IconButton onClick={handleToggleDrawer} size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='persistent'
        open={open}
        sx={{
          width: open ? drawerWidth : 0,
          flexShrink: 0,
          transition: (theme) =>
            theme.transitions.create('width', {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
        }}
      >
        <Toolbar variant='dense' />
        <Box width={drawerWidth} sx={{ overflow: 'auto' }}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        sx={{
          flex: '0 1 100%',
        }}
        component='main'
      >
        <Toolbar variant='dense' />
        {children}
      </Box>
    </Stack>
  );
}
