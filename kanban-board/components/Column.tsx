"use client";

import { Card as CardType, Column as ColumnType } from "@/types";
import Card from "./Card";

interface ColumnProps {
  column: ColumnType;
  cards: CardType[];
  onMove: (id: string, direction: "forward" | "backward") => void;
  onEdit: (id: string, title: string, description: string) => void;
  onDelete: (id: string) => void;
}

const columnConfig = {
  pending:     { icon: "📌", badge: "bg-amber-400/20 text-amber-300 border border-amber-400/30",  accent: "from-amber-400 to-orange-400" },
  "in-progress": { icon: "⚡", badge: "bg-blue-400/20 text-blue-300 border border-blue-400/30",   accent: "from-blue-400 to-indigo-400" },
  completed:   { icon: "✅", badge: "bg-emerald-400/20 text-emerald-300 border border-emerald-400/30", accent: "from-emerald-400 to-teal-400" },
};

export default function Column({ column, cards, onMove, onEdit, onDelete }: ColumnProps) {
  const cfg = columnConfig[column.id];

  return (
    <div className="rounded-2xl flex flex-col overflow-hidden"
      style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.15)", minHeight: 420 }}>
      
      {/* Accent line */}
      <div className={`h-1 w-full bg-gradient-to-r ${cfg.accent}`} />

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="text-base">{cfg.icon}</span>
          <h2 className="text-white font-semibold text-sm tracking-wide">{column.title.replace(/[^\w\s]/g, "").trim()}</h2>
        </div>
        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${cfg.badge}`}>
          {cards.length}
        </span>
      </div>

      <div className="px-4 pb-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />

      {/* Cards */}
      <div className="flex flex-col gap-3 px-4 pb-4 flex-1">
        {cards.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 py-16 opacity-40">
            <div className="text-4xl mb-3">🗂️</div>
            <p className="text-white text-sm">No cards here</p>
          </div>
        ) : (
          cards.map((card) => (
            <Card key={card.id} card={card} onMove={onMove} onEdit={onEdit} onDelete={onDelete} />
          ))
        )}
      </div>
    </div>
  );
}