import Start from 'start';
import reporter from 'start-pretty-reporter';
import release from 'start-release';
import typescript from 'start-typescript';
import mocha from 'start-mocha';
import env from 'start-env';
import files from 'start-files';
import clean from 'start-clean';
import read from 'start-read';
import write from 'start-write';
import split from 'start-split';
import watch from 'start-watch';
import { restart } from 're-start';

const start = Start(reporter());
const testCompileOpts = { compilerOptions: { sourceMap: false, declaration: false } };

const commands = module.exports = restart(start, {
  srcFiles: 'src/index.ts',
  outDir: 'dist/',
  compile: typescript,
  report: () => () => Promise.resolve()
});

commands.test = () => start(
  env('NODE_ENV', 'test'),
  files('.scratch/'),
  clean(),
  files('test/index.ts'),
  read(),
  typescript(testCompileOpts),
  split({
    src: () => [write('.scratch/src')],
    test: () => [write('.scratch/test')]
  }),
  files('.scratch/test/index.js'),
  mocha()
);

commands.tdd = () => start(
  files(['test/**/*.ts', 'src/**/*.ts']),
  watch(commands.test)
);

commands.deploy = () => start(
  release()
);
