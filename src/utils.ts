import { encode } from 'qss'
import type { ResourceTypes, AllOptions } from './types'

export const EXTRA_LIFE_URL = 'https://www.extra-life.org/api'

export const createUrl = <Opts extends AllOptions>({
  type,
  id,
  resource,
  opts,
}: {
  type: 'participants' | 'teams'
  id: string | number
  resource?: ResourceTypes
  opts?: Opts
}) => {
  let url = `${EXTRA_LIFE_URL}/${type}/${id}`

  if (resource) {
    url += `/${resource}`
  }

  if (Object.keys(opts ?? {}).length) {
    const query = encode(
      {
        limit: opts?.limit ? opts.limit : 100,
        page: opts?.page,
        orderBy: opts?.orderBy,
        where: opts?.where && `${opts.where.fieldName} ${opts.where.operator} ${opts.where.term}`,
      },
      '?'
    )

    url += query
  }

  return url
}
