import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Divider,
    Stack,
    Tooltip,
    Typography,
    useTheme
} from '@mui/material';
import React, { useState } from 'react';
import { flagInfoMap } from '../../data/flagInfoMap';
import techIconMapRaw from '../../data/techItemMap.json';
import { TechItemMap } from '../../types/types.ts';
import TechChip from '../Common/TechChip.tsx';
import ProjectDetails from "./ProjectDetails.tsx";
import { Project } from "../../types/types.ts";

interface ProjectCardProps {
    project: Project;
}


const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {

    const theme = useTheme();
    const techItemMap: TechItemMap = techIconMapRaw;

    // Setup state for the image lightbox
    const [detailsOpen, setDetailsOpen] = useState(false);

    const handleCardClick = () => {
        setDetailsOpen(true);
    };

    const coverImage = project.images[0];

    return (
        <>
            <Card
                sx={{
                    maxWidth: 400,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: 6,
                    },
                }}
                onClick={handleCardClick}
            >
                <CardMedia component="img"
                           height="140"
                           image={coverImage.url}
                           alt={project.title}
                           sx={{
                               objectFit: 'cover',
                               objectPosition: 'top center'
                           }}
                />

                <CardContent sx={{flexGrow: 1}}>
                    <Typography gutterBottom variant="h5">
                        {project.title}
                    </Typography>
                    {project.flags && (
                        <Stack
                            direction="row"
                            spacing={1}
                            flexWrap="wrap"
                            sx={{mt: 1, mb: 2}}
                        >
                            {project.flags.map((flag) => {
                                const info = flagInfoMap[flag];
                                return info ? (
                                    <Tooltip title={info.tooltip} key={flag}>
                                        <Chip
                                            label={info.label}
                                            size="small"
                                            color={info.color}
                                            variant="outlined"
                                            sx={{fontSize: '0.7rem'}}
                                        />
                                    </Tooltip>
                                ) : null;
                            })}
                        </Stack>
                    )

                    }
                    <Typography variant="body2" color={theme.palette.text.secondary} sx={{mb: 2}}>
                        {project.description}
                    </Typography>

                    {/*Tech Stack Icons*/}
                    <Stack direction="row" flexWrap="wrap" gap={1}>
                        {project.techStack.map((tech) => {
                            const techInfo = techItemMap[tech];
                            return (
                                <TechChip key={tech} techInfo={techInfo}/>
                            );
                        })}
                    </Stack>
                </CardContent>


                {/*Action Buttons - if a URL is present for this project */}
                {(project.githubUrl || project.liveDemoUrl) && (
                    <>
                        <Divider sx={{mb: 2, mt: 1}}/>
                        <Box sx={{
                            p: 2, pt: 0, display: 'flex', justifyContent: 'space-around'
                        }}>
                            {project.githubUrl && (
                                <Button size="small"
                                        startIcon={<GitHubIcon/>}
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()} // Prevent card click opening dialog
                                >
                                    GitHub
                                </Button>
                            )}
                            {project.liveDemoUrl && (
                                <Button size="small"
                                        startIcon={<LaunchIcon/>}
                                        href={project.liveDemoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()} // Prevent card click opening dialog
                                >
                                    Live
                                </Button>
                            )}
                        </Box>
                    </>
                )}

            </Card>

            {/*Desktop Lightbox Dialog*/}
            <ProjectDetails open={detailsOpen}
                            project={project}
                            onClose={() => setDetailsOpen(false)}
            />
        </>
    );
};

export default ProjectCard;