import { fetch } from './fetch'
import { createUrl } from './utils'
import type {
  Team,
  Activity,
  Badge,
  Donor,
  Donation,
  Result,
  GetActivityOptions,
  GetBadgesOptions,
  GetDonationsOptions,
  GetDonorsOptions,
  GetTeamParticipantsOptions,
  TeamParticipant,
} from './types'

export const getTeam = async (teamID: string | number) =>
  await fetch<Team>(
    createUrl({
      id: teamID,
      type: 'teams',
    })
  )

export const getTeamParticipants = async (teamId: string | number, opts?: GetTeamParticipantsOptions) =>
  await fetch<TeamParticipant[]>(
    createUrl({
      id: teamId,
      type: 'teams',
      resource: 'participants',
      opts,
    })
  )

export const getTeamActivity = async (teamID: string | number, opts?: GetActivityOptions) =>
  await fetch<Result<Activity[]>>(
    createUrl<GetActivityOptions>({
      id: teamID,
      type: 'teams',
      resource: 'activity',
      opts,
    })
  )

export const getTeamBadges = async (teamID: string | number, opts?: GetBadgesOptions) =>
  await fetch<Result<Badge[]>>(
    createUrl<GetBadgesOptions>({
      id: teamID,
      type: 'teams',
      resource: 'badges',
      opts,
    })
  )

export const getTeamDonations = async (teamID: string | number, opts?: GetDonationsOptions) =>
  await fetch<Result<Donation[]>>(
    createUrl<GetDonationsOptions>({
      id: teamID,
      type: 'teams',
      resource: 'donations',
      opts,
    })
  )

export const getTeamDonors = async (teamID: string | number, opts?: GetDonorsOptions) =>
  await fetch<Result<Donor[]>>(
    createUrl<GetDonorsOptions>({
      id: teamID,
      type: 'teams',
      resource: 'donors',
      opts,
    })
  )
