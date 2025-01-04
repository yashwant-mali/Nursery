import React, { useState } from 'react';
import { useSignUpUserMutation } from '../features/api/apiSlice';
import {
    Box,
    TextField,
    Button,
    Typography,
    Alert,
    CircularProgress,
    Container,
} from '@mui/material';
import LogIn from './LogIn';

const SignUp = () => {
    const [formData, setFormData] = useState({ nurseryName: '', name: '', mobileNo: '', email: '', password: '' });

    // const [signUpUser, { isLoading, isSuccess, isError, error }] = useSignUpUserMutation();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // console.log("from handlechange"+formData)
    };

    const handleSubmit =  async (e) => {
        e.preventDefault();
        try {
            // await signUpUser(formData).unwrap();
          console.log(formData.name,formData.email, formData.password, formData.nurseryName,formData.mobileNo)
            alert('Sign-up successful!');
        } catch (err) {
            console.error('Sign-up failed:', err);
        }
    };


    return (
        <Container maxWidth="sm">
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    mt: 4,
                    p: 4,
                    border: '1px solid #ccc',
                    borderRadius: 2,
                    boxShadow: 3,
                    backgroundColor: '#fff',
                }}>
                <Typography variant="h4" gutterBottom textAlign="center">
                    Sign Up
                </Typography>

                {/* {isSuccess && (
                    <Alert severity="success" sx={{ mb: 2 }}>
                        Sign-up successful! Please verify your email.
                    </Alert>
                )}
                {isError && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error?.data?.message || 'Sign-up failed. Try again.'}
                    </Alert>
                )} */}

                <TextField
                    label="Nursery Name"
                    name="nurseryName"
                    value={formData.nurseryName}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Owner Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Mobile Number"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    type="tel"
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    type="password"
                    fullWidth
                    required
                    margin="normal"
                />

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2, py: 1.5 }}
                // disabled={isLoading}
                >
                    {/* {isLoading ? <CircularProgress size={24} /> : 'Sign Up'}   */}
                    Sign up</Button>

            </Box>

        </Container>

       
    )

};

export default SignUp;
