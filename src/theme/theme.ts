import { createTheme } from '@mui/material/styles';

// Light mode color palette
const lightPalette = {
    mode: 'light' as const,
    primary: {
        main: '#1976d2',
        contrastText: '#ffffff',
    },
    secondary: {
        main: '#ac2bac',
        contrastText: '#ffffff',
    },
    background: {
        default: 'blue',
        paper: 'rgba(174,220,189,0.36)',
    },
    text: {
        primary: '#000000',
        secondary: '#555555',
    },
    divider: '#3d5ee1',
    sectionBackgrounds: {
        home: 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);',
        history: 'linear-gradient(180deg, rgba(19, 171, 246, 1), rgba(209, 209, 209, 1));',
        projects: 'linear-gradient(to top, #accbee 0%, #e7f0fd 100%);',
        contact: 'linear-gradient(to top, #e8198b 0%, #c7eafd 100%);',
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