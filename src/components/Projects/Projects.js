import * as React from "react";
import {
  Box,
  Card,
  Chip,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Grid,
  Zoom,
} from "@mui/material";
import SectionTitle from "../../Pages/Home/AboutMe/SectionTitle";
import { projects } from "../../static/projects";

export default function Projects() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ flexGrow: 1, textAlign: "left", padding: "0.8rem" }}>
      <Box sx={{ marginBottom: "2rem", textAlign: "center" }}>
        <SectionTitle title="Projects" />
      </Box>

      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Zoom in timeout={500 + index * 100}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: 3,
                  position: "relative",
                  background: "linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 6px 24px rgba(0,0,0,0.15)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: -2,
                    left: -2,
                    right: -2,
                    bottom: -2,
                    zIndex: 0,
                    background: "linear-gradient(270deg, #1976d2, #42a5f5, #1976d2)",
                    backgroundSize: "600% 600%",
                    animation: "borderGlow 6s linear infinite",
                    borderRadius: 3,
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1,
                    background: "inherit",
                    borderRadius: 3,
                  },
                }}
              >
                {project.liveUrl && (
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      right: 16,
                      zIndex: 3,
                    }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundImage: "linear-gradient(90deg, #757575 0%, #bdbdbd 100%)",
                        color: "#fff",
                        fontWeight: 600,
                        textTransform: "none",
                        px: 2.5,
                        py: 0.5,
                        borderRadius: "8px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                        "&:hover": {
                          backgroundImage: "linear-gradient(90deg, #616161 0%, #9e9e9e 100%)",
                          color: "#ffffffc9",
                        },
                      }}
                    >
                      Visit Site
                    </Button>

                  </Box>
                )}

                {/* Optional Image */}
                  {project.image && (
                  <Box
                    component="img"
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    sx={{
                      width: "100%",
                      height: 250,
                      objectFit: "cover",
                      borderRadius: 2,
                      mb: 2,
                      boxShadow: 1,
                      zIndex: 2,
                      position: "relative",
                      transition: "transform 0.4s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                )}

                {/* Project Info */}
                <Box sx={{ position: "relative", zIndex: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                    {project.duration}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>

                  {/* Tech Stack */}
                  <Box>
                    <Typography variant="subtitle2">Tech Used:</Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                      {project.tech.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          variant="outlined"
                          sx={{ backgroundColor: "#e0e0e0" }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Zoom>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}