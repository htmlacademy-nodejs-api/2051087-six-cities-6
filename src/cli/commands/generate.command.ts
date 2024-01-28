/*
  Команда --generate генерирует предложение по аренде жилья
  Аргументы:
    <count> - обязательный. Количество предложения для генерации
    <filepath> - обязательный. Путь к файлу для записи результата
    <url> - обязательный. URl сервиса (JSON-Server)
  Пример вызова команды:
    npm run ts ./src/main.cli.ts -- --generate ./mocks/mock-offers.tsv http://localhost:3123/api
*/

import { Command } from './command.interface.js';

export class GenerateCommand implements Command {
  public getName(): string {
    return '--generate';
  }

  public execute(...params: string[]): void {
    const [count, filepath, url] = params;
    const offerCount = Number.parseInt(count, 10);
    // TODO
  }
}
