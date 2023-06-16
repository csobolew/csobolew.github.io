import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useState } from 'react';
import { useLocalStorage } from '@mantine/hooks';
import Header from './Components/Header'
import Home from './Views/Home'
import NotFound from './Views/NotFound'
import MoreAboutMe from './Views/MoreAboutMe'
import { Routes, Route } from 'react-router-dom'

export default function App() {

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    document.documentElement.style.setProperty('--hover-color', (colorScheme === 'dark' ? '#fcc419' : '#15aabf'));
    document.documentElement.style.setProperty('--banner-background', (colorScheme === 'dark' ? '#fff4d5' : '#dbeef0'));
    document.documentElement.style.setProperty('--link-color', (colorScheme === 'dark' ? '#fd7e14' : '#15aabf'));
    document.documentElement.style.setProperty('--button-color', (colorScheme === 'dark' ? 'rgb(250, 176, 5)' : '#15aabf'));
  const dark = colorScheme === 'dark';

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>

      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>

        <Header dark={dark} colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<MoreAboutMe/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}