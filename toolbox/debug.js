import { openTerminal } from 'open-terminal-programmatically';

/**
 * @type {Array<import('open-terminal-programmatically').OpenTerminalProps>} ProgramConfig
 */
const programs = [
  {
    config: {
      name: 'frontend',
      command: 'cd apps/frontend && npm run dev',
    },
  },
  {
    config: {
      name: 'backend',
      command: 'cd apps/backend && npm run dev',
    },
  },
];

async function runProgramInDebug() {
  for (const program of programs) {
    const { config, isDebugMode, delayNextFor } = program;

    /**
     * @type {import('open-terminal-programmatically').OpenTerminalProps}
     */
    const openTerminalProps = {
      config: { ...config, color: 'blue' },
      isDebugMode,
      delayNextFor,
    };

    await openTerminal(openTerminalProps);
  }
}

runProgramInDebug();
