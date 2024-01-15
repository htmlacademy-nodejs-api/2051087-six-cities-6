/*
  Класс TSFileReader реализует чтение и разбор tsv-файла
*/

import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';
import { RentalOffer, User } from '../../types/index.js';

class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, {encoding: 'utf-8'});
  }

  public toArray(): RentalOffer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n') // разбить строки на массивы
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t')) // разбить массив строк на массив айтемов, разбитвх по символу табуляции
      .map(([]) => {
        
      });

  }
}


