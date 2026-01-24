import { ThreadPrimitive } from '@assistant-ui/react';
import { ArrowDownIcon } from 'lucide-react';
import { TooltipIconButton } from '@src/components/assistant-ui/tooltip-icon-button';

export default function ThreadScrollToBottom() {
  return (
    <ThreadPrimitive.ScrollToBottom asChild>
      <TooltipIconButton
        tooltip='Scroll to bottom'
        variant='outline'
        className='aui-thread-scroll-to-bottom absolute -top-12 z-10 self-center rounded-full p-4 disabled:invisible dark:bg-background dark:hover:bg-accent'
      >
        <ArrowDownIcon />
      </TooltipIconButton>
    </ThreadPrimitive.ScrollToBottom>
  );
}
