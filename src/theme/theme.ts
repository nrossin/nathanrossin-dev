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
        home: 'linear-gradient( 89.2deg,  rgba(191,241,236,1) 22.3%, rgba(109,192,236,1) 84.1% );',
        history: 'linear-gradient( 181.2deg,  rgba(181,239,249,1) 10.5%, rgba(254,254,254,1) 86.8% );',
        projects: 'linear-gradient( 109.6deg,  rgba(17,151,147,1) 11.2%, rgba(154,214,212,1) 55.4%, rgba(255,233,171,1) 100.2% );',
        contact: 'linear-gradient( 180.3deg,  rgba(221,221,221,1) 5.5%, rgba(110,136,161,1) 90.2% );',
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
        home: 'linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0));',
        history: 'linear-gradient(147deg, #000000 0%, #2c3e50 74%);',
        projects: 'linear-gradient(315deg, #003153 0%, #1B1B1B 74%);\n',
        contact: 'radial-gradient(140% 107% at 50% 10%, #000314 37.41%, #6633EE 69.27%, #FFFFFF 100%);'
    },
};

export const getTheme = (mode: 'light' | 'dark') =>
    createTheme({
        palette: mode === 'light' ? lightPalette : darkPalette,
        typography: {
            fontFamily: 'Roboto, sans-serif',
        },
    });