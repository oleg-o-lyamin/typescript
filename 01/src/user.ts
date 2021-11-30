import { renderBlock } from './lib.js'

export function renderUserBlock(username: string, pathToAvatar: string, favoriteItemsAmount = 0) {
  const favoritesCaption = favoriteItemsAmount > 0 ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount > 0

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

export function getUserData() {
  const data = JSON.parse(window.localStorage.getItem('user'))
  return data
}

export function getFavouritesAmount() {
  const data = JSON.parse(window.localStorage.getItem('favouritesAmount'))
  return data
}
