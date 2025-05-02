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
        paper: '#E0E5EEFF',
    },
    text: {
        primary: '#000000',
        secondary: '#555555',
    },
    divider: '#3d5ee1',
    sectionBackgrounds: {
        home: 'linear-gradient(315deg, #d5ddf8, #fff 57%);',
        history: 'linear-gradient(220.55deg, #EAEAEA 0%, #8B8B8B 100%);',
        projects: 'conic-gradient(at center top, rgb(17, 24, 39), rgb(243, 244, 246), rgb(17, 24, 39));\n',
        contact: 'linear-gradient(to right, rgb(229, 231, 235), rgb(156, 163, 175), rgb(75, 85, 99));\n',
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