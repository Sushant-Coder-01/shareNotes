import { Card, CardContent, Typography } from "@mui/material";
import { DocumentData } from "firebase/firestore";
import React from "react";

type Props = {
  noteList: DocumentData[];
};

const NoteCard = ({ noteList }: Props) => {
  return (
    <React.Suspense fallback={"Loading ...."}>
      {noteList.map((note) => {
        return (
          <div className="m-5" key={note.data}>
            <Card className="w-1/4">
              <CardContent>
                <Typography>
                  <h1>{note.data}</h1>
                </Typography>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </React.Suspense>
  );
};

export default NoteCard;
