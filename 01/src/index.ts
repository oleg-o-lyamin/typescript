import { renderSearchFormBlock, search, Place } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock, getUserData, getFavouritesAmount } from './user.js'
import { renderToast } from './lib.js'
import { localStorage } from './storage.js'

window.addEventListener('DOMContentLoaded', () => {
  const userData = getUserData(localStorage)

  // проверка работы search
  search({ city: '123', checkin: new Date(), checkout: new Date(), maxPrice: 5 }, (error?: Error, places?: Place[]) => {
    if (error && places == null)
      console.log(error.message)
    else
      console.log(places)
  })

  renderUserBlock(userData.username, userData.avatarUrl, getFavouritesAmount(localStorage))
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )



  //
  // Задание 3
  //


  interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
  }

  function getTodosByCount(count: number) {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        return response.text()
      })
      .then<Todo[]>((responseText) => {
        return JSON.parse(responseText)
      })
      .then((data) => {
        return data.slice(0, count)
      })
  }

  getTodosByCount(20).then((response) => {
    response.forEach((todo) => {
      console.log(`userId: ${todo.userId}, id: ${todo.id}, title: ${todo.title}, completed: ${todo.completed}`)
    })
  }).catch((error) => { console.error(error) })
})
