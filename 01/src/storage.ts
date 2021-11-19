

export class Storage {
  user: {
    username: string,
    avatarUrl: string
  }

  favouritesAmount: number

  constructor(username: string, avatarUrl: string, favouritesAmount = 0) {
    this.user = { username: username, avatarUrl: avatarUrl }
    this.favouritesAmount = favouritesAmount
  }
}

export const localStorage: Storage = new Storage('Wade Warren', '/img/avatar.png', 1)
