import React, { useState } from "react";

function App() {
  const [verse, setVerse] = useState("");

  const fetchRandomVerse = async () => {
    try {
      const response = await fetch("https://labs.bible.org/api/?passage=random&type=text");
      const text = await response.text();
      setVerse(text);
    } catch (error) {
      console.error("Error fetching the verse:", error);
      setVerse("Failed to fetch verse.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Bible Verse App</h1>
      <button onClick={fetchRandomVerse} style={{ padding: "10px 20px", margin: "10px" }}>
        Get Random Verse
      </button>
      <p>{verse}</p>
    </div>
  );
}

export default App;
