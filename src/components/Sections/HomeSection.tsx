import { Avatar, Box, Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import techItemMapRaw from '../../data/techItemMap.json';
import { TechInfo, TechItemMap } from '../../types/types.ts';
import TechChip from '../Common/TechChip.tsx';
import SectionBox from './SectionBox.tsx';
import ElephantTrigger from '../Elephant/ElephantTrigger'

const HomeSection: React.FC = () => {

    // Get a typed list of tech items
    const techItemMap: TechItemMap = techItemMapRaw;

    // Group tech by category
    const categorizedTech: { [category: string]: TechInfo[] } = {};
    Object.entries(techItemMap).forEach(([, techInfo]) => {
        if (!categorizedTech[techInfo.category]) {
            categorizedTech[techInfo.category] = [];
        }

        categorizedTech[techInfo.category].push(techInfo);
    });

    return (
        <SectionBox id="home"
                    title="Hi, I'm Nathan"
                    subtitle="Full-Stack Develop & Software Engineer"
        >
            <ElephantTrigger />
            <Box
                display="flex"
                gap={4}
                alignItems="center"
                justifyContent="center"
                flexWrap="wrap"
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
                    Welcome! I am a full-stack developer with a passion for elegant interfaces (though I am not, by
                    nature,
                    a designer), clean code, and features that serve the end user. I consider myself to be a
                    Jack-of-All-Trades, but a Master of none.
                </Typography>
            </Box>

            <Typography
                variant="h6"
                sx={{
                    mt: 2,
                    mb: 4,
                    textAlign: 'center',
                    fontStyle: 'italic',
                    color: 'primary.contrastText',
                }}>
                "If you don't have time to do it right, when will you have time to do it over?"
            </Typography>

            {/*Skills Section*/}
            <Divider sx={{mb: 4}} />
            <Grid container spacing={4} justifyContent="center">
                {Object.entries(categorizedTech).map(([category, techs]) => (
                    <Grid size={{xs: 12, sm: 6, md: 4}} key={category}>
                        <Typography variant="h6" sx={{mb: 2}}>
                            {category}
                        </Typography>

                        <Stack direction="row" gap={1} flexWrap="wrap">
                            {techs.map((techInfo) => (
                                <TechChip key={techInfo.label} techInfo={techInfo} />
                            ))}
                        </Stack>
                    </Grid>

                ))}
            </Grid>
        </SectionBox>
    );
};

export default HomeSection;