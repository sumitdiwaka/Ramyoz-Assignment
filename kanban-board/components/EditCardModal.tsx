"use client";

import { useState } from "react";
import { Card } from "@/types";

interface EditCardModalProps {
  card: Card;
  onEdit: (id: string, title: string, description: string) => void;
  onClose: () => void;
}

const inputStyle = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 12,
  color: "white",
  width: "100%",
  padding: "10px 14px",
  fontSize: 14,
  outline: "none",
};

export default function EditCardModal({ card, onEdit, onClose }: EditCardModalProps) {
  const [title, setTitle] = useState(card.title);
  const [description, setDescription] = useState(card.description);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) { setError("Title is required!"); return; }
    onEdit(card.id, title.trim(), description.trim());
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}>
      <div className="w-full max-w-md rounded-2xl p-6"
        style={{ background: "rgba(30,15,60,0.97)", border: "1px solid rgba(255,255,255,0.15)" }}>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white font-bold text-lg">Edit Card</h2>
          <button onClick={onClose} className="text-white/40 hover:text-white text-xl leading-none">×</button>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-white/50 text-xs font-medium mb-1.5 block uppercase tracking-wider">
              Title <span className="text-red-400">*</span>
            </label>
            <input type="text" value={title} autoFocus
              onChange={(e) => { setTitle(e.target.value); setError(""); }}
              style={inputStyle}
            />
            {error && <p className="text-red-400 text-xs mt-1.5">{error}</p>}
          </div>

          <div>
            <label className="text-white/50 text-xs font-medium mb-1.5 block uppercase tracking-wider">
              Description
            </label>
            <textarea value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              style={{ ...inputStyle, resize: "none" }}
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button onClick={handleSubmit}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition"
            style={{ background: "rgba(251,191,36,0.3)", border: "1px solid rgba(251,191,36,0.5)" }}>
            Save Changes
          </button>
          <button onClick={onClose}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white/60 transition"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)" }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}