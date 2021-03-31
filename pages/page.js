import React from "react";
import { useState } from "react";

export default function page() {
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  console.log(email);
  return (
    <div style={{ margin: 100 }}>
      <input
        className="input"
        placeholder="shit"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
        <input
        className="input"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}
