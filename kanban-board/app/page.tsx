import Board from "@/components/Board";

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
              style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)" }}>
              📋
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Kanban Board
            </h1>
          </div>
          <p className="text-white/60 text-base">
            Manage your tasks efficiently
          </p>
        </div>
        <Board />
      </div>
    </main>
  );
}