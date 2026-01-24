import { BranchPickerPrimitive } from '@assistant-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { TooltipIconButton } from '@src/components/assistant-ui/tooltip-icon-button';
import { cn } from '@src/lib/utils';

export default function BranchPicker(props: BranchPickerPrimitive.Root.Props) {
  const { className, ...rest } = props;

  return (
    <BranchPickerPrimitive.Root
      hideWhenSingleBranch
      className={cn(
        'aui-branch-picker-root mr-2 -ml-2 inline-flex items-center text-muted-foreground text-xs',
        className,
      )}
      {...rest}
    >
      <BranchPickerPrimitive.Previous asChild>
        <TooltipIconButton tooltip='Previous'>
          <ChevronLeftIcon />
        </TooltipIconButton>
      </BranchPickerPrimitive.Previous>

      <span className='aui-branch-picker-state font-medium'>
        <BranchPickerPrimitive.Number /> / <BranchPickerPrimitive.Count />
      </span>

      <BranchPickerPrimitive.Next asChild>
        <TooltipIconButton tooltip='Next'>
          <ChevronRightIcon />
        </TooltipIconButton>
      </BranchPickerPrimitive.Next>
    </BranchPickerPrimitive.Root>
  );
}
