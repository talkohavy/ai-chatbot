import { MessagePrimitive } from '@assistant-ui/react';
import { UserMessageAttachments } from '@src/components/assistant-ui/attachment';
import BranchPicker from '../BranchPicker';
import UserActionBar from '../UserActionBar';

export default function UserMessage() {
  return (
    <MessagePrimitive.Root
      className='aui-user-message-root fade-in slide-in-from-bottom-1 mx-auto grid w-full max-w-(--thread-max-width) animate-in auto-rows-auto grid-cols-[minmax(72px,1fr)_auto] content-start gap-y-2 px-2 py-3 duration-150 [&:where(>*)]:col-start-2'
      data-role='user'
    >
      <UserMessageAttachments />

      <div className='aui-user-message-content-wrapper relative col-start-2 min-w-0'>
        <div className='aui-user-message-content wrap-break-word rounded-2xl bg-muted px-4 py-2.5 text-foreground'>
          <MessagePrimitive.Parts />
        </div>
        <div className='aui-user-action-bar-wrapper absolute top-1/2 left-0 -translate-x-full -translate-y-1/2 pr-2'>
          <UserActionBar />
        </div>
      </div>

      <BranchPicker className='aui-user-branch-picker col-span-full col-start-1 row-start-3 -mr-1 justify-end' />
    </MessagePrimitive.Root>
  );
}
