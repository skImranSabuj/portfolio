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
                  background: `linear-gradient(
                                  to bottom right,
                                  #000000 0%,
                                  #0d1a13 20%,
                                  #163024 40%,
                                  #1f4633 60%,
                                  #2f6b4a 80%,
                                  #e8f5f0 95%,
                                  #ffffff 100%
                                )`,

                  color: "#fff",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  overflow: "hidden",
                  transition: "transform 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
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
                    background:
                      "linear-gradient(270deg, #1976d2, #42a5f5, #1976d2)",
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
                      boxShadow: "0 0 12px rgba(0,255,0,0.1)",
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
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", mb: 1, color: "#a5f3fc" }}
                    >
                      {project.title}
                    </Typography>
                    {/* Visit Button at bottom */}
                    {project.liveUrl && (
                      <Box sx={{ mt: "auto", textAlign: "center" }}>
                        <Button
                          variant="contained"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            backgroundImage:
                              "linear-gradient(90deg, #00ff99, #00cc66)",
                            color: "#0f0f0f",
                            fontWeight: 600,
                            textTransform: "none",
                            px: { xs: 2, sm: 3 },
                            py: { xs: 0.5, sm: 1 },
                            fontSize: { xs: 12, sm: 14, md: 16 },
                            borderRadius: "8px",
                            boxShadow: "0 2px 6px rgba(0,255,0,0.3)",
                            "&:hover": {
                              backgroundImage:
                                "linear-gradient(90deg, #00cc66, #00994d)",
                              color: "#000",
                            },
                          }}
                        >
                          Visit Site
                        </Button>
                      </Box>
                    )}
                  </Box>

                  <Typography
                    variant="subtitle2"
                    sx={{ mb: 1, color: "#81e6d9" }}
                  >
                    {project.duration}
                  </Typography>

                  <Typography variant="body2" sx={{ mb: 2, color: "#e0f2f1" }}>
                    {project.description}
                  </Typography>

                  {/* Tech Stack */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2">Tech Used:</Typography>
                    <Box
                      sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}
                    >
                      {project.tech.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          variant="outlined"
                          sx={{
                            backgroundColor: "#1de9b6",
                            color: "#0f2027",
                            fontWeight: 500,
                            border: "none",
                          }}
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
