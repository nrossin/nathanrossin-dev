import { Box, Tooltip } from '@mui/material';
import React, { useRef, useState } from 'react';
import ElephantExplanation from './ElephantExplanation';
import MorphModal from './MorphModal';

const ElephantTrigger: React.FC = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
    const iconRef = useRef<HTMLDivElement | null>(null);

    const handleClick = () => {

        // Use the elephant icon as the anchor/origin point
        if (iconRef.current) {
            const rect = iconRef.current.getBoundingClientRect();
            setAnchorRect(rect);
            setModalOpen(true);
        }
    }

    return (
        <>
            <Tooltip title="The Elephant in the Room">
                {/*Elephant Icon*/}
                <Box
                    ref={iconRef}
                    component="img"
                    src="/images/elephant.png"
                    alt="Elephant in the room"
                    onClick={handleClick}
                    sx={{
                        position: 'absolute',
                        top: 78,
                        right: 24,
                        width: 48,
                        height: 'auto',
                        cursor: 'pointer',
                        opacity: '0.25', // This is a sneaky elephant
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'scale(2)'
                        }
                    }}
                />
            </Tooltip>

            {/*Modal*/}
            <MorphModal open={modalOpen} anchorRect={anchorRect} onClose={() => setModalOpen(false)}>
                <ElephantExplanation />
            </MorphModal>
        </>
    );
};

export default ElephantTrigger;