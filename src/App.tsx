import { MantineProvider, ColorSchemeProvider, ColorScheme, Text } from '@mantine/core';
import { useState } from 'react';
import { AppShell, ActionIcon, Navbar, Footer } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from './Components/Header'

export default function App() {

  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  const dark = colorScheme === 'dark';

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>

      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>

        <HelmetProvider>
        <Helmet>
          <meta name="theme-color" content={dark ? "#1a1b1e" : "#ffffff"} />
        </Helmet>
        </HelmetProvider>

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