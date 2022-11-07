import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{
            backgroundColor: "#1e272e",
            padding: "1rem",
          }}
        >
          <Typography variant="5" textAlign="center" color="white">
            Create Task
          </Typography>
          <CardContent>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ".25rem",
              }}
              onSubmit={handleSubmit}
            >
              <TextField
                variant="filled"
                label="Write your title"
                onChange={handleChange}
                name="title"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "1rem",
                }}
                inputProps={{ style: { color: "white", marginTop: "1rem" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                variant="filled"
                label="Write your description"
                multiline
                name="description"
                rows={4}
                onChange={handleChange}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "1rem",
                }}
                inputProps={{ style: { color: "white", marginTop: "1rem" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <Button variant="contained" color="primary" type="submit">
                Save
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
