import { renderSearchFormBlock, search, Place } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock, getUserData, getFavouritesAmount } from './user.js'
import { renderToast } from './lib.js'
import { MyCircle, MyRectangle } from './area.js'

window.localStorage.setItem('user', JSON.stringify({ username: 'Wade Warren', avatarUrl: './img/avatar.png' }))
window.localStorage.setItem('favouritesAmount', '1')

window.addEventListener('DOMContentLoaded', () => {
  const circle = new MyCircle(1, 1, 20)
  console.log(circle.radius)
  console.log(circle.center)
  circle.move(5, 10)
  console.log(circle.center)
  console.log(circle.area)
  circle.radius = 10
  console.log(circle.area)

  const rect = new MyRectangle(5, 10, 200, 300)
  console.log(rect.area)
  rect.width = 100
  console.log(rect.area)
  console.log(rect.topLeft)
  rect.move(500, 500)
  console.log(rect.topLeft)

  const userData = getUserData()

  renderUserBlock(userData.username, userData.avatarUrl, getFavouritesAmount())
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )
})
