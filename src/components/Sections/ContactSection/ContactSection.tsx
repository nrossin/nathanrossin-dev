import { Box, Avatar, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import SectionBox from '../SectionBox.tsx';
import ContactForm from './ContactForm.tsx';

const ContactSection: React.FC = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <SectionBox id="contact"
                    title="Contact Me"
                    subtitle="Let's work together!">

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    mt: 6,
                    gap: isMobile ? 0 : 6,
                    flexWrap: 'wrap',
                }}
            >
                {/* Avatar */}
                <Avatar
                    src="/images/nathan_lego.png"
                    alt="Lego Nathan"
                    sx={{
                        width: isMobile ? 120 : 160,
                        height: isMobile ? 120 : 160,
                        flexShrink: 0,
                        alignSelf: 'center',
                    }}
                />

                {/* Contact Form */}
                <ContactForm isMobile={isMobile}/>
            </Box>
        </SectionBox>
    );
};

export default ContactSection;