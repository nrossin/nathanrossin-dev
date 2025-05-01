import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle, IconButton, useTheme } from '@mui/material';
import React from 'react';
import { LightboxImage } from '../../types/types.ts';
import LightboxCaption from './LightboxCaption.tsx';
import LightboxImageContainer from './LightboxImageContainer.tsx';
import LightboxNavigation from './LightboxNavigation.tsx';
import LightboxThumbnailRow from './LightboxThumbnailRow.tsx';

interface LightboxDialogDesktopProps {
    open: boolean;
    images: LightboxImage[];
    currentIndex: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
    goTo: (index: number) => void;
}

/**
 * LightboxDialogDesktop:
 * A responsive, full-screen image viewer for desktop devices.
 * Supports navigation between images, caption display, and thumbnail previews.
 *
 * Layout Summary:
 * - Image fills available space and grows upward
 * - Caption, nav controls, and thumbnail row are anchored to the bottom
 * - Layout adapts to image size without collapsing key UI elements
 */
const LightboxDialogDesktop: React.FC<LightboxDialogDesktopProps> = ({
                                                                         open,
                                                                         images,
                                                                         currentIndex,
                                                                         onClose,
                                                                         onPrev,
                                                                         onNext,
                                                                         goTo
                                                                     }) => {
    const theme = useTheme();
    const currentImage = images[currentIndex];

    return (
        <Dialog open={open}
                onClose={(_, reason) => {
                    if (reason === 'escapeKeyDown') onClose();
                }}
                fullScreen
        >

            {/*Title bar with close button*/}
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
                        color: theme.palette.text.primary,
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            {/*Content Area*/}
            <DialogContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    height: '100%',
                    padding: 4,
                    backgroundColor: theme.palette.background.default,
                    boxSizing: 'border-box',
                    overflowY: 'auto'
                }}
            >

                <LightboxImageContainer image={currentImage} />
                <LightboxCaption caption={currentImage.caption} />
                <LightboxNavigation currentIndex={currentIndex}
                                    totalImages={images.length}
                                    onPrev={onPrev}
                                    onNext={onNext} />
                <LightboxThumbnailRow images={images}
                                      currentIndex={currentIndex}
                                      goTo={goTo} />
            </DialogContent>
        </Dialog>

    );
};

export default LightboxDialogDesktop;