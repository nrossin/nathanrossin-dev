import { Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

interface ElephantExplanationProps {
    onClose?: () => void;
}

/**
 * A brief, lighthearted message explaining the developer-oriented focus of the site.
 * Optionally includes a close button for use in modals.
 */
const ElephantExplanation: React.FC<ElephantExplanationProps> = ({ onClose }) => {
    return (
        <Box>
            {onClose && (
                <IconButton
                    onClick={onClose}
                    sx={{ position: 'absolute', top: 8, right: 8 }}
                    aria-label="Close"
                >
                    <CloseIcon />
                </IconButton>
            )}

            <Typography variant="h4" gutterBottom>
                🐘 About the Elephant ...
            </Typography>

            <Typography variant="body1" sx={{mt: 2}}>
                This portfolio was built by a software engineer, not a professional designer. My focus was on creating
                something functional, maintainable, responsive, and representative of how I approach building software.
            </Typography>

            <Typography variant="body1" sx={{mt: 2}}>
                There is another elephant in the room, too: I use AI tools, including ChatGPT, as part of my development
                workflow. I use them to explore ideas, challenge assumptions, troubleshoot problems, and accelerate work
                where they are useful.
            </Typography>

            <Typography variant="body1" sx={{mt: 2}}>
                AI does not replace understanding or engineering judgment. I review and adapt what it produces, make the
                implementation decisions myself, and remain responsible for the code I ship. For me, it is another tool
                for solving problems more effectively.
            </Typography>

            <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
                Thank you for taking the time to look beyond the elephant!
            </Typography>
        </Box>
    );
};

export default ElephantExplanation;
