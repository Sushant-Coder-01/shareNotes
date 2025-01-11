"use client";

import { db } from "@/lib/firebase";
import { Box, Button, TextField } from "@mui/material";
import { collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react";

const Notes = () => {
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("");

  const handleShare = async () => {
    if (!note.trim()) {
      setMessage("Please write something to share!");
      return;
    }

    try {
      collection(db, "note");

      await setDoc(doc(db, "data", crypto.randomUUID()), { data: note });

      setMessage("Message is stored successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      setMessage("Error sharing note. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="m-2 w-6/12 h-3/4"
      >
        <TextField
          color="primary"
          multiline
          rows={10}
          variant="standard"
          className="bg-gray-200 w-6/12 h-3/4 p-2"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write your note here"
          fullWidth
        />
      </Box>
      <Button variant="outlined" onClick={handleShare}>
        Share
      </Button>
      {message && <div>{message}</div>}
    </div>
  );
};

export default Notes;
