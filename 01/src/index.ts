import { renderSearchFormBlock, search, Place } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock, getUserData, getFavouritesAmount } from './user.js'
import { renderToast } from './lib.js'

window.localStorage.setItem('user', JSON.stringify({ username: 'Wade Warren', avatarUrl: './img/avatar.png' }))
window.localStorage.setItem('favouritesAmount', '1')

window.addEventListener('DOMContentLoaded', () => {
  const userData = getUserData()

  renderUserBlock(userData.username, userData.avatarUrl, getFavouritesAmount())
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )
})
