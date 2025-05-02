import { Box, useTheme } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface MorphModalProps {
    open: boolean;
    anchorRect: DOMRect | null;
    onClose: () => void;
    children: React.ReactNode
}

/**
 * MorphModal animates from a trigger element's screen position (via anchorRect)
 * into a centered, full-screen modal using framer-motion. This includes mobile-friendly
 * support for closing and scrolling.
 */
const MorphModal: React.FC<MorphModalProps> = ({open, anchorRect, onClose, children}) => {
    const theme = useTheme();
    const [viewport, setViewport] = useState({width: 0, height: 0});

    useEffect(() => {
        setViewport({width: window.innerWidth, height: window.innerHeight});
    }, []);

    if (!anchorRect) return null;   // NO anchor, NO clue where to animate from!

    // To animate TO the center of the viewport
    const centerX = viewport.width / 2;
    const centerY = viewport.height / 2;

    // To animate FROM the center of the anchor rectangle
    const originX = anchorRect.left + anchorRect.width / 2;
    const originY = anchorRect.top + anchorRect.height / 2;

    const initialScale = 0.1;

    return (
        <AnimatePresence>
            {open && (
                <Box
                    onClick={onClose}
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        zIndex: 1300,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        touchAction: 'manipulation' // Ensure tap gestures register (especially on iOS)
                    }}
                >
                    <motion.div
                        initial={{
                            scale: initialScale,
                            x: originX - centerX,
                            y: originY - centerY,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1,
                            x: 0,
                            y: 0,
                            opacity: 1,
                            transition: {duration: 0.4, ease: 'easeOut'},
                        }}
                        exit={{
                            scale: initialScale,
                            x: originX - centerX,
                            y: originY - centerY,
                            opacity: 0,
                            transition: {duration: 0.3, ease: 'easeIn'},
                        }}
                        onClick={(e) => e.stopPropagation()}  // Prevent click-through to backdrop
                        style={{
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: 8,
                            padding: 24,
                            maxWidth: 500,
                            width: '90%',
                            maxHeight: '90vh', // Prevent modal from growing beyond viewport height (esp. mobile)
                            overflowY: 'auto', // Allow scroll if content overflows
                            boxShadow: theme.shadows[5],
                            position: 'relative',
                            zIndex: 1400
                        }}
                    >
                        {children}
                    </motion.div>
                </Box>
            )}
        </AnimatePresence>
    );
};

export default MorphModal;