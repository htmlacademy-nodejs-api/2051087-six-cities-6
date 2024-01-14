// метод getName() вернет имя команды. Например, `--help` или `--version`. Нужен, чтобы отличить одну команду от другой
//метод execute() выполнит команду. У каждой команды должен быть реализован определенный метод

export interface Command {
  getName(): string;
  execute(...params: string[]): void
}
