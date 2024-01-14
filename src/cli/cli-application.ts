/*
  Менеджер управления командами
  Задачи менеджера:
    - регистрация списка команд (раннее созданные классы)
    - разбор пользовательского ввода
    - запуск нужной команды
*/

import { Command } from "./commands/command.interface.js";

// объект, где ключи - строки, а значения - тип, реализующий интерфейс Command
type CommandCollection = Record<string, Command>;

export class CLIApplication {
  
  // список всех команд
  private commands: CommandCollection = {};

  public registerCommands(commandList: Command[]): void {
    commandList.forEach((command) => {
      if (Object.hasOwn(this.commands, command.getName())) {
        throw new Error(`Command ${command.getName()} is already registered`)
      }
      this.commands[command.getName()] = command;
    })
  }
}
