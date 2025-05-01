import { Box } from '@mui/material';
import React from 'react';
import { LightboxImage } from '../../types/types.ts';

interface LightboxImageContainerProps {
    image: LightboxImage;
}

/**
 * LightboxImageContainer:
 * Displays a responsive image inside the Lightbox, anchored to the bottom of its container.
 * - Preserves image aspect ratio
 * - Prevents upscaling beyond natural size
 * - Opens full image in a new tab when clicked
 */
const LightboxImageContainer: React.FC<LightboxImageContainerProps> = ({image}) => {
    return (

        <Box
            sx={{
                flexGrow: 1,
                width: '100%',
                maxWidth: '100%',
                maxHeight: '65vh',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
        >

            <img
                src={image.url}
                alt={image.caption || 'Project screen'}
                style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    cursor: 'pointer'
                }}
                onClick={(e) => {
                    e.stopPropagation();
                    window.open(image.url, '_blank');
                }}
            />
        </Box>
    );
};

export default LightboxImageContainer;