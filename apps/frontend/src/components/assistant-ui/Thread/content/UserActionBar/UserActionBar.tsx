import { ActionBarPrimitive } from '@assistant-ui/react';
import { PencilIcon } from 'lucide-react';
import { TooltipIconButton } from '@src/components/assistant-ui/tooltip-icon-button';

export default function UserActionBar() {
  return (
    <ActionBarPrimitive.Root
      hideWhenRunning
      autohide='not-last'
      className='aui-user-action-bar-root flex flex-col items-end'
    >
      <ActionBarPrimitive.Edit asChild>
        <TooltipIconButton tooltip='Edit' className='aui-user-action-edit p-4'>
          <PencilIcon />
        </TooltipIconButton>
      </ActionBarPrimitive.Edit>
    </ActionBarPrimitive.Root>
  );
}
