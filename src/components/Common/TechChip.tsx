import { Icon } from '@iconify/react';
import { Chip, Tooltip } from '@mui/material';
import React from 'react';
import { TechInfo } from '../../types/types.ts';

interface TechChipProps {
    link?: boolean;
    techInfo: TechInfo;
    selected?: boolean;
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const TechChip: React.FC<TechChipProps> = ({link = true, techInfo, selected, onClick}) => {
    return (
        <Tooltip title={techInfo.description} enterDelay={500} enterNextDelay={500}>
            <Chip
                label={techInfo.label}
                clickable
                component={link ? 'a' : 'div'}
                href={link ? techInfo.url : undefined}
                target={link ? '_blank' : undefined}
                rel={link ? 'noopener noreferrer' : undefined}
                icon={
                    <Icon icon={techInfo.icon} width="18" height="18" />
                }
                variant={selected ? 'filled' : 'outlined'}
                size="medium" // <--- slight size up
                sx={{
                    paddingX: 1,
                }}
                onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                    if (!link && onClick) {
                        e.stopPropagation();
                        onClick(e);
                    }
                }}
            />
        </Tooltip>
    )
};

export default TechChip;