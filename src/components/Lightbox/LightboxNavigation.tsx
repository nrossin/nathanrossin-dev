import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface LightboxNavigationProps {
    currentIndex: number;
    totalImages: number;
    onPrev: () => void;
    onNext: () => void;
}

/**
 * LightboxNavigation:
 * Renders navigation controls (Previous, Next) and a progress indicator
 * for the Lightbox image set.
 */
const LightboxNavigation: React.FC<LightboxNavigationProps> = ({
                                                                   currentIndex, totalImages, onPrev, onNext
                                                               }) => {
    return (
        <Box
            sx={{
                mt: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2
            }}
            onClick={(e) => e.stopPropagation()}
        >

            {/*PREVIOUS Button*/}
            <IconButton onClick={onPrev} color="primary" aria-label="Previous Image">
                <ArrowBackIosNewIcon />
            </IconButton>

            {/*Navigation Progress*/}
            <Typography variant="body2" color="text.primary">
                {currentIndex + 1} / {totalImages}
            </Typography>

            {/*NEXT Button*/}
            <IconButton onClick={onNext} color="primary" aria-label="Next Image">
                <ArrowForwardIosIcon />
            </IconButton>
        </Box>
    );
};

export default LightboxNavigation;