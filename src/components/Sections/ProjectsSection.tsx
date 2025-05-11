import { Box, Fade, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Projects as projects } from "../../data/projects.ts";
import ProjectCard from '../Projects/ProjectCard.tsx';
import TechFilterBar from '../Projects/TechFilterBar.tsx';
import SectionBox from './SectionBox.tsx';

const ProjectsSection: React.FC = () => {

    console.log(JSON.stringify(projects));

    // Track selected tech in order to filter projects
    const [selectedTech, setSelectedTech] = useState<string | null>(null);

    // Build a unique sorted list of all tech used in projects
    const allTechs = Array.from(
        new Set(
            projects.flatMap((project) =>
                project.techStack.map((tech) => tech))
        )
    ).sort();

    // Filter projects based on the selected tech
    const filteredProjects = selectedTech
        ? projects.filter((project) =>
            project.techStack
                .map((tech) => tech)
                .includes(selectedTech)
        )
        : projects;

    return (
        <SectionBox id="projects"
                    title="Solo Projects"
        >
            <Typography variant="h6" sx={{m: 4}}>
                The applications listed here are the professional and personal projects on which I was the sole
                developer.
                They are listed (roughly) in the order in which they were created, though several of them are still in
                active use today.
            </Typography>

            {/*Tech Filter Bar*/}
            <TechFilterBar
                techList={allTechs}
                selectedTech={selectedTech}
                onSelectTech={setSelectedTech}
            />

            <Grid container spacing={4} justifyContent="center">
                {filteredProjects.map((project, index) => (
                    <Grid key={index}
                          size={{
                              xs: 12,
                              sm: 6,
                              md: 4,
                              lg: 4
                          }}
                          sx={{
                              display: 'flex',
                              justifyContent: 'center',
                              minWidth: 400
                          }}
                    >
                        <Fade
                            in={true}
                            timeout={300}
                        >
                            <Box sx={{width: '100%', maxWidth: 400}}>
                                <ProjectCard project={project} />
                            </Box>
                        </Fade>
                    </Grid>
                ))}
            </Grid>

        </SectionBox>
    );
};

export default ProjectsSection;