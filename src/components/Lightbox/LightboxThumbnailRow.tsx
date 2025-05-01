import { Box } from '@mui/material';
import React from 'react';
import { LightboxImage } from '../../types/types.ts';

interface LightboxThumbnailRowProps {
    images: LightboxImage[];
    currentIndex: number;
    goTo: (index: number) => void;
}

/**
 * LightboxThumbnailRow:
 * Displays a horizontal row of image thumbnails.
 * Clicking a thumbnail switches to that image in the lightbox.
 */
const LightboxThumbnailRow: React.FC<LightboxThumbnailRowProps> = ({
                                                                       images, currentIndex, goTo
                                                                   }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                overflowX: 'auto',
                maxWidth: 900,
                gap: 1,
                mt: 2,
                pb: 1
            }}
            onClick={(e) => e.stopPropagation()}
        >
            {/*Create gallery of images*/}
            {images.map((img, idx) => (
                <Box
                    key={idx}
                    sx={{
                        border: idx === currentIndex ? '2px solid' : '2px solid transparent',
                        borderColor: idx === currentIndex ? 'primary.main' : 'transparent',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        flexShrink: 0
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        goTo(idx);
                    }}
                >
                    <img
                        src={img.url}
                        alt={img.caption || ''}
                        style={{
                            height: '60px',
                            width: 'auto',
                            borderRadius: '4px',
                        }}
                    />
                </Box>
            ))}
        </Box>
    );
};

export default LightboxThumbnailRow;