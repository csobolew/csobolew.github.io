import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useState } from 'react';
import Header from './Components/Header'

export default function App() {

  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    document.documentElement.style.setProperty('--hover-color', (colorScheme === 'dark' ? '#fcc419' : '#15aabf'));
  const dark = colorScheme === 'dark';

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>

      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>

        <Header dark={dark} colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}></Header>
        {/* <AppShell
        padding="md"
        header={<Header height={60} p="md">
          <div style={{ display: "flex" }}>
            <Text
              variant="gradient"
              gradient={dark ? {from: 'yellow', to: 'yellow', deg: 45} : {from: 'cyan', to:'cyan', deg: 45}}
              sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
              ta="left"
              fz="xl"
              fw={700}
            >Carson Sobolewski</Text>          
            <ActionIcon
              variant="outline"
              color={dark ? 'yellow' : 'cyan'}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
              style={{ marginLeft: "auto"}}
            >
              {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
            </ActionIcon>
          </div>
          </Header>}
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
        >

        </AppShell> */}
        
      </MantineProvider>
    </ColorSchemeProvider>
  );
}