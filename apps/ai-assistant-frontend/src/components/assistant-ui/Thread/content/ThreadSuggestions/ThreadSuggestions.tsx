import { ThreadPrimitive } from '@assistant-ui/react';
import { Button } from '@src/components/ui/button';
import { SUGGESTIONS } from '../../logic/constants';

export default function ThreadSuggestions() {
  return (
    <div className='aui-thread-welcome-suggestions grid w-full @md:grid-cols-2 gap-2 pb-4'>
      {SUGGESTIONS.map((suggestion, index) => (
        <div
          key={suggestion.prompt}
          className='aui-thread-welcome-suggestion-display fade-in slide-in-from-bottom-2 @md:nth-[n+3]:block nth-[n+3]:hidden animate-in fill-mode-both duration-200'
          style={{ animationDelay: `${100 + index * 50}ms` }}
        >
          <ThreadPrimitive.Suggestion prompt={suggestion.prompt} send asChild>
            <Button
              variant='ghost'
              className='aui-thread-welcome-suggestion h-auto w-full @md:flex-col flex-wrap items-start justify-start gap-1 rounded-2xl border px-4 py-3 text-left text-sm transition-colors hover:bg-muted'
              aria-label={suggestion.prompt}
            >
              <span className='aui-thread-welcome-suggestion-text-1 font-medium'>{suggestion.title}</span>
              <span className='aui-thread-welcome-suggestion-text-2 text-muted-foreground'>{suggestion.label}</span>
            </Button>
          </ThreadPrimitive.Suggestion>
        </div>
      ))}
    </div>
  );
}
