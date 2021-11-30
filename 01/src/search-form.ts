import { renderBlock } from './lib.js'

interface SearchFormData {
  city: string,
  checkin: Date,
  checkout: Date,
  maxPrice: number
}

export interface Place {

}

interface SearchCallback {
  (error?: Error, places?: Place[]): void
}

export function search(searchData: SearchFormData, callback: SearchCallback): void {
  console.log(`City: ${searchData.city}, Check-in: ${searchData.checkin}, Check-out: ${searchData.checkout}, Max Price: ${searchData.maxPrice}`)
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5)
        resolve({})
      else
        reject(new Error('Test Error!'))
    }, 2000)
  }).then((places: Place[]) => callback(null, places)).catch((error: Error) => callback(error))
}



export function renderSearchFormBlock(checkin?: Date, checkout?: Date) {
  const today = new Date()

  const max = new Date(today.getFullYear(), today.getMonth() + 2, 1)

  const formatDate = (date: Date): string => {
    return `${date.toISOString().substr(0, 10)}`
  }

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" min="${formatDate(today)}" max="${formatDate(max)}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" min="${formatDate(today)}" max="${formatDate(max)}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )

  const check_in_elem = <HTMLInputElement>document.getElementById('check-in-date')
  const check_out_elem = <HTMLInputElement>document.getElementById('check-out-date')

  const changeDates = (date1?: Date, date2?: Date): void => {
    const d1 = date1 || new Date(check_in_elem.value)
    let d2 = date2 || new Date(check_out_elem.value)

    if (d1 > d2) {
      d2 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate() + 2)
    }

    check_in_elem.value = formatDate(d1)
    check_out_elem.value = formatDate(d2)
  }

  check_in_elem.addEventListener('change', () => { changeDates() }) 
  check_out_elem.addEventListener('change', () => { changeDates() })

  changeDates(checkin || new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2),
    checkout || new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4))
}


