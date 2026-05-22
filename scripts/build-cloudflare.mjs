import { spawnSync } from 'node:child_process';

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const result = spawnSync(npmCommand, ['run', 'build'], {
  env: {
    ...process.env,
    CF_PAGES: process.env.CF_PAGES || '1',
  },
  shell: process.platform === 'win32',
  stdio: 'inherit',
});

process.exit(result.status ?? 1);
