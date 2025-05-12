import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    Typography,
    useMediaQuery,
    useTheme,
    Box,
    Stack
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Carousel } from "react-responsive-carousel";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import TechChip from "../Common/TechChip.tsx";
import { Project, TechInfo, TechItemMap } from "../../types/types.ts";
import techIconMapRaw from "../../data/techItemMap.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";


interface ProjectDetailsProps {
    open: boolean;
    onClose: () => void;
    project: Project;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
                                                           open,
                                                           onClose,
                                                           project
                                                       }) => {

    const theme = useTheme();
    const techItemMap: TechItemMap = techIconMapRaw;

    // Helper to provide TechInfo given nothing but the tech name
    const getTechInfo = (tech: string): TechInfo => {
        const key = tech.toLowerCase();

        return techItemMap[key] ?? {
            label: tech,
            category: 'Other',
            icon: '',
            description: tech,
        }

    }

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullScreen={isMobile}
            maxWidth="md"
            fullWidth
            aria-labelledby="project-deatils-title"
        >
            <DialogTitle id="project-deatils-title" sx={{m: 0, p: 2}}>
                {project.title}
                <IconButton
                    aria-label="close"
                    onClick={() => onClose()}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    }}
                >
                    <CloseIcon/>
                </IconButton>
            </DialogTitle>

            <DialogContent dividers>
                {/*Screenshot Carousel*/}
                <Box sx={{mb: 3}}>
                    <Carousel
                        showThumbs={false}
                        infiniteLoop
                        useKeyboardArrows
                        dynamicHeight={false}
                        emulateTouch
                    >
                        {project.images.map((image, index) => (
                            <div key={index}>
                                <img
                                    src={image.url}
                                    alt={image.caption || `Screenshot ${index + 1}`}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '400px',
                                        width: "auto",
                                        height: 'auto',
                                        display: 'block',
                                        margin: '0 auto',
                                        objectFit: 'contain'
                                    }}
                                    loading="lazy"
                                    onClick={() => window.open(image.url, '_blank')}
                                />
                                {image.caption && (
                                    <p className="legend">{image.caption}</p>
                                )}
                            </div>

                        ))}
                    </Carousel>
                </Box>
                <Box sx={{mt: 1, display: 'flex', gap:6}}>

                {/* Tech Stack */}
                <Box sx={{mb: 3}}>
                    <Typography variant="h6" gutterBottom>
                        Tech Stack
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                        {project.techStack.map((tech) => {
                            const techInfo = getTechInfo(tech);
                            return (
                                <TechChip key={tech} techInfo={techInfo}/>
                            );
                        })}
                    </Stack>
                </Box>

                {/* Additional Tech */}
                {project.additionalTech && project.additionalTech.length > 0 && (
                    <Box sx={{mb: 3}}>
                        <Typography variant="h6" gutterBottom>
                            Additional Technologies Used
                        </Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap">
                            {project.additionalTech.map((tech) => {
                                const techInfo = getTechInfo(tech);
                                return (
                                    <TechChip key={tech} techInfo={techInfo}/>
                                );
                            })}
                        </Stack>
                    </Box>
                )}
                </Box>


                {/* Long Description */}
                {project.longDescription && (
                    <Box
                        sx={{
                            maxHeight: '400px',
                            overflowY: 'auto',
                            p: 2,
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 1,
                            backgroundColor: theme.palette.background.paper,
                        }}
                    >
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {project.longDescription}
                        </ReactMarkdown>
                    </Box>
                )}

            </DialogContent>
        </Dialog>
    );
};

export default ProjectDetails;