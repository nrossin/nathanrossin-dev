import React from 'react';
import SectionBox from './SectionBox.tsx';

const ContactSection: React.FC = () => {
    return (
        <SectionBox id="contact"
                    title="Contact Me"
                    subtitle="Let's work together!"
        >
            Contact form

        </SectionBox>
    );
};

export default ContactSection;