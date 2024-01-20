/*
  Команда --import импортирует данные из tsv
*/

import { Command } from './command.interface.js';
import { TSVFileReader } from '../../shared/libs/file-reader/tsv-file-reader.js';

export class ImportCommand implements Command {
  public getName(): string {
    return '--import';
  }

  public execute(...params: string[]): void {
    const [filename] = params;
    const FileReader = new TSVFileReader(filename.trim());

    try {
      FileReader.read();
      console.log(FileReader.toArray());
    } catch (err) {

      // не потомок Error
      if (!(err instanceof Error)) {
        throw err;
      }

      console.error(`Can't import data from file: ${filename}`);
      console.error(`Details: ${err.message}`);
    }
  }
}
