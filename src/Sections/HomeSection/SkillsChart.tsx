import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import { TechInfo, TechItemMap } from '../../types/types.ts';
import TechChip from '../../components/Common/TechChip.tsx';

interface SkillsChartProps {
    techItemMap: TechItemMap,
    isMobile: boolean,
}

/**
 * SkillsChart is a React functional component that renders a categorized chart of technical skills.
 * This component handles both the desktop and mobile versions of this list
 **/
const SkillsChart: React.FC<SkillsChartProps> = ({techItemMap, isMobile}) => {

    const theme = useTheme();

    // Group tech by category
    const categorizedTech: { [category: string]: TechInfo[] } = {};
    Object.entries(techItemMap).forEach(([, techInfo]) => {
        if (!categorizedTech[techInfo.category]) {
            categorizedTech[techInfo.category] = [];
        }
        categorizedTech[techInfo.category].push(techInfo);
    });

    if (isMobile) {
        return (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDropDown />}
                >
                    <Typography component="span">View Technical Skills List</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box
                        sx={{
                            maxHeight: 300,
                            overflowY: 'auto',
                            pr: 1
                        }}
                    >
                        {Object.entries(categorizedTech).map(([category, techs]) => (
                            <Box key={category} sx={{mb: 3}}>
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        position: 'sticky',
                                        top: 0,
                                        backgroundColor: theme.palette.background.default,
                                        zIndex: 1,
                                        py: 0.5
                                    }}
                                >
                                    {category}
                                </Typography>
                                <Stack
                                    direction="row"
                                    flexWrap="wrap"
                                    gap={1}
                                    sx={{mt: 1}}>
                                    {techs.map((techInfo) => (
                                        <TechChip key={techInfo.label} techInfo={techInfo} />
                                    ))}
                                </Stack>
                            </Box>
                        ))}
                    </Box>
                </AccordionDetails>
            </Accordion>
        );
    } else {
        return (
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
        );
    }
};

export default SkillsChart;