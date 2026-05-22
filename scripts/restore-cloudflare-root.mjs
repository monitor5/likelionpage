import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

if (process.env.CF_PAGES && existsSync('dist/index.html')) {
  copyFileSync('dist/index.html', 'index.html');
  copyFileSync('dist/index.html', 'index.cloudflare.html');

  if (existsSync('dist/assets')) {
    rmSync('assets', { recursive: true, force: true });
    mkdirSync('assets', { recursive: true });

    for (const entry of readdirSync('dist/assets')) {
      copyFileSync(join('dist/assets', entry), join('assets', entry));
    }
  }
} else {
  copyFileSync('index.cloudflare.html', 'index.html');
}
