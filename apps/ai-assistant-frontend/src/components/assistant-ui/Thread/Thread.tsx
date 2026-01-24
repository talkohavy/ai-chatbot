import { AuiIf, ThreadPrimitive } from '@assistant-ui/react';
import AssistantMessage from './content/AssistantMessage';
import Composer from './content/Composer';
import EditComposer from './content/EditComposer';
import ThreadScrollToBottom from './content/ThreadScrollToBottom';
import ThreadWelcome from './content/ThreadWelcome';
import UserMessage from './content/UserMessage';

export default function Thread() {
  return (
    <ThreadPrimitive.Root
      className='aui-root aui-thread-root @container flex size-full flex-col bg-background'
      style={{
        ['--thread-max-width' as string]: '44rem',
      }}
    >
      <ThreadPrimitive.Viewport
        turnAnchor='top'
        className='aui-thread-viewport relative flex flex-1 flex-col overflow-x-auto overflow-y-scroll scroll-smooth px-4 pt-4'
      >
        <AuiIf condition={({ thread }) => thread.isEmpty}>
          <ThreadWelcome />
        </AuiIf>

        <ThreadPrimitive.Messages
          components={{
            UserMessage,
            EditComposer,
            AssistantMessage,
          }}
        />

        <ThreadPrimitive.ViewportFooter className='aui-thread-viewport-footer sticky bottom-0 mx-auto mt-auto flex w-full max-w-(--thread-max-width) flex-col gap-4 overflow-visible rounded-t-3xl bg-background pb-4 md:pb-6'>
          <ThreadScrollToBottom />
          <Composer />
        </ThreadPrimitive.ViewportFooter>
      </ThreadPrimitive.Viewport>
    </ThreadPrimitive.Root>
  );
}
