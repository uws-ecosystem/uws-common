# uws-common
Common functions and utilities to improve DX (Developer Experience) with [uWebSockets.js](https://github.com/uNetworking/uWebSockets.js).

## Installation
```sh
yarn add uws-common
```

## Usage
```ts
import { App } from 'uWebSockets.js'
import { getBodyJson, getQuery } from 'uws-common'

const port = +(process.env.PORT || 3000)

const app = App()

app
  .get(pattern, async ({ req, res }) => {
    console.log('Query:', getQuery(req))   // { q: 1, q: 2 }
    console.log('JSON body:', await getBodyJson(res))  // { prop1: 1, prop2: 2 }
    res.end('Hello World!')
  })
  .listen(port, (listenSocket) => {
    if (listenSocket) {
      console.log(`Server running at http://localhost:${port}`)
    } else {
      console.log(`Failed to listen to port ${port}`)
    }
  })
```

## License

This project is licensed under the [MIT License](LICENSE).
