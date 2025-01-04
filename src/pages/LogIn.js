import React, { useState } from 'react';
// import { useLoginUserMutation } from '../features/api/apiSlice';
import {
    Box,
    TextField,
    Button,
    Typography,
    Alert,
    CircularProgress,
    Container,
} from '@mui/material';

export default function LogIn() {
    // const [formData, setFormData] = useState({
    //     email: '',
    //     password: '',
    // });

    // const [loginUser, { isLoading, isSuccess, isError, error }] = useLoginUserMutation();

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await loginUser(formData).unwrap();
    //         alert(`Login successful! Welcome, ${response.name}`);
    //         localStorage.setItem('authToken', response.token); // Save JWT token for authentication
    //     } catch (err) {
    //         console.error('Login failed:', err);
    //     }
    // };

    return (
        <Container maxWidth="sm">
            <Box
                component="form"
                // onSubmit={handleSubmit}
                sx={{
                    mt: 4,
                    p: 4,
                    border: '1px solid #ccc',
                    borderRadius: 2,
                    boxShadow: 3,
                    backgroundColor: '#fff',
                }}
            > 

                <Typography variant="h4" gutterBottom textAlign="center">
                    Log In
                </Typography>

                {/* {isSuccess && (
                    <Alert severity="success" sx={{ mb: 2 }}>
                        Login successful! Redirecting...
                    </Alert>
                )}
                {isError && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error?.data?.message || 'Login failed. Check your credentials.'}
                    </Alert>
                )} */}

                <TextField
                    label="Email"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    type="email"
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Password"
                    name="password"
                    // value={formData.password}
                    // onChange={handleChange}
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
                >Sign in
                    {/* {isLoading ? <CircularProgress size={24} /> : 'Log In'} */}
                </Button>





            </Box>



        </Container>

    )
}
