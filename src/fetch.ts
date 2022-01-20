import crossFetch from 'cross-fetch'
import type { Result } from './types'

export function fetch<TResult>(url: string): Promise<Result<TResult>> {
  return new Promise(async (resolve, reject) => {
    crossFetch(url).then(async (res) => {
      if (res.status >= 400) {
        reject(new Error(`Request failed: ${res.status} - ${res.statusText}`))
      }

      try {
        const count = res.headers.get('num-records')
        const data: TResult = await res.json()

        resolve({
          data,
          ...(!!count ? { totalRecords: parseInt(count) } : {}),
        })
      } catch (error) {}
    })
  })
}
