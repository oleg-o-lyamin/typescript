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
  const item = window.localStorage.getItem('user')
  return (item != null) ? JSON.parse(item) : null
}

export function getFavouritesAmount() {
  const item = window.localStorage.getItem('favouritesAmount')
  return (item != null) ? JSON.parse(item) : null
}
