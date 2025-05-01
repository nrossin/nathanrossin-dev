import { Typography } from '@mui/material';
import React from 'react';

interface LightboxCaptionProps {
    caption?: string;
}

/**
 * LightboxCaption:
 * Renders the caption text below the image, if provided.
 * Auto-skips rendering if caption is not defined.
 */
const LightboxCaption: React.FC<LightboxCaptionProps> = ({caption}) => {

    // Skip rendering if there is no caption.
    if (!caption) return null;

    return (
        <Typography
            variant="body1"
            maxWidth="80%"
            color="text.secondary"
            align="center"
            sx={{mt: 2}}
            onClick={(e) => e.stopPropagation()}
        >
            {caption}
        </Typography>
    );
};

export default LightboxCaption;
