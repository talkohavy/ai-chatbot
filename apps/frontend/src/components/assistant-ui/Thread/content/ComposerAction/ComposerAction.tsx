import { AuiIf, ComposerPrimitive } from '@assistant-ui/react';
import { ArrowUpIcon, SquareIcon } from 'lucide-react';
import { ComposerAddAttachment } from '@src/components/assistant-ui/attachment';
import { TooltipIconButton } from '@src/components/assistant-ui/tooltip-icon-button';
import { Button } from '@src/components/ui/button';

const { Send, Cancel } = ComposerPrimitive;

export default function ComposerAction() {
  return (
    <div className='aui-composer-action-wrapper relative mx-2 mb-2 flex items-center justify-between'>
      <ComposerAddAttachment />

      <AuiIf condition={({ thread }) => !thread.isRunning}>
        <Send asChild>
          <TooltipIconButton
            tooltip='Send message'
            side='bottom'
            type='submit'
            variant='default'
            size='icon'
            className='aui-composer-send size-8 rounded-full'
            aria-label='Send message'
          >
            <ArrowUpIcon className='aui-composer-send-icon size-4' />
          </TooltipIconButton>
        </Send>
      </AuiIf>

      <AuiIf condition={({ thread }) => thread.isRunning}>
        <Cancel asChild>
          <Button
            type='button'
            variant='default'
            size='icon'
            className='aui-composer-cancel size-8 rounded-full'
            aria-label='Stop generating'
          >
            <SquareIcon className='aui-composer-cancel-icon size-3 fill-current' />
          </Button>
        </Cancel>
      </AuiIf>
    </div>
  );
}
