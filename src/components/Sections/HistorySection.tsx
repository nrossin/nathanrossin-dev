import WorkIcon from '@mui/icons-material/Work';
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from '@mui/lab';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { workHistory } from '../../data/workHistory.ts';
import SectionBox from './SectionBox.tsx';

const HistorySection: React.FC = () => {

    // Allow for adaptation when on mobile
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <SectionBox id="history"
                    title="Experience / History"
                    subtitle="Career & Experience Timeline"
        >

            <Box sx={{py: 8}}>

                {isMobile ? (
                    <Box>
                        {/* Simple mobile listing */}
                        {workHistory.map((role, index) => (
                            <Box key={index} sx={{mb: 4}}>
                                <Typography variant="h6" sx={{fontWeight: 'bold'}}>
                                    {role.title}
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary">
                                    {role.company}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{mb: 1}}>
                                    {role.startDate} – {role.endDate} ({role.duration})
                                </Typography>
                                <List dense>
                                    {role.description.map((item, idx) => (
                                        <ListItem key={idx} disablePadding>
                                            <ListItemIcon sx={{minWidth: 30}}>
                                                <span>•</span>
                                            </ListItemIcon>
                                            <ListItemText primary={item} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        ))}
                    </Box>
                ) : (
                    <Timeline position="alternate">
                        {workHistory.map((role, index) => (
                            <TimelineItem key={index}>
                                <TimelineOppositeContent
                                    sx={{m: 'auto 0'}}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    <Typography variant="body2" color={theme.palette.text.primary}>
                                        {role.startDate} - {role.endDate}
                                    </Typography>
                                    <Typography variant="body2" color={theme.palette.text.secondary} sx={{mb: 1}}>
                                        {role.duration}
                                    </Typography>
                                </TimelineOppositeContent>

                                <TimelineSeparator>
                                    <TimelineDot color="primary">
                                        <WorkIcon />
                                    </TimelineDot>

                                    {index < workHistory.length - 1 && <TimelineConnector />}
                                </TimelineSeparator>

                                <TimelineContent sx={{py: '12px', px: 2}}>
                                    <Typography variant="h6" component="span">
                                        {role.title}
                                    </Typography>
                                    <Typography variant="subtitle1" fontWeight="bold" color="text.secondary">
                                        {role.company}
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{fontStyle: 'italic'}} color={theme.palette.text.secondary}>
                                        ({role.department})
                                    </Typography>

                                    <List dense>
                                        {role.description.map((item, idx) => (
                                            <ListItem key={idx} disablePadding>
                                                <ListItemIcon sx={{minWidth: 30}}>
                                                    <span>•</span>
                                                </ListItemIcon>
                                                <ListItemText primary={item} />
                                            </ListItem>
                                        ))}
                                    </List>

                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                )}
            </Box>


        </SectionBox>
    );
};

export default HistorySection;