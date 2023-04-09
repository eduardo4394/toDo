import { Button, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "../config";

export default function TaskList() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setTasks(data);
  };

  const handleDelete = async (id) => {
    try {
      const resp = await fetch(`${URL}/tasks/${id}`, {
        method: "DELETE",
      });
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);
  return (
    <>
      <h1>Tasks List</h1>
      {tasks?.map((task) => {
        return (
          <Card
            key={task.id}
            style={{
              marginBottom: "0.75rem",
              backgroundColor: "#1e272e",
              color: "white",
            }}
          >
            <CardContent
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <Typography>{task.title}</Typography>
                <Typography>{task.description}</Typography>
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => navigate(`/tasks/${task.id}/edit`)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}
