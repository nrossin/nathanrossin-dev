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
                So... this site may not be the most dazzling piece of web design you’ve ever seen.
                I’m okay with that. I’m a developer, not a designer — and this portfolio is here to
                highlight clean architecture, real functionality, and the kind of code that holds up under pressure.
            </Typography>

            <Typography variant="body1" sx={{mt: 2}}>
                And since we’re being honest: yes, I’ve collaborated with AI — specifically ChatGPT —
                while building this site. I’ve used it as a thinking partner, a code assistant, and an occasional sanity check.
            </Typography>

            <Typography variant="body1" sx={{mt: 2}}>
                But here’s the key: I don’t just copy and paste. Every suggestion is reviewed, retyped, adapted,
                and often refactored entirely. AI is a great accelerator — not a replacement for experience, judgment, or a good pair of eyes.
            </Typography>

            <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
                Thanks for checking out the site — and for focusing on the craft that really counts.
            </Typography>
        </Box>
    );
};

export default ElephantExplanation;
