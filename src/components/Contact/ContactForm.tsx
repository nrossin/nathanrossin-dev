import { useForm } from '@formspree/react';
import { Alert, Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const ContactForm: React.FC = () => {

    // Formspree useForm hook
    const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_FORM_ID);

    // Form state
    const [formValues, setFormValues] = useState({name: '', email: '', message: ''});
    const [errors, setErrors] = useState<{ [key: string]: string; }>({});

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

    // Validate form values prior to submission
    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            // @ts-expect-error as Formspree is not type safe
            await handleSubmit(e);
        }
    };

    // Form has been submitted successfully, thank the nice people! :)
    // Note that the form does not reset after submission and the useForm hook does not expose a method to modify
    // `state.succeeded` directly. While a workaround with a keyed parent could be used, for simplicity, I am leaving
    // this as-is (requiring a page reload if a second message is really needed).
    if (state.succeeded) {
        return (
            <Alert severity="success" sx={{mt: 4}}>
                Thank you for your message! I will get back to you as soon as possible.
            </Alert>
        );
    }

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
                disabled={state.submitting}
            >
                {state.submitting ? 'Sending...' : 'Send Message'}
            </Button>
        </Box>
    );
};

export default ContactForm;