import { renderBlock } from './lib.js'
import { Storage } from './storage.js'

export function renderUserBlock(username: string, pathToAvatar: string, favoriteItemsAmount = 0) {
  const favoritesCaption = favoriteItemsAmount > 0 ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount > 0 ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${pathToAvatar}" alt="${username}" />
      <div class="info">
          <p class="name">${username}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}

export function getUserData(storage: unknown) {
  if (storage instanceof Storage) {
    return storage.user
  }
  else
    console.error('Not a proper storage')
}

export function getFavouritesAmount(storage: unknown) {
  if (storage instanceof Storage) {
    return storage.favouritesAmount
  }
  else
    console.error('Not a proper storage')
}
