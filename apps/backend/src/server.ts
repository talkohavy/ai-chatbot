import { createAnthropic } from '@ai-sdk/anthropic';

import { streamText, convertToModelMessages } from 'ai';
import cors from 'cors';
import express from 'express';
// import { openai } from '@ai-sdk/openai';

function startServer() {
  const anthropic = createAnthropic({
    baseURL: process.env.ANTHROPIC_BASE_URL || '',
    apiKey: process.env.ANTHROPIC_API_KEY || '',
  });

  const app = express();
  const PORT = process.env.PORT || 8000;

  app.use(cors());
  app.use(express.json());

  app.post('/api/chat', async (req, res) => {
    try {
      const { messages } = req.body;

      const result = streamText({
        model: anthropic('deployment-name'), // Or: openai('gpt-4o-mini')
        messages: await convertToModelMessages(messages),
        temperature: 0,
      });

      // Set headers for streaming
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.setHeader('Transfer-Encoding', 'chunked');

      // Pipe the stream to the response
      const stream = result.toTextStreamResponse();
      const reader = stream.body?.getReader();

      if (!reader) {
        res.status(500).json({ error: 'Failed to create stream reader' });
        return;
      }

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }

      res.end();
    } catch (error) {
      console.error('Error in /api/chat:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

startServer();
