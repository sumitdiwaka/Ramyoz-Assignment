"use client";

import { useState } from "react";
import { Card as CardType } from "@/types";
import EditCardModal from "./EditCardModal";

interface CardProps {
  card: CardType;
  onMove: (id: string, direction: "forward" | "backward") => void;
  onEdit: (id: string, title: string, description: string) => void;
  onDelete: (id: string) => void;
}

export default function Card({ card, onMove, onEdit, onDelete }: CardProps) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  return (
    <>
      <div className="group rounded-xl p-4 transition-all duration-200 cursor-default"
        style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
        onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
        onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
      >
        <h3 className="font-semibold text-white text-sm mb-1 break-words leading-snug">
          {card.title}
        </h3>
        <p className="text-white/50 text-xs mb-4 break-words leading-relaxed line-clamp-2">
          {card.description || "No description provided."}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-2">
          {card.status !== "pending" && (
            <button onClick={() => onMove(card.id, "backward")}
              className="text-xs px-3 py-1.5 rounded-lg font-medium text-white/70 transition hover:text-white"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
              ← Back
            </button>
          )}
          {card.status !== "completed" && (
            <button onClick={() => onMove(card.id, "forward")}
              className="text-xs px-3 py-1.5 rounded-lg font-medium text-indigo-200 transition"
              style={{ background: "rgba(99,102,241,0.25)", border: "1px solid rgba(99,102,241,0.4)" }}>
              Next →
            </button>
          )}
          <button onClick={() => setShowEditModal(true)}
            className="text-xs px-3 py-1.5 rounded-lg font-medium text-amber-200 transition"
            style={{ background: "rgba(251,191,36,0.15)", border: "1px solid rgba(251,191,36,0.3)" }}>
            Edit
          </button>
          <button onClick={() => setShowDeleteConfirm(true)}
            className="text-xs px-3 py-1.5 rounded-lg font-medium text-red-300 transition"
            style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)" }}>
            Delete
          </button>
        </div>
      </div>

      {showEditModal && <EditCardModal card={card} onEdit={onEdit} onClose={() => setShowEditModal(false)} />}

      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}>
          <div className="w-full max-w-sm rounded-2xl p-6"
            style={{ background: "rgba(30,15,60,0.95)", border: "1px solid rgba(255,255,255,0.15)" }}>
            <div className="text-2xl mb-3">🗑️</div>
            <h3 className="text-white font-bold text-lg mb-2">Delete card?</h3>
            <p className="text-white/50 text-sm mb-6">
              <span className="text-white/80 font-medium">"{card.title}"</span> will be permanently removed.
            </p>
            <div className="flex gap-3">
              <button onClick={() => { onDelete(card.id); setShowDeleteConfirm(false); }}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition"
                style={{ background: "rgba(239,68,68,0.8)", border: "1px solid rgba(239,68,68,0.5)" }}>
                Delete
              </button>
              <button onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white/70 transition"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}