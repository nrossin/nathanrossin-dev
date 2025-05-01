// Let TypeScript know that MUI's palette includes the new `sectionBackgrounds` field.
import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        sectionBackgrounds: {
            home: string;
            history: string;
            projects: string;
            contact: string;
        };
    }
    interface PaletteOptions {
        sectionBackgrounds?: {
            home: string;
            history: string;
            projects: string;
            contact: string;
        };
    }
}