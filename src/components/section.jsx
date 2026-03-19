import { Typography, Box, Paper } from "@mui/material";

const Section = ({ title, children }) => {
  return (
    <Box mb={4}>
      
      {/* Title */}
      <Typography
        variant="h6"
        sx={{ mb: 2, fontWeight: 600 }}
      >
        {title}
      </Typography>

      {/* Content Box (same for all sections) */}
      <Paper elevation={2} sx={{ p: 2 }}>
        {children}
      </Paper>

    </Box>
  );
};

export default Section;