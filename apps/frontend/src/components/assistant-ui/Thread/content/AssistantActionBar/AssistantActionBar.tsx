import { ActionBarMorePrimitive, ActionBarPrimitive, AuiIf } from '@assistant-ui/react';
import { CheckIcon, CopyIcon, DownloadIcon, MoreHorizontalIcon, RefreshCwIcon } from 'lucide-react';
import { TooltipIconButton } from '@src/components/assistant-ui/tooltip-icon-button';

const { Root, Copy, Reload, ExportMarkdown } = ActionBarPrimitive;
const { Root: ActionBarMoreRoot, Trigger, Content, Item } = ActionBarMorePrimitive;

export default function AssistantActionBar() {
  return (
    <Root
      hideWhenRunning
      autohide='not-last'
      autohideFloat='single-branch'
      className='aui-assistant-action-bar-root col-start-3 row-start-2 -ml-1 flex gap-1 text-muted-foreground data-floating:absolute data-floating:rounded-md data-floating:border data-floating:bg-background data-floating:p-1 data-floating:shadow-sm'
    >
      <Copy asChild>
        <TooltipIconButton tooltip='Copy'>
          <AuiIf condition={({ message }) => message.isCopied}>
            <CheckIcon />
          </AuiIf>

          <AuiIf condition={({ message }) => !message.isCopied}>
            <CopyIcon />
          </AuiIf>
        </TooltipIconButton>
      </Copy>

      <Reload asChild>
        <TooltipIconButton tooltip='Refresh'>
          <RefreshCwIcon />
        </TooltipIconButton>
      </Reload>

      <ActionBarMoreRoot>
        <Trigger asChild>
          <TooltipIconButton tooltip='More' className='data-[state=open]:bg-accent'>
            <MoreHorizontalIcon />
          </TooltipIconButton>
        </Trigger>

        <Content
          side='bottom'
          align='start'
          className='aui-action-bar-more-content z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md'
        >
          <ExportMarkdown asChild>
            <Item className='aui-action-bar-more-item flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
              <DownloadIcon className='size-4' />
              Export as Markdown
            </Item>
          </ExportMarkdown>
        </Content>
      </ActionBarMoreRoot>
    </Root>
  );
}
