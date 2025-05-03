import { createTheme } from '@mui/material/styles';

// Light mode color palette
const lightPalette = {
    mode: 'light' as const,
    primary: {
        main: 'rgba(62, 122, 179, 1)',
        contrastText: '#ffffff',
    },
    secondary: {
        main: '#ffffff',
        contrastText: '#ffffff',
    },
    background: {
        default: '#ffffff',
        paper: '#dde2ec',
    },
    text: {
        primary: '#000000',
        secondary: '#2c2c2c',
    },
    divider: '#3d5ee1',
    sectionBackgrounds: {
        home: 'linear-gradient(135deg,rgba(62, 122, 179, 1) 0%, rgba(179, 179, 179, 1) 85%, rgba(237, 237, 237, 1) 100%);',
        history: 'linear-gradient(320deg,rgba(62, 122, 179, 1) 0%, rgba(179, 179, 179, 1) 85%, rgba(237, 237, 237, 1) 100%);',
        projects: 'radial-gradient(circle,rgba(62, 122, 179, 1) 1%, rgba(255, 255, 255, 1) 100%);',
        contact: 'linear-gradient(45deg, #FFFFFF, #012D5A);',
    },
};

const darkPalette = {
    mode: 'dark' as const,
    primary: {
        main: '#90caf9',
        contrastText: '#6ea8ff',
    },
    secondary: {
        main: '#6ea8ff',
        contrastText: '#000000',
    },
    background: {
        default: '#222831',
        paper: '#222831',
    },
    text: {
        primary: '#ffffff',
        secondary: '#bbbbbb',
    },
    divider: '#1e1e1e',
    sectionBackgrounds: {
        home: 'linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0));',
        history: 'linear-gradient(147deg, #000000 0%, #2c3e50 74%);',
        projects: 'linear-gradient(315deg, #003153 0%, #1B1B1B 74%);',
        contact: 'linear-gradient(315deg, #003366 0%, #242124 74%);'
    },
};

export const getTheme = (mode: 'light' | 'dark') =>
    createTheme({
        palette: mode === 'light' ? lightPalette : darkPalette,
        typography: {
            fontFamily: 'Roboto, sans-serif',
        },
    });