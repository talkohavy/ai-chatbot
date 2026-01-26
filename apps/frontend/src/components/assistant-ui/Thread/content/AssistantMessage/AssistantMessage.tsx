import { MessagePrimitive } from '@assistant-ui/react';
import { MarkdownText } from '@src/components/assistant-ui/markdown-text';
import { ToolFallback } from '@src/components/assistant-ui/tool-fallback';
import AssistantActionBar from '../AssistantActionBar';
import BranchPicker from '../BranchPicker';
import MessageError from '../MessageError';

const { Root, Parts } = MessagePrimitive;

export default function AssistantMessage() {
  return (
    <Root
      className='aui-assistant-message-root fade-in slide-in-from-bottom-1 relative mx-auto w-full max-w-(--thread-max-width) animate-in py-3 duration-150'
      data-role='assistant'
    >
      <div className='aui-assistant-message-content wrap-break-word px-2 text-foreground leading-relaxed'>
        <Parts
          components={{
            Text: MarkdownText,
            tools: { Fallback: ToolFallback },
          }}
        />

        <MessageError />
      </div>

      <div className='aui-assistant-message-footer mt-1 ml-2 flex'>
        <BranchPicker />
        <AssistantActionBar />
      </div>
    </Root>
  );
}
