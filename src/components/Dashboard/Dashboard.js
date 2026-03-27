import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CircularProgress,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    completed: 0,
    onHold: 0,
  });

  useEffect(() => {
    const mockProjects = [
      {
        id: 1,
        project_code: 'SCH001',
        school_name: 'Thuto Tsebo Secondary School',
        location: '123 Main Street, Johannesburg',
        status: 'active',
        health_status: 'green',
        overall_progress: 45,
        start_date: '2024-01-01',
        end_date: '2024-12-31',
      },
      {
        id: 2,
        project_code: 'SCH002',
        school_name: 'Sunrise Primary School',
        location: '456 Oak Avenue, Pretoria',
        status: 'active',
        health_status: 'yellow',
        overall_progress: 30,
        start_date: '2024-02-01',
        end_date: '2024-11-30',
      },
    ];
    setProjects(mockProjects);
    
    const statsData = {
      total: mockProjects.length,
      active: mockProjects.filter(p => p.status === 'active').length,
      completed: mockProjects.filter(p => p.status === 'completed').length,
      onHold: mockProjects.filter(p => p.status === 'on_hold').length,
    };
    setStats(statsData);
    setLoading(false);
  }, []);

  const getHealthColor = (status) => {
    switch(status) {
      case 'green': return '#4caf50';
      case 'yellow': return '#ff9800';
      case 'red': return '#f44336';
      default: return '#9e9e9e';
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome, Contractor
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Total Projects</Typography>
              <Typography variant="h3">{stats.total}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Active Projects</Typography>
              <Typography variant="h3" color="primary">{stats.active}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Completed</Typography>
              <Typography variant="h3" color="success.main">{stats.completed}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>On Hold</Typography>
              <Typography variant="h3" color="warning.main">{stats.onHold}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Your Projects
      </Typography>
      
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.id}>
            <Card>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                  <Box>
                    <Typography variant="h6" gutterBottom>{project.school_name}</Typography>
                    <Typography color="textSecondary" gutterBottom>{project.project_code}</Typography>
                    <Typography variant="body2" color="textSecondary">{project.location}</Typography>
                  </Box>
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: getHealthColor(project.health_status) }} />
                </Box>
                
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2">Progress: {project.overall_progress}%</Typography>
                  <Box sx={{ width: '100%', height: 8, bgcolor: '#e0e0e0', borderRadius: 4, mt: 1 }}>
                    <Box sx={{ width: project.overall_progress + '%', height: 8, bgcolor: getHealthColor(project.health_status), borderRadius: 4 }} />
                  </Box>
                </Box>
                
                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
                  <Typography variant="caption" color="textSecondary">Start: {project.start_date}</Typography>
                  <Typography variant="caption" color="textSecondary">End: {project.end_date}</Typography>
                </Box>
                
                <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={() => navigate('/projects/' + project.id)}>
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;
