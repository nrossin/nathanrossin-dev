import { Box, Typography, useTheme } from '@mui/material';
import { ReactNode } from 'react';

interface SectionBoxProps {
    id: 'home' | 'history' | 'projects' | 'contact'; // Only allow known sections as ids
    title: string;
    subtitle?: string;
    children?: ReactNode
}

const SectionBox = ({id, title, subtitle, children}: SectionBoxProps) => {

    const theme = useTheme();

    return (
        <Box id={id}
             component="section"    // IntersectionObserver (in App.tsx) will be monitoring these `<section>` elements.
             sx={{
                 minHeight: '50vh',
                 backgroundImage: theme.palette.sectionBackgrounds[id],
                 color: theme.palette.text.primary,
                 display: 'flex',
                 flexDirection: 'column',
                 justifyContent: 'center',
                 alignItems: 'center',
                 borderBottom: 10,
                 borderColor: 'divider',
                 padding: 4,
                 transition: 'background-color 0.5s ease-in-out, color 0.5s ease-in-out, border-color 0.5s ease-in-out', // Animate the light/dark transition
             }}
        >
            <Typography variant="h2" fontWeight="bold">{title}</Typography>
            <Typography variant="h5">{subtitle}</Typography>

            <Box sx={{maxWidth: 1200}}>
                {children}
            </Box>
        </Box>
    );
};

export default SectionBox;