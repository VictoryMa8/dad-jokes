import express from 'express';

const app = express()
const port = 3000

// Let Express read form data
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  // Send a form when the user GETs
  res.send(`
    <form method="POST" action="/">
      <button>Get Dad Joke!</button>
    </form>
  `);
})

app.post('/', async (req, res) => {
  const response = await fetch('https://icanhazdadjoke.com/', {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  })

  const data = await response.json()
  console.log(data)
  res.send(`${data.joke}
    <form method="POST" action="/">
      <button>Another one!</button>
    </form>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
