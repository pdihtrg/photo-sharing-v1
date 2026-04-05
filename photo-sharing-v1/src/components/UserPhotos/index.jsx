import React from "react";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";
import { Typography } from "@mui/material";

function UserPhotos() {

  const { userId } = useParams();

  const photos = models.photoOfUserModel(userId);

  return (
    <div>

      {photos.map(photo => (

        <div key={photo._id} style={{ marginBottom: 40 }}>

          <img
            src={`/images/${photo.file_name}`}
            alt=""
            style={{ width: "400px" }}
          />

          <Typography>
            {new Date(photo.date_time).toLocaleString()}
          </Typography>

          {photo.comments && photo.comments.map(comment => (

            <div key={comment._id} style={{ marginLeft: 20 }}>

              <Typography variant="body2">
                <Link to={`/users/${comment.user._id}`}>
                  {comment.user.first_name} {comment.user.last_name}
                </Link>
              </Typography>

              <Typography variant="caption">
                {new Date(comment.date_time).toLocaleString()}
              </Typography>

              <Typography>
                {comment.comment}
              </Typography>

            </div>

          ))}

        </div>

      ))}

    </div>
  );
}

export default UserPhotos;