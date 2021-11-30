
export function cloneDate(date: Date): Date
export function addDays(date: Date, days: number): Date

// предполагается, что все параметры обязательные, иначе было бы city? и т.д.
export interface SearchParameters {
  city: string
  checkInDate: Date
  checkOutDate: Date
  priceLimit: number
}

export interface Flat {
  id: string
  title: string
  details: string
  photos: string[],
  coordinates: [number, number]
  bookedDates: Date[]
  price: number
}

export type Database = Flat[]

export class FlatRentSdk {
  constructor()
  get(id: string): Promise<Flat | null>
  search(parameters: SearchParameters): Flat[]
  book(flatId: number, checkInDate: Date, checkOutDate: Date): number
  _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): void
  _resetTime(date: Date): void
  _calculateDifferenceInDays(startDate: Date, endDate: Date): number
  _generateDateRange(from: Date, to: Date): Date[]
  _generateTransactionId(): number
  _areAllDatesAvailable(flat: Flat, dateRange: Date[]): boolean
  _formatFlatObject(flat: Flat, nightNumber: number | null): Flat
  _readDatabase(): Database
  _writeDatabase(database: Database): void
  _syncDatabase(database: Database): void
}
