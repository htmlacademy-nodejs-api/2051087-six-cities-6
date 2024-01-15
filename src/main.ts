import { CLIApplication, VersionCommand, HelpCommand } from './cli/index.js';

function bootstrap() {
  const cliApplication = new CLIApplication();
  cliApplication.registerCommands([
    new HelpCommand(),
    new VersionCommand()
  ]);

  cliApplication.proccessCommand(process.argv);
}

bootstrap();
