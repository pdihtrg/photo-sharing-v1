import React from "react";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";
import { Typography, Button } from "@mui/material";

function UserDetail() {

  const { userId } = useParams();

  const user = models.userModel(userId);

  return (
    <div>

      <Typography variant="h5">
        {user.first_name} {user.last_name}
      </Typography>

      <Typography>Location: {user.location}</Typography>
      <Typography>Occupation: {user.occupation}</Typography>
      <Typography>Description: {user.description}</Typography>

      <Button
        component={Link}
        to={`/photos/${user._id}`}
        variant="contained"
        sx={{ marginTop: 2 }}
      >
        View Photos
      </Button>

    </div>
  );
}

export default UserDetail;