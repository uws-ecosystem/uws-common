import { parseQueryFromURL } from 'fastest-qs'
import type { HttpRequest, HttpResponse } from 'uWebSockets.js'

/**
 * Consumes and returns the body as a JavaScript Object
 * https://fetch.spec.whatwg.org/#dom-body-json
 */
export const getBodyJson = <T = Record<string, unknown>>(res: HttpResponse): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    let data = Buffer.from('')
    res.onData((chunk, isLast) => {
      data = Buffer.concat([data, Buffer.from(chunk)])
      if (isLast) {
        try {
          resolve(JSON.parse(data.toString()))
        } catch (error) {
          reject(error)
        }
      }
    })
  })
}

/**
 * Get query string parameters from the URL as a JavaScript Object
 */
export const getQuery = <T = Record<string, string>>(req: HttpRequest): T => parseQueryFromURL(req.getQuery()) as T
