import { AssistantRuntimeProvider } from '@assistant-ui/react';
import { useChatRuntime, AssistantChatTransport } from '@assistant-ui/react-ai-sdk';
import { Thread } from '@src/components/assistant-ui/thread';

export function App() {
  const runtime = useChatRuntime({
    transport: new AssistantChatTransport({
      api: 'http://localhost:8000/api/chat',
    }),
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <div className='flex items-center justify-center w-full min-h-screen'>
        <Thread />
      </div>
    </AssistantRuntimeProvider>
  );
}

export default App;
