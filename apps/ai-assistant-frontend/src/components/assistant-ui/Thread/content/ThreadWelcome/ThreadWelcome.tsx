import ThreadSuggestions from '../ThreadSuggestions';

export default function ThreadWelcome() {
  return (
    <div className='aui-thread-welcome-root mx-auto my-auto flex w-full max-w-(--thread-max-width) grow flex-col'>
      <div className='aui-thread-welcome-center flex w-full grow flex-col items-center justify-center'>
        <div className='aui-thread-welcome-message flex size-full flex-col justify-center px-4'>
          <h1 className='aui-thread-welcome-message-inner fade-in slide-in-from-bottom-1 animate-in font-semibold text-2xl duration-200'>
            Hello there!
          </h1>

          <p className='aui-thread-welcome-message-inner fade-in slide-in-from-bottom-1 animate-in text-muted-foreground text-xl delay-75 duration-200'>
            How can I help you today?
          </p>
        </div>
      </div>

      <ThreadSuggestions />
    </div>
  );
}
