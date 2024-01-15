/*
  Команда --import импортирует данные из tsv
*/

import { Command } from './command.interface.js';

export class ImportCommand implements Command {
  public getName(): string {
    return '--import';
  }

  public execute(...params: string[]): void {
    // чтение
  }
}
