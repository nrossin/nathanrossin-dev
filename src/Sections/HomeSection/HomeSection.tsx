import {Avatar, Box, IconButton, Link, Typography, useMediaQuery, useTheme} from '@mui/material';
import React from 'react';
import techItemMapRaw from '../../data/techItemMap.json';
import {TechItemMap} from '../../types/types.ts';
import ElephantTrigger from '../../components/Elephant/ElephantTrigger.tsx'
import SectionBox from '../SectionBox.tsx';
import SkillsChart from './SkillsChart.tsx';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const HomeSection: React.FC = () => {

    const theme = useTheme();

    // Get a typed list of tech items
    const techItemMap: TechItemMap = techItemMapRaw;
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <SectionBox id="home"
                    title="Hi, I'm Nathan"
                    subtitle="Software Engineer | Full-Stack Application Development"
        >
            <ElephantTrigger/>

            <Box
                display="flex"
                gap={4}
                alignItems="flex-start"
                justifyContent="center"
                flexWrap="wrap"
                sx={{mt: 4}}
            >

                {/* Avatar + Icons Column */}
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Avatar
                        alt="Nathan Rossin"
                        src="../images/headshot.jpg"
                        sx={{width: 200, height: 200}}
                    />

                    <Box display="flex" justifyContent="center" gap={1} mt={1}>
                        <Link href="https://github.com/nrossin" target="_blank" rel="noopener" underline="none">
                            <IconButton color="primary" aria-label="GitHub Profile">
                                <GitHubIcon fontSize="large"/>
                            </IconButton>
                        </Link>
                        <Link href="https://www.linkedin.com/in/nathan-rossin" target="_blank" rel="noopener"
                              underline="none">
                            <IconButton color="primary" aria-label="LinkedIn Profile">
                                <LinkedInIcon fontSize="large"/>
                            </IconButton>
                        </Link>
                    </Box>
                </Box>

                {/*Welcome text column*/}
                <Typography variant="body1" sx={{maxWidth: 600}}>
                    <p>I am a software engineer with 10+ years of experience building web and desktop applications that
                    solve real business problems.</p>

                    <p>Much of my work has involved partnering directly with users, stakeholders, and technical teams to
                    understand how a process works, identify opportunities for improvement, and turn those needs into
                    practical software solutions.</p>

                    <p>My experience includes Java, React, TypeScript, JavaScript, Node.js, PHP, SQL, Linux, and Docker,
                    with a particular focus on full-stack application development, internal business applications, and
                    business process automation.</p>

                    <p>I enjoy taking software from an initial idea through design, development, deployment, and continued
                    iteration, especially when I can work closely with the people who will actually use it.</p>

                </Typography>
            </Box>

            <Typography
                variant="h6"
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
            <SkillsChart techItemMap={techItemMap} isMobile={isMobile}/>

        </SectionBox>
    );
};

export default HomeSection;