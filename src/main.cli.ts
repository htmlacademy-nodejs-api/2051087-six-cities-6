/*
  Запуск скрипта - npm run ts ./src/main.cli.ts
*/
import { CLIApplication, VersionCommand, HelpCommand, ImportCommand } from './cli/index.js';

function bootstrap() {
  const cliApplication = new CLIApplication();
  cliApplication.registerCommands([
    new HelpCommand(),
    new VersionCommand(),
    new ImportCommand(),
  ]);

  cliApplication.proccessCommand(process.argv);
}

bootstrap();
