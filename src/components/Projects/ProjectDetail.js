import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
  CircularProgress,
} from '@mui/material';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadProject = useCallback(async () => {
    const mockProjects = {
      1: {
        id: 1,
        project_code: 'SCH001',
        school_name: 'Thuto Tsebo Secondary School',
        location: '123 Main Street, Johannesburg',
        description: 'Construction of new classroom block',
        budget: 5000000,
        current_expenditure: 2250000,
        start_date: '2024-01-01',
        end_date: '2024-12-31',
        status: 'active',
        health_status: 'green',
        overall_progress: 45,
        overall_compliance: 85,
      },
      2: {
        id: 2,
        project_code: 'SCH002',
        school_name: 'Sunrise Primary School',
        location: '456 Oak Avenue, Pretoria',
        description: 'Construction of new library',
        budget: 3500000,
        current_expenditure: 1050000,
        start_date: '2024-02-01',
        end_date: '2024-11-30',
        status: 'active',
        health_status: 'yellow',
        overall_progress: 30,
        overall_compliance: 75,
      }
    };
    setProject(mockProjects[id] || null);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    loadProject();
  }, [loadProject]);

  if (loading) {
    return <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh"><CircularProgress /></Box>;
  }

  if (!project) {
    return <Container><Typography>Project not found</Typography><Button onClick={() => navigate('/dashboard')}>Back</Button></Container>;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Button variant="outlined" onClick={() => navigate('/dashboard')} sx={{ mb: 2 }}>? Back</Button>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>{project.school_name}</Typography>
        <Typography color="textSecondary">{project.project_code}</Typography>
        <Typography variant="body1" paragraph>{project.description}</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}><Typography><strong>Location:</strong> {project.location}</Typography></Grid>
          <Grid item xs={12} sm={6}><Typography><strong>Status:</strong> <Chip label={project.status.toUpperCase()} color={project.status === 'active' ? 'success' : 'default'} size="small" /></Typography></Grid>
          <Grid item xs={12} sm={6}><Typography><strong>Start Date:</strong> {project.start_date}</Typography></Grid>
          <Grid item xs={12} sm={6}><Typography><strong>End Date:</strong> {project.end_date}</Typography></Grid>
        </Grid>
      </Paper>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card><CardContent><Typography variant="h6">Progress</Typography><Typography variant="h2" align="center" color="primary">{project.overall_progress}%</Typography></CardContent></Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card><CardContent><Typography variant="h6">Budget</Typography><Typography variant="h4" color="primary">R {project.current_expenditure.toLocaleString()}</Typography><Typography variant="body2">of R {project.budget.toLocaleString()}</Typography></CardContent></Card>
        </Grid>
      </Grid>
      <Button variant="contained" size="large" fullWidth sx={{ mt: 3 }} onClick={() => alert('Daily diary form would open here')}>Submit Daily Diary</Button>
    </Container>
  );
};

export default ProjectDetail;
