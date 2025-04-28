import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Dialog, DialogContent, DialogTitle, Fade, IconButton, Typography, useTheme } from '@mui/material';
import React from 'react';

interface LightboxDialogProps {
    open: boolean;
    images: { url: string; caption?: string }[];
    currentIndex: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
    goTo: (index: number) => void; // Allow navigation via thumbnail
}

const LightboxDialog: React.FC<LightboxDialogProps> = ({
                                                           open,
                                                           images,
                                                           currentIndex,
                                                           onClose,
                                                           onPrev,
                                                           onNext,
                                                           goTo,
                                                       }) => {
    const theme = useTheme();

    return (
        <Dialog open={open}
                onClose={(_event, reason) => {
                    if (reason === 'escapeKeyDown') {
                        onClose();
                    }
                }}
                fullScreen>

            <DialogTitle
                sx={{
                    position: 'relative',
                    backgroundColor: theme.palette.background.default
                }}
            >
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 16,
                        top: 16,
                        color: theme.palette.text.primary,
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <Fade in={open} timeout={300}>
                <DialogContent
                    onClick={onClose}   // Close the dialog when clicking anywhere in the content
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: theme.palette.background.default,
                        padding: 4,
                    }}
                >
                    {/* Main Image */}
                    <Box
                        onClick={(e) => e.stopPropagation()}    // Prevent clicks from bubbling up and closing the dialog
                        sx={{
                            width: '100%',
                            maxWidth: 900,
                            display: 'flex',
                            justifyContent: 'center',
                            mb: 2,
                        }}
                    >
                        <img
                            src={images[currentIndex].url}
                            alt={images[currentIndex].caption || 'Project image'}
                            style={{
                                // height: 'auto',
                                maxWidth: '100%',
                                // maxHeight: 'calc(100vh - 200px)',   // Ensure the image scales down without being cropped; especially on rotated mobile devices
                                objectFit: 'contain',
                                borderRadius: '8px',
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                window.open(images[currentIndex].url, '_blank');
                            }}
                        />
                    </Box>

                    {/* Caption */}
                    {images[currentIndex].caption && (
                        <Typography
                            variant="body1"
                            maxWidth="80%"
                            color="text.secondary"
                            align="center"
                            sx={{mt: 2}}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {images[currentIndex].caption}
                        </Typography>
                    )}
                    {/* Navigation + Progress */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 2,
                            mb: 2,
                        }}
                    >
                        <IconButton onClick={(e) => {
                            e.stopPropagation();
                            onPrev();
                        }} color="primary">
                            <ArrowBackIosNewIcon />
                        </IconButton>
                        <Typography variant="body2" color="text.secondary" onClick={(e) => e.stopPropagation()}>
                            {currentIndex + 1} / {images.length}
                        </Typography>
                        <IconButton onClick={(e) => {
                            e.stopPropagation();
                            onNext();
                        }} color="primary">
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Box>

                    {/* Thumbnails Row */}
                    <Box
                        sx={{
                            display: 'flex',
                            overflowX: 'auto',
                            maxWidth: 900,
                            gap: 1,
                            mb: 2,
                        }}
                    >
                        {images.map((img, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    border: idx === currentIndex ? '2px solid' : '2px solid transparent',
                                    borderColor: idx === currentIndex ? 'primary.main' : 'transparent',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
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


                </DialogContent>
            </Fade>
        </Dialog>
    );
};

export default LightboxDialog;
