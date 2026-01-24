import { ComposerPrimitive, MessagePrimitive } from '@assistant-ui/react';
import { Button } from '@src/components/ui/button';

export default function EditComposer() {
  return (
    <MessagePrimitive.Root className='aui-edit-composer-wrapper mx-auto flex w-full max-w-(--thread-max-width) flex-col px-2 py-3'>
      <ComposerPrimitive.Root className='aui-edit-composer-root ml-auto flex w-full max-w-[85%] flex-col rounded-2xl bg-muted'>
        <ComposerPrimitive.Input
          className='aui-edit-composer-input min-h-14 w-full resize-none bg-transparent p-4 text-foreground text-sm outline-none'
          autoFocus
        />
        <div className='aui-edit-composer-footer mx-3 mb-3 flex items-center gap-2 self-end'>
          <ComposerPrimitive.Cancel asChild>
            <Button variant='ghost' size='sm'>
              Cancel
            </Button>
          </ComposerPrimitive.Cancel>

          <ComposerPrimitive.Send asChild>
            <Button size='sm'>Update</Button>
          </ComposerPrimitive.Send>
        </div>
      </ComposerPrimitive.Root>
    </MessagePrimitive.Root>
  );
}
