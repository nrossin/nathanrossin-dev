import { Icon } from '@iconify/react';
import { Chip, Tooltip, useTheme } from '@mui/material';
import React from 'react';
import { TechInfo } from '../../types/types.ts';

interface TechChipProps {
    link?: boolean;
    techInfo: TechInfo;
    selected?: boolean;
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const TechChip: React.FC<TechChipProps> = ({link = true, techInfo, selected, onClick}) => {

    const theme = useTheme();

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
                size="medium"
                sx={{
                    paddingX: 1,
                    // transition: 'background-color 0.5s ease-in-out, color 0.5s ease-in-out, border-color 0.5s ease-in-out', // Animate the light/dark transition
                    backgroundColor: selected ? theme.palette.secondary.contrastText : theme.palette.background.default,
                    color: selected ? theme.palette.primary.contrastText : theme.palette.text.primary
                }}
                onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

                    // Do not allow the click to bubble up to the parent component
                    e.stopPropagation();

                    // Normally, the TechChip will act as an <a href> link, opening a URL automatically. However,
                    // if this is not a link and provides its own `onClick()`, trigger that instead.
                    if (!link && onClick) {
                        onClick(e);
                    }
                }}

            />
        </Tooltip>
    )
};

export default TechChip;