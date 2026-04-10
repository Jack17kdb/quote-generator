# 🚀 Quote Generator (Next.js + TypeScript)

A **Next.js 13+ App Router project** that fetches inspirational quotes from an external API and demonstrates:

- Server Components
- Client Components
- API Routes (Route Handlers)
- Loading states
- TypeScript integration
- SEO setup

---

## 📸 Preview

> A responsive quote generator with loading spinner and API-powered random quotes.

---

## ⚙️ Tech Stack

- Next.js (App Router)
- TypeScript
- React
- Tailwind CSS
- API Ninjas Quotes API

---

## 📁 Project Structure

src/
├── app/
│ ├── api/
│ │ └── quote/
│ │ └── route.ts
│ ├── components/
│ │ └── QuoteBox.tsx
│ ├── page.tsx

---

## 🚀 Features

### ✅ Server-Side Data Fetching
Initial quote is fetched on the server for better performance and SEO.

### ✅ Client-Side Interactivity
Users can fetch new quotes without refreshing the page.

### ✅ Loading State
Spinner shown while fetching new quotes.

### ✅ API Route Abstraction
External API is hidden behind a Next.js API route for better architecture.

---

## 🔌 API Used

### API Ninjas Quotes API

https://api.api-ninjas.com/v2/randomquotes

Requires API key:

X-Api-Key: YOUR_API_KEY


---

## 🔐 Environment Variables

Create a `.env.local` file:

API_NINJAS_KEY=your_api_key_here


---

## 🧠 How It Works

### 1. Server Component (`page.tsx`)
- Fetches initial quote on the server
- Passes it as props to client component

### 2. Client Component (`QuoteBox.tsx`)
- Stores quote in React state
- Fetches new quotes on button click
- Shows loading spinner during requests

### 3. API Route (`/api/quote`)
- Calls external API securely
- Returns normalized quote object
- Keeps API key hidden from client
