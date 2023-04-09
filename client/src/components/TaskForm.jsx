import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { URL } from "../config";

export default function TaskForm() {
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const loadTask = async (id) => {
    const res = await fetch(`${URL}/tasks/${id}`);
    const data = await res.json();

    setTask({ title: data.title, description: data.description });
    setEditing(true);
  };

  useEffect(() => {
    if (params.id) {
      loadTask(params.id);
    }
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (editing) {
      await fetch(`${URL}/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" },
      });
    } else {
      await fetch(`${URL}/tasks`, {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" },
      });
    }
    setLoading(false);
    navigate("/");
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
          <Typography variant="h5" textAlign="center" color="white">
            {editing ? "Edit Task" : "Create Task"}
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
                value={task.title}
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
                value={task.description}
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
              <Button
                style={{ display: "flex", margin: "auto" }}
                variant="contained"
                color="primary"
                type="submit"
                disabled={!task.title || !task.description}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  "Save"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
