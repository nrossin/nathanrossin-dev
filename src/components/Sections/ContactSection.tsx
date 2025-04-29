import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import SectionBox from './SectionBox.tsx';

const ContactSection: React.FC = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });



    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    return (
        <SectionBox id="contact"
                    title="Contact Me"
                    subtitle="Let's work together!"
        >
            <Box
                id="contact"
                sx={{
                    maxWidth: 600,
                    mx: 'auto',
                    py: 8,
                    textAlign: 'center'
                }}
            >
                <form
                    action="https://formspree.io/f/yourFormID" // <-- your form endpoint
                    method="POST"
                >
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                        fullWidth
                    >
                        Send Message
                    </Button>
                </form>
            </Box>

        </SectionBox>
    );
};

export default ContactSection;