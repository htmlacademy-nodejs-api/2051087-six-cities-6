/*
  Класс TSFileReader реализует чтение и разбор tsv-файла
*/

import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';
import { City, Housing, RentalOffer, UserType } from '../../types/index.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

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
}


