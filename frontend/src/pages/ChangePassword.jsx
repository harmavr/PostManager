import React from "react";
import SaveIcon from "@mui/icons-material/Save";

export default function ChangePassword() {
  return (
    <div>
      <h1>Change your password</h1>
      <input type="text" placeholder="Old password" />
      <input type="text" name="" id="" placeholder="New password" />
      <SaveIcon />
    </div>
  );
}
