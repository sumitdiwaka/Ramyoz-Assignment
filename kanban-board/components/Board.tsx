"use client";

import { useState } from "react";
import { useKanban } from "@/hooks/useKanban";
import Column from "./Column";
import AddCardModal from "./AddCardModal";
import { COLUMNS } from "@/types";

export default function Board() {
  const { isLoading, searchQuery, setSearchQuery, addCard, moveCard, editCard, deleteCard, getCardsByStatus } = useKanban();
  const [showAddModal, setShowAddModal] = useState(false);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-white/30 border-t-white"></div>
        <span className="ml-4 text-white/70 text-base">Loading board...</span>
      </div>
    );
  }

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8 p-2 rounded-2xl"
        style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.2)" }}>
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm">🔍</span>
          <input
            type="text"
            placeholder="Search cards..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl text-white placeholder-white/40 text-sm focus:outline-none transition"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
          />
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 whitespace-nowrap"
          style={{ background: "rgba(99,102,241,0.9)", border: "1px solid rgba(255,255,255,0.2)" }}
        >
          + Add New Card
        </button>
      </div>

      {/* Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {COLUMNS.map((col) => (
          <Column key={col.id} column={col} cards={getCardsByStatus(col.id)} onMove={moveCard} onEdit={editCard} onDelete={deleteCard} />
        ))}
      </div>

      {showAddModal && <AddCardModal onAdd={addCard} onClose={() => setShowAddModal(false)} />}
    </div>
  );
}