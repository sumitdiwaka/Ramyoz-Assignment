// types/index.ts  ← UPDATED VERSION

export type Status = "pending" | "in-progress" | "completed";

export interface Card {
  id: string;
  title: string;
  description: string;
  status: Status;
  createdAt: Date;
}

export interface Column {
  id: Status;
  title: string;
  color: string;
  accent: string;
}

export const COLUMNS: Column[] = [
  {
    id: "pending",
    title: "📌 Pending",
    color: "border-yellow-500",
    accent: "bg-yellow-500",
  },
  {
    id: "in-progress",
    title: "🔄 In Progress",
    color: "border-blue-500",
    accent: "bg-blue-500",
  },
  {
    id: "completed",
    title: "✅ Completed",
    color: "border-green-500",
    accent: "bg-green-500",
  },
];