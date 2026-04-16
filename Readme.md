## Kanban Board Application

A feature-rich Kanban board built with Next.js 14, TypeScript, and Tailwind CSS.

## Deployment
Deployed on Vercel:https://ramyoz-assignment-murex.vercel.app

## Features Implemented
- ✅ Create, Edit, Delete cards
- ✅ Move cards: Pending → In Progress → Completed
- ✅ Search/filter cards
- ✅ Data persistence via localStorage
- ✅ Loading & empty states
- ✅ Delete confirmation dialog


### Core Requirements
- ✅ Create cards with title and description
- ✅ View board with three columns (Pending, In Progress, Completed)
- ✅ Move cards between columns
- ✅ Edit card title and description
- ✅ Delete cards with confirmation
- ✅ Data persistence using localStorage
- ✅ Loading and empty states
- ✅ Responsive design

### Bonus Features
- ✅ Search/filter functionality
- ✅ Optimistic UI updates
- ✅ Data persistence

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd kanban-board 📋 Kanban Board


Install dependencies

bash
npm install
Run development server

bash
npm run dev
Open http://localhost:3000

Usage
Adding a Card
Click "Add New Card" button
Enter title (required) and description (optional)
Click "Create Card"

Moving Cards
Click "Move →" button on any card to move it to the next column
Flow: Pending → In Progress → Completed

Editing Cards
Click "Edit" on any card
Modify title or description
Click "Save Changes"

Deleting Cards
Click "Delete" on any card
Confirm deletion in the dialog

Searching Cards
Use the search bar to filter cards by title or description

Project Structure
text
kanban-board/
├── app/                 # Next.js app router
├── components/          # React components
│   ├── Card.tsx
│   ├── CardModal.tsx
│   ├── Column.tsx
│   └── DeleteConfirmModal.tsx
├── hooks/              # Custom React hooks
│   └── useLocalStorage.ts
├── types/              # TypeScript type definitions
│   └── index.ts
└── utils/              # Utility functions
    └── storage.ts

Deployment
Deploy to Vercel (Recommended)
Push code to GitHub
Import project to Vercel

Deploy

License
MIT

text

## Step 10: Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or deploy directly from GitHub:
# 1. Push to GitHub
# 2. Go to vercel.com
# 3. Import your repository
# 4. Deploy



