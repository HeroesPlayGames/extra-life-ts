# extra-life-ts

Yet another Extra Life API wrapper. `extra-life-ts` adds some endpoints that are missing from other libraries and supports filtering/ordering on endpoints that allow it.

## Installation

```sh
# NPM
$ npm i extra-life-ts

# Yarn
$ yarn add extra-life-ts

# PNPM
$ pnpm i extra-life-ts
```

## Usage

### Node

```js
const { getParticipantDonations } = require('extra-life-ts')

getParticipantDonations(479600, { limit: 1, orderBy: 'amount ASC' }).then((result) => console.log(result))
```

### Browser

```ts
const { getParticipantDonations } from 'extra-life-ts'

const donations = await getParticipantDonations(479600, { limit: 1, orderBy: 'amount ASC' })
```

## API

### Before Getting Started

All endpoints that that return an array support filtering, ordering and limiting. These collections have the following response format:

```ts
interface Result<T> {
  totalRecords: number
  data: T
}
```

These endpoints also accept an options object with the following properties:

```ts
interface Options<T, IncludedFields extends keyof T | undefined = undefined> {
  limit?: number
  page?: number
  orderBy?: `${Exclude<keyof T, symbol>} ${'DESC' | 'ASC'}`
  where?: {
    fieldName: keyof T
    operator: 'LIKE' | '>' | '>=' | '<' | '<=' | '='
    term: string | number
  }
}
```

For example, to limit to 2, order by `amount` and filter by amount greater than or equal to $50:

```js
getTeamDonations(60010, {
  limit: 2,
  orderBy: 'amount ASC',
  where: {
    fieldName: 'amount',
    operator: '>=',
    term: 50,
  },
})
```

Endpoints that only return a single object (`getParticipant()` and `getTeam()`) do not support filtering/ordering/limiting. The response is:

```ts
interface Result<T> {
  data: T
}
```

### Methods

#### Participants

- `getParticipant(id)`
- `getParticipantActivity(id, options)`
- `getParticipantBadges(id, options)`
- `getParticipantDonations(id, options)`
- `getParticipantDonors(id, options)`
- `getParticipantIncentives(id, options)`
- `getParticipantMilestones(id, options)`

#### Teams

- `getTeam(id)`
- `getTeamActivity(id, options)`
- `getTeamBadges(id, options)`
- `getTeamDonations(id, options)`
- `getTeamDonors(id, options)`

## Inspiration

- [extra-life](https://github.com/goyney/extra-life)
- [extra-life-api](https://github.com/ammuench/extra-life-api)

## License

See [LICENSE.md](https://github.com/HeroesPlayGames/extra-life-ts/blob/main/LICENSE.md)
