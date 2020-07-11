// const DOMAIN = 'http://www.omdbapi.com/';
// const API_KEY = '3a49112b'


// const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;

// const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=3a49112b'


// const buttonElement = document.querySelector('#search')
// const inputElement = document.querySelector('#inputValue')


const getOption = async () => {
  
const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=3a49112b'

try {
  const response = await axios(url)
  const movieList = Object.keys(response.data)
  console.log(movieList)

const select = document.querySelector('select')


  // optionValues(movieList, input)

} catch (error) {
  console.log(`Error: ${error}`)
}


}
getOption()

// function optionValues(list, element) {
//   list.forEach((movie) => {
//     const option = document.createElement('option')
//     option.value = `${movie}`
//     option.text = `${movie}`
//     element.append(option)

//   })

// }


  // const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=3a49112b'


function value(e) {
    
  e.preventDefault()
  const optionValues = document.querySelector('#inputValue').value
  console.log(optionValue)
  movieList(optionValue)


  const form = document.querySelector('button')
form.addEventListener('submit', value)

  // function value(e) {

  //   e.preventDefault()
  //   const optionValue = document.querySelector('#select-dog').value
  
  //   console.log(optionValue)
  //   getBreed(optionValue)
  
  // }
  
  //   async function getBreed(breed) {
  //     const url = `https://dog.ceo/api/breed/${breed}/images/random`
    
  //     try {
  //       const response = await axios.get(url)
  //       console.log(response.data)
  //       const breedSelected = response.data.message
  
  
  //       removePic()
  //       dogPic(breedSelected)
  
  //     } catch (error) {
      
  //       console.log(`Error: ${error}`)
      
  //     }
  
  //   }
  // }



  // const newUrl = url + '&query=' + optionValue
  

  //   fetch(newUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(`Data: ${data}`);

  //     })

  //     .catch((error) => {
  //       console.log(`Error: ${error}`)
  //     })
  


  //   console.log(optionValue)

  // }
  
}
