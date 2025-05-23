import { Avatar, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import techItemMapRaw from '../../../data/techItemMap.json';
import { TechItemMap } from '../../../types/types.ts';
import ElephantTrigger from '../../Elephant/ElephantTrigger'
import SectionBox from '../SectionBox.tsx';
import SkillsChart from './SkillsChart.tsx';

const HomeSection: React.FC = () => {

    const theme = useTheme();

    // Get a typed list of tech items
    const techItemMap: TechItemMap = techItemMapRaw;
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <SectionBox id="home"
                    title="Hi, I'm Nathan"
                    subtitle="Full-Stack Developer & Software Engineer"
        >
            <ElephantTrigger />
            <Box
                display="flex"
                gap={4}
                alignItems="center"
                justifyContent="center"
                flexWrap="wrap"
                sx={{mt: 4}}
            >
                <Avatar
                    alt="Nathan Rossin"
                    src="../images/headshot.jpg"
                    sx={{
                        width: 200,
                        height: 200,
                    }}
                />

                <Typography variant="body1" sx={{maxWidth: 600}}>
                    Welcome! I am a seasoned full-stack developer with 10 years’ experience building web and desktop
                    applications built in Java, JavaFX, React, and PHP.
                    <br /><br />
                    I am skilled at translating business needs into clean, maintainable code and communicating technical
                    solutions back to non-technical stakeholders and business owners. Passionate about root-cause
                    analysis, driving agile teams forward, and delivering valuable ROI.
                    <br /><br />
                    Please feel free to check out my Projects below and let me know if you have any questions or
                    comments!
                </Typography>
            </Box>

            <Typography
                variant="h5"
                sx={{
                    mt: 4,
                    mb: 4,
                    textAlign: 'center',
                    fontStyle: 'italic',
                    color: theme.palette.secondary.main
                }}>
                "If you don't have time to do it right, when will you have time to do it over?"
            </Typography>

            {/*Skills Section*/}
            <SkillsChart techItemMap={techItemMap} isMobile={isMobile} />

        </SectionBox>
    );
};

export default HomeSection;