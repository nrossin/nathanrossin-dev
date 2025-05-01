import { Box, CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import NavBar from './components/Navbar/Navbar';
import ContactSection from './components/Sections/ContactSection.tsx';
import HomeSection from './components/Sections/HomeSection.tsx';
import ProjectsSection from './components/Sections/ProjectsSection.tsx';
import HistorySection from './components/Sections/HistorySection.tsx';
import { ColorModeContext } from './theme/ColorModeContext.tsx';
import { getTheme } from './theme/theme.ts';

const App: React.FC = () => {
    const [mode, setMode] = useState<'light' | 'dark'>('dark');

    // State to track the currently-visible section of the main page (used for highlighting corresponding Nav elements
    const [activeSection, setActiveSection] = useState<string>('home');

    // IntersectionObserver setup to update the currently-visible section
    useEffect(() => {
        const sections = document.querySelectorAll('section');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        if (id) {
                            setActiveSection(id);
                        }
                    }
                });
            },
            {
                threshold: 0.5, // 50% of the section must be visible to "count"
            }
        );

        // Monitor each section
        sections.forEach((section) => observer.observe(section));

        // When the component unmounts, release the observer
        return () => {
            sections.forEach((section) => observer.unobserve(section));
        }
    }, []);

    // Provide global access to light/dark toggle
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const newMode = prevMode === 'light' ? 'dark' : 'light';

                    if (newMode === 'light') {
                        console.log('📘 Then God said, “Let there be light”; and there was light. \n' +
                            '(Genesis 1:3)\n');
                    }
                    return newMode;
                });
            },
        }),
        []
    );

    const theme = useMemo(() => getTheme(mode), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles
                    styles={{
                        body: {
                            transition: 'background-color 1.5s ease, color 1.5s ease',
                        },
                        '#root': {
                            transition: 'background-color 1.5s ease, color 1.5s ease',
                        },
                    }}
                />
                <NavBar activeSection={activeSection} />
                <Box>
                    <Box>
                        <HomeSection />
                        <HistorySection />
                        <ProjectsSection />
                        <ContactSection />
                    </Box>

                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default App;