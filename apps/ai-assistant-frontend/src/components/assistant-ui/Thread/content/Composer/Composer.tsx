import { ComposerPrimitive } from '@assistant-ui/react';
import { ComposerAttachments } from '@src/components/assistant-ui/attachment';
import ComposerAction from '../ComposerAction';

export default function Composer() {
  return (
    <ComposerPrimitive.Root className='aui-composer-root relative flex w-full flex-col'>
      <ComposerPrimitive.AttachmentDropzone className='aui-composer-attachment-dropzone flex w-full flex-col rounded-2xl border border-input bg-background px-1 pt-2 outline-none transition-shadow has-[textarea:focus-visible]:border-ring has-[textarea:focus-visible]:ring-2 has-[textarea:focus-visible]:ring-ring/20 data-[dragging=true]:border-ring data-[dragging=true]:border-dashed data-[dragging=true]:bg-accent/50'>
        <ComposerAttachments />

        <ComposerPrimitive.Input
          placeholder='Send a message...'
          className='aui-composer-input mb-1 max-h-32 min-h-14 w-full resize-none bg-transparent px-4 pt-2 pb-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-0'
          rows={1}
          autoFocus
          aria-label='Message input'
        />

        <ComposerAction />
      </ComposerPrimitive.AttachmentDropzone>
    </ComposerPrimitive.Root>
  );
}
