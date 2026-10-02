import React from 'react'

const App = () => {
  localStorage.setItem('user', 'Faizan')
  localStorage.setItem('age', '23')
  localStorage.removeItem('age')

  const obj = {
    username: 'Faizan',
    age: 23,
    city: 'city'
  }

  // We can save data in local storage in the form of string. So if we directly save object in localstorage then we will see just object written in local storage. So we have to convert object to string using JSON.stringify()
  localStorage.setItem('objct', JSON.stringify(obj))

  // getting the object that we saved in local storage
  // we converted the object to string to save in local storage so we have to convert that again to object. for that we will use JSON.parse()
  const newObj = JSON.parse(localStorage.getItem('objct'))
  console.log(newObj)

  const arr = [10, 'string', true]
  console.log(arr)

  localStorage.setItem('array', arr)
  const newArr = JSON.parse(localStorage.getItem('array'))
  console.log(newArr)

  return (
    <div className=''>App</div>
  )
}

export default App

// localStorage.clear()
// local storage hoti ha hmary browser ki memory. Local storage mein agr hum browser/tab bnd kr den. laptop bnd kr den and dubara open kren to tb bhi data rhy ga
// We save data in local storage in the form of key value pair.
// localStorage.setItem('key', 'value') to set an item in local storage
// localStorage.getItem('key') to get item from the local storage.
// localStorage.removeItem('key') to remove an item from local storage.

// sessionStorage.clear()
// session storage tb tk rehti ha jb tk session chl rha ha. Browser/tab bnd krty he session khtm and data chla gya