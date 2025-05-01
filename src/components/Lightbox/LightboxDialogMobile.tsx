import CloseIcon from '@mui/icons-material/Close';
import { Box, Dialog, DialogTitle, IconButton, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { LightboxImage } from '../../types/types.ts';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface LightboxDialogMobileProps {
    open: boolean;
    images: LightboxImage[];
    currentIndex: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}

const LightboxDialogMobile: React.FC<LightboxDialogMobileProps> = ({
                                                                       open,
                                                                       images,
                                                                       currentIndex,
                                                                       onClose,
                                                                       onPrev,
                                                                       onNext
                                                                   }) => {

    const theme = useTheme();
    const [showCaption, setShowCaption] = useState(false);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => onNext(),
        onSwipedRight: () => onPrev(),
        trackTouch: true,
        trackMouse: false
    });

    const toggleCaption = () => setShowCaption((prev) => !prev);

    return (
        <Dialog fullScreen open={open} onClose={onClose}>
            <DialogTitle
                sx={{
                    position: 'relative',
                    backgroundColor: theme.palette.background.default,
                }}
            >
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 16,
                        top: 16,
                        color: theme.palette.text.primary
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <Box
                {...swipeHandlers}
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: theme.palette.background.default
                }}
            >
                <Box
                    onClick={toggleCaption}
                    sx={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                    }}
                >
                    <TransformWrapper
                        initialScale={1}
                        minScale={1}
                        maxScale={3}
                        wheel={{disabled: true}}
                        doubleClick={{disabled: true}}
                        pinch={{disabled: false}}
                        panning={{disabled: false}}
                    >
                        <TransformComponent>
                            <img
                                src={images[currentIndex].url}
                                alt={images[currentIndex].caption || 'Project screenshot'}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain',
                                    borderRadius: '8px',
                                    cursor: 'pointer'
                                }}
                            />
                        </TransformComponent>
                    </TransformWrapper>
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: 0,
                        transform: 'translateY(-50%)',
                        zIndex: 1,
                    }}
                >
                    <IconButton onClick={onPrev} aria-label="Previous image">
                        <ArrowBackIosNewIcon />
                    </IconButton>
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        right: 0,
                        transform: 'translateY(-50%)',
                        zIndex: 1,
                    }}
                >
                    <IconButton onClick={onNext} aria-label="Next image">
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Box>


                {showCaption && images[currentIndex].caption && (
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            color: '#fff',
                            padding: 2,
                            textAlign: 'center'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Typography variant="body1">
                            {images[currentIndex].caption}
                        </Typography>
                    </Box>
                )}

            </Box>
        </Dialog>
    );
};

export default LightboxDialogMobile;