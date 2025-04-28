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
import LightboxDialog from '../Common/LightboxDialog.tsx';
import TechChip from '../Common/TechChip.tsx';

// Images for each project may also include a caption
interface ProjectImage {
    url: string;
    caption?: string;
}

interface ProjectCardProps {
    title: string;
    description: string;
    flags?: string[];
    images: ProjectImage[];
    techStack: string[];
    liveDemoUrl?: string;
    githubUrl?: string;
}


const ProjectCard: React.FC<ProjectCardProps> = ({
                                                     title,
                                                     description,
                                                     flags,
                                                     images,
                                                     techStack,
                                                     liveDemoUrl,
                                                     githubUrl,
                                                 }) => {

    const theme = useTheme();
    const techItemMap: TechItemMap = techIconMapRaw;

    // Setup state for the image lightbox
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleCardClick = () => {
        setCurrentIndex(0);
        setLightboxOpen(true);
    };

    const coverImage = images[0];

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
                           alt={title}
                           sx={{
                               objectFit: 'cover',
                               objectPosition: 'top center'
                           }}
                />

                <CardContent sx={{flexGrow: 1}}>
                    <Typography gutterBottom variant="h5">
                        {title}
                    </Typography>
                    {flags && (
                        <Stack
                            direction="row"
                            spacing={1}
                            flexWrap="wrap"
                            sx={{mt: 1, mb: 2}}
                        >
                            {flags.map((flag) => {
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
                        {description}
                    </Typography>

                    {/*Tech Stack Icons*/}
                    <Stack direction="row" flexWrap="wrap" gap={1}>
                        {techStack.map((tech) => {
                            const techInfo = techItemMap[tech];
                            return (
                                <TechChip key={tech} techInfo={techInfo} />
                            );
                        })}
                    </Stack>
                </CardContent>


                {/*Action Buttons - if a URL is present for this project */}
                {(githubUrl || liveDemoUrl) && (
                    <>
                        <Divider sx={{mb: 2, mt: 1}} />
                        <Box sx={{
                            p: 2, pt: 0, display: 'flex', justifyContent: 'space-around'
                        }}>
                            {githubUrl && (
                                <Button size="small"
                                        startIcon={<GitHubIcon />}
                                        href={githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()} // Prevent card click opening dialog
                                >
                                    GitHub
                                </Button>
                            )}
                            {liveDemoUrl && (
                                <Button size="small"
                                        startIcon={<LaunchIcon />}
                                        href={liveDemoUrl}
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

            <LightboxDialog
                open={lightboxOpen}
                images={images}
                currentIndex={currentIndex}
                onClose={() => setLightboxOpen(false)}
                onPrev={() =>
                    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
                }
                onNext={() =>
                    setCurrentIndex((prev) => (prev + 1) % images.length)
                }
                goTo={(index) => setCurrentIndex(index)}
            />
        </>
    );
};

export default ProjectCard;