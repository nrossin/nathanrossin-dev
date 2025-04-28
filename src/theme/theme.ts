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
        paper: '#DFD0B8',
    },
    text: {
        primary: '#000000',
        secondary: '#555555',
    },
    divider: '#3d5ee1',
    sectionBackgrounds: {
        home: '#A1E3F9',
        resume: '#D1F8EF',
        projects: '#A1E3F9',
        contact: '#D1F8EF',
    },
};

const darkPalette = {
    mode: 'dark' as const,
    primary: {
        main: '#90caf9',
        contrastText: '#6ea8ff',
    },
    secondary: {
        main: '#f48fb1',
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
        home: '#222831',
        resume: '#393E46',
        projects: '#222831',
        contact: '#393E46',
    },
};

export const getTheme = (mode: 'light' | 'dark') =>
    createTheme({
        palette: mode === 'light' ? lightPalette : darkPalette,
        typography: {
            fontFamily: 'Roboto, sans-serif',
        },
    });