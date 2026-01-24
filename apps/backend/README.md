# AI Assistant Backend

A minimal Express server providing an API endpoint for the AI assistant UI.

## Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Add your OpenAI API key to the `.env` file:

   ```bash
   OPENAI_API_KEY=sk-your-key-here
   ```

3. Run the server:
   ```bash
   pnpm run dev
   ```

The server will start on http://localhost:3000

## Endpoints

- `POST /api/chat` - Main chat endpoint that streams AI responses
- `GET /health` - Health check endpoint

## Environment Variables

- `OPENAI_API_KEY` - Your OpenAI API key (required)
- `PORT` - Server port (optional, defaults to 3000)
