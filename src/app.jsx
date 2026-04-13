import React, { useState } from "react";

export default function App() {
  const [leads, setLeads] = useState([]);
  const [form, setForm] = useState({ name: "", company: "" });

  const addLead = () => {
    if (!form.name || !form.company) return;
    setLeads([...leads, form]);
    setForm({ name: "", company: "" });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Sales Tracker</h1>

      <input
        placeholder="Customer"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Company"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
      />
      <button onClick={addLead}>Add</button>

      <ul>
        {leads.map((l, i) => (
          <li key={i}>{l.name} - {l.company}</li>
        ))}
      </ul>
    </div>
  );
}
