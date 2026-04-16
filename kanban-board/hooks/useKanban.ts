// hooks/useKanban.ts
"use client";

import { useState, useEffect } from "react";
import { Card, Status } from "@/types";

export function useKanban() {
  const [cards, setCards] = useState<Card[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Load from localStorage on first render (data persistence bonus)
  useEffect(() => {
    const stored = localStorage.getItem("kanban-cards");
    if (stored) {
      setCards(JSON.parse(stored));
    }
    setIsLoading(false);
  }, []);

  // Save to localStorage whenever cards change
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("kanban-cards", JSON.stringify(cards));
    }
  }, [cards, isLoading]);

  // Add new card
  const addCard = (title: string, description: string) => {
    const newCard: Card = {
      id: crypto.randomUUID(),
      title,
      description,
      status: "pending",
      createdAt: new Date(),
    };
    setCards((prev) => [newCard, ...prev]);
  };

  // Move card to next status
  const moveCard = (id: string, direction: "forward" | "backward") => {
    const order: Status[] = ["pending", "in-progress", "completed"];
    setCards((prev) =>
      prev.map((card) => {
        if (card.id !== id) return card;
        const currentIndex = order.indexOf(card.status);
        const newIndex =
          direction === "forward" ? currentIndex + 1 : currentIndex - 1;
        if (newIndex < 0 || newIndex >= order.length) return card;
        return { ...card, status: order[newIndex] };
      })
    );
  };

  // Edit card
  const editCard = (id: string, title: string, description: string) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, title, description } : card
      )
    );
  };

  // Delete card
  const deleteCard = (id: string) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  // Filter cards by search
  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCardsByStatus = (status: Status) =>
    filteredCards.filter((card) => card.status === status);

  return {
    cards,
    isLoading,
    searchQuery,
    setSearchQuery,
    addCard,
    moveCard,
    editCard,
    deleteCard,
    getCardsByStatus,
  };
}