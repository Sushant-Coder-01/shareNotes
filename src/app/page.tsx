import NoteCard from "@/components/NoteCard";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import React from "react";

const Home = async () => {
  const dbNotes = collection(db, "data");

  const notes = await getDocs(dbNotes);
  console.log(notes);
  const noteList = notes.docs.map((doc) => doc.data());

  return (
    <div>
      <NoteCard noteList={noteList} />
    </div>
  );
};

export default Home;
