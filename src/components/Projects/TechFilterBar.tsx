import { Box, Chip, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import techIconMapRaw from '../../data/techItemMap.json';
import { TechItemMap } from '../../types/types.ts';
import TechChip from '../Common/TechChip.tsx';

interface TechFilterBarProps {
    techList: string[];
    selectedTech: string | null;
    onSelectTech: (tech: string | null) => void;
}

const TechFilterBar: React.FC<TechFilterBarProps> = ({
                                                         techList,
                                                         selectedTech,
                                                         onSelectTech
                                                     }) => {

    const theme = useTheme();
    const techItemMap: TechItemMap = techIconMapRaw;

    return (
        <Box>
            <Typography variant="body1" textAlign="center">Projects may be filtered by technology used:</Typography>

            <Stack
                direction="row"
                gap={2}
                flexWrap="wrap"
                justifyContent="center"
                sx={{mb: 4, p: 2}}

            >

                {/* Reset Button */}
                <Chip
                    label="Show All"
                    clickable
                    variant="outlined"
                    // color={selectedTech === null ? 'primary' : 'default'}
                    onClick={() => onSelectTech(null)}
                    sx={{
                        paddingX: 1,
                        backgroundColor: theme.palette.background.default,
                        borderColor: theme.palette.primary.main
                    }}
                />

                {/*Tech Chips*/}
                {techList.map((tech) => {
                    const techInfo = techItemMap[tech];
                    return techInfo ? (
                        <TechChip key={tech}
                                  techInfo={techInfo}
                                  link={false}
                                  selected={selectedTech === tech}
                                  onClick={() => onSelectTech(tech)}
                        />
                    ) : null;
                })}
            </Stack>
        </Box>
    )
}

export default TechFilterBar;