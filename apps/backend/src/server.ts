import { createAnthropic } from '@ai-sdk/anthropic';

import { streamText, convertToModelMessages } from 'ai';
import cors from 'cors';
import express from 'express';
import { sendThinkingMockResponse } from './mocks/thinking-response';
// import { sendMockResponseWithTable } from './mocks/long-response-with-table';
// import { openai } from '@ai-sdk/openai';

export const isMock = true;

function startServer() {
  const anthropic = createAnthropic({
    baseURL: process.env.ANTHROPIC_BASE_URL || '',
    apiKey: process.env.ANTHROPIC_API_KEY || '',
  });

  const app = express();
  const PORT = process.env.PORT || 8000;

  app.use(
    cors({
      origin: ['http://localhost:3000', 'http://localhost:3004', 'http://localhost:3300'],
      credentials: true,
    }),
  );
  app.use(express.json());

  app.post('/api/chat', async (req, res) => {
    try {
      const { messages } = req.body;

      const result = streamText({
        model: anthropic(process.env.ANTHROPIC_DEPLOYMENT_NAME || 'deployment-name'), // Or: openai('gpt-4o-mini')
        messages: await convertToModelMessages(messages),
        temperature: 0,
      });

      // Set headers for streaming
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');
      // res.setHeader('Transfer-Encoding', 'chunked');

      if (isMock) {
        await sendThinkingMockResponse(res);
        return;
      }

      result.pipeUIMessageStreamToResponse(res);

      // // Pipe the stream to the response
      // const stream = result.toTextStreamResponse();
      // const reader = stream.body?.getReader();

      // if (!reader) {
      //   res.status(500).json({ error: 'Failed to create stream reader' });
      //   return;
      // }

      // while (true) {
      //   const { done, value } = await reader.read();
      //   if (done) break;
      //   res.write(value);
      // }

      // res.end();
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
