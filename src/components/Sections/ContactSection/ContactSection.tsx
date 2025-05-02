import React from 'react';
import ContactForm from '../ContactSection/ContactForm.tsx';
import SectionBox from '../SectionBox.tsx';

const ContactSection: React.FC = () => {

    return (
        <SectionBox id="contact"
                    title="Contact Me"
                    subtitle="Let's work together!">
            <ContactForm />
        </SectionBox>
    );
};

export default ContactSection;