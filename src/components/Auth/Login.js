import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Avatar,
  Grid,
  InputAdornment,
  IconButton,
  CircularProgress,
  Fade,
} from '@mui/material';
import {
  Construction,
  Visibility,
  VisibilityOff,
  Business,
  Person,
  Lock,
} from '@mui/icons-material';
import MainLayout from '../Layout/MainLayout';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (formData.username === 'contractor1' && formData.password === 'contractor123') {
        localStorage.setItem('user', JSON.stringify({
          username: formData.username,
          role: 'contractor',
          name: 'John Doe'
        }));
        navigate('/dashboard');
      } else {
        setError('Invalid username or password. Try: contractor1 / contractor123');
        setLoading(false);
      }
    }, 1000);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <MainLayout showHeader={false}>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Fade in timeout={1000}>
            <Paper
              elevation={24}
              sx={{
                p: 5,
                borderRadius: 4,
                backdropFilter: 'blur(20px)',
                background: 'rgba(255, 255, 255, 0.95)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                },
              }}
            >
              <Box textAlign="center" mb={4}>
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    width: 90,
                    height: 90,
                    margin: '0 auto 20px',
                    boxShadow: '0 8px 20px rgba(102,126,234,0.3)',
                  }}
                >
                  <Construction sx={{ fontSize: 50 }} />
                </Avatar>
                <Typography
                  variant="h4"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Sengila Construction
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Contractor Management Portal
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Department of Public Works
                </Typography>
              </Box>

              {error && (
                <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
                  {error}
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  margin="normal"
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    },
                  }}
                />
                
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  margin="normal"
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock color="primary" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    },
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={loading}
                  sx={{
                    mt: 4,
                    mb: 3,
                    py: 1.5,
                    borderRadius: 2,
                    fontSize: '1rem',
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 5px 20px rgba(102,126,234,0.4)',
                    },
                  }}
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : 'Login to Dashboard'}
                </Button>

                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        p: 2,
                        bgcolor: '#f8f9fa',
                        borderRadius: 2,
                        textAlign: 'center',
                      }}
                    >
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        <Business sx={{ fontSize: 14, verticalAlign: 'middle', mr: 0.5 }} />
                        Demo Credentials
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Username: <strong>contractor1</strong> | Password: <strong>contractor123</strong>
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </form>

              <Box mt={4} textAlign="center">
                <Typography variant="caption" color="text.secondary">
                  ? 2024 Sengila Construction Management Platform
                </Typography>
              </Box>
            </Paper>
          </Fade>
        </Container>
      </Box>
    </MainLayout>
  );
};

export default Login;
