/*
  Класс TSFileReader реализует чтение и разбор tsv-файла
*/

import { FileReader } from './file-reader.interface.js';
import EventEmitter from 'node:events';
import { createReadStream } from 'node:fs';
//import { City, Housing, RentalOffer, UserType } from '../../types/index.js';

const CHUNK_SIZE = 16384; // 16КБ

export class TSVFileReader extends EventEmitter implements FileReader {
  constructor(private readonly filename: string) {
    super();
  }

  public async read(): Promise<void> {
    const readStream = createReadStream(this.filename, {
      highWaterMark: CHUNK_SIZE, // размер буфера
      encoding: 'utf-8'
    });

    let remainingData = '';
    let nextLinePosition = -1;
    let importedRowCount = 0;

    for await (const chunk of readStream) {
      remainingData += chunk.toString();

      while ((nextLinePosition = remainingData.indexOf('\n')) >= 0) {
        const completeRow = remainingData.slice(0, nextLinePosition + 1);
        remainingData = remainingData.slice(++nextLinePosition);
        importedRowCount++;

        this.emit('line', completeRow);
      }
    }
    this.emit('end', importedRowCount);
  }

  /*
  public toArray(): RentalOffer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n') // разбить строки на массивы
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t')) // разбить массив строк на массив айтемов, разбитвх по символу табуляции
      .map(([name, desc, createdAt, cityType, logo, photoRoom, isPrem, isFav, rating, typeOfHousing, roomCount, guestCount, price, facilities, userName, email, avatar, pass, typeOfUser, commentCount, latitude, longitude]) => ({
        rentalName: name,
        descriptionOffer: desc,
        createdAt: createdAt,
        city: City[cityType as 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf'],
        previewLogo: logo,
        photo: photoRoom,
        isPremium: JSON.parse(isPrem),
        isFavorite: JSON.parse(isFav),
        rating: Number.parseInt(rating, 10),
        typeOfHousing: Housing[typeOfHousing as 'apartment' | 'house' | 'room' | 'hotel'],
        roomCount: Number.parseInt(roomCount, 10),
        guestCount: Number.parseInt(guestCount, 10),
        price: Number.parseInt(price, 10),
        facilities: facilities.split(';')
          .map((item) => (item)),
        authorOfProposal: { name: userName, email: email, avatar: avatar, password: pass, userType: UserType[typeOfUser as 'common' | 'pro'] },
        commentCount: Number.parseInt(commentCount, 10),
        coordinates: { latitude, longitude }
      }));
  }
  */
}


