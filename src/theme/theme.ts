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
        resume: 'linear-gradient( 181.2deg,  rgba(181,239,249,1) 10.5%, rgba(254,254,254,1) 86.8% );',
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
        home: 'linear-gradient(320.54deg, #00069F 0%, #120010 72.37%), linear-gradient(58.72deg, #69D200 0%, #970091 100%), linear-gradient(121.28deg, #8CFF18 0%, #6C0075 100%), linear-gradient(121.28deg, #8000FF 0%, #000000 100%), linear-gradient(180deg, #00FF19 0%, #24FF00 0.01%, #2400FF 100%), linear-gradient(52.23deg, #0500FF 0%, #FF0000 100%), linear-gradient(121.28deg, #32003A 0%, #FF4040 100%), radial-gradient(50% 72.12% at 50% 50%, #EB00FF 0%, #110055 100%);' + 'background-blend-mode: screen, color-dodge, color-burn, screen, overlay, difference, color-dodge, normal;',
        resume: 'linear-gradient(115deg, #000000 0%, #00C508 55%, #000000 100%), linear-gradient(115deg, #0057FF 0%, #020077 100%), conic-gradient(from 110deg at -5% 35%, #000000 0deg, #FAFF00 360deg), conic-gradient(from 220deg at 30% 30%, #FF0000 0deg, #0000FF 220deg, #240060 360deg), conic-gradient(from 235deg at 60% 35%, #0089D7 0deg, #0000FF 180deg, #240060 360deg);\n' +
            'background-blend-mode: soft-light, soft-light, overlay, screen, normal;',
        projects: 'radial-gradient(23.53% 23.53% at 26.47% 77.52%, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(32.26% 32.26% at 86.54% 64.29%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(44.89% 44.89% at 60.6% 20%, rgba(0, 14, 116, 0.48) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(53.86deg, rgba(255, 255, 255, 0.2) 29.08%, rgba(0, 0, 0, 0) 64.4%), linear-gradient(231.06deg, #010103 15.27%, #00107D 34.07%, #3174B1 47%, #AAB2BC 64.23%, #BEB3BD 72.85%, #BBADB8 90.47%);\n' +
            'background-blend-mode: overlay, screen, overlay, screen, normal;\n',
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