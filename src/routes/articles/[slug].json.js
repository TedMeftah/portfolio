// require('dotenv-safe').config() // have DEV_TO_API_KEY in process.env
// const fetch = require('node-fetch')
// ;(async function() {
//   let allArticles = []
//   let page = 0
//   let per_page = 30 // can go up to 1000
//   let latestResult = []
//   do {
//     page += 1 // bump page up by 1 every loop
//     latestResult = await fetch(
//       `https://dev.to/api/articles/me/published?page=${page}&per_page=${per_page}`,
//       {
//         headers: {
//           'api-key': process.env.DEV_TO_API_KEY
//         }
//       }
//     )
//       .then(res => res.json())
//       .then(x => (allArticles = allArticles.concat(x)))
//       .catch(err => {
//         console.error(err) // very basic error handling, customize as needed
//         throw new Error(`error fetching page ${page}, {err}`)
//       })
//   } while (latestResult.length === per_page)
//   console.log(allArticles.length)
// })()