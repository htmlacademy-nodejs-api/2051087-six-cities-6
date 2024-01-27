export type Location = {
  latitude: string,
  longitude: string
}

export type CityDesc = {
  name: string,
  location: Location
}

export type Rental = {
  rentalName: string,
  createdAt: string,
  price: number
}

export type MockServerData = {
  titles: string[],
  descriptions: string[],
  cities: CityDesc[],
  rantals: Rental[],
  previews: string[],
  images: string[],
  names: string[],
  emails: string[],
  avatars: string[]
}
