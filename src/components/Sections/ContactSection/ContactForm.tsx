import { Alert, Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const ContactForm: React.FC = () => {

    // Form state
    const [formValues, setFormValues] = useState({name: '', email: '', message: ''});
    const [errors, setErrors] = useState<{ [key: string]: string; }>({});

    const [succeeded, setSucceeded] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    // Check form fields for errors and missing values
    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formValues.name.trim()) newErrors.name = 'Name is required';
        if (!formValues.email.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(formValues.email)) newErrors.email = 'Email address is invalid';
        if (!formValues.message.trim()) newErrors.message = 'A message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    // Handle native form submission
    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Return if form is invalid
        if (!validate()) return;

        setSubmitting(true);

        try {
            const formData = new FormData();
            formData.append('name', formValues.name);
            formData.append('email', formValues.email);
            formData.append('message', formValues.message);

            // Submit the form to Formspree
            const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_FORM_ID}`, {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json'
                },
            });

            // Check reponse
            if (response.ok) {
                setSucceeded(true);
                setFormValues({email: '', message: '', name: ''});
                setErrors({});
            } else {
                const result = await response.json();
                console.error('Form submission error: ', result);
            }
        } catch (error) {
            console.error('Unexpected error submitting form: ', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Box
            component="form"
            noValidate
            onSubmit={onSubmit}
            sx={{
                maxWidth: 600,
                width: '100%',
                mx: 'auto',
                mt: 4,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                px: 2,
            }}
        >

            <TextField
                label="Name"
                name="name"
                required
                fullWidth
                value={formValues.name}
                variant="outlined"
                onChange={(e) => setFormValues({...formValues, name: e.target.value})}
                error={!!errors.name}
                helperText={errors.name}
            />

            <TextField
                label="Email"
                name="email"
                type="email"
                required
                fullWidth
                variant="outlined"
                value={formValues.email}
                onChange={(e) => setFormValues({...formValues, email: e.target.value})}
                error={!!errors.email}
                helperText={errors.email}
            />

            <TextField
                label="Message"
                name="message"
                required
                fullWidth
                multiline
                minRows={5}
                variant="outlined"
                value={formValues.message}
                onChange={(e) => setFormValues({...formValues, message: e.target.value})}
                error={!!errors.message}
                helperText={errors.message}
            />

            <Button
                type="submit"
                variant="contained"
                color="secondary"
                disabled={submitting}
            >
                {submitting ? 'Sending...' : 'Send Message'}
            </Button>

            {succeeded && (
                <Alert severity="success" sx={{mt: 4}}>
                    Thank you for your message! I will get back to you as soon as possible.
                </Alert>
            )}
        </Box>
    );
};

export default ContactForm;