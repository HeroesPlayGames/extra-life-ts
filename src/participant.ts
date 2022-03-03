import { fetch } from './fetch'
import { createUrl } from './utils'
import type {
  Participant,
  Activity,
  Badge,
  Donor,
  Donation,
  Incentive,
  Milestone,
  Options,
  GetBadgesOptions,
  GetDonationsOptions,
  GetDonorsOptions,
  GetIncentivesOptions,
  GetMilestonesOptions,
  Result,
  GetActivityOptions,
} from './types'

export const getParticipant = async (participantID: string | number) =>
  await fetch<Result<Participant>>(
    createUrl({
      type: 'participants',
      id: participantID,
    })
  )

export const getParticipantActivity = async (participantID: string | number, opts?: GetActivityOptions) =>
  await fetch<Result<Activity[]>>(
    createUrl<GetActivityOptions>({
      type: 'participants',
      id: participantID,
      resource: 'activity',
      opts,
    })
  )

export const getParticipantBadges = async (participantID: string | number, opts?: GetBadgesOptions) =>
  await fetch<Result<Badge[]>>(
    createUrl<GetBadgesOptions>({
      type: 'participants',
      id: participantID,
      resource: 'badges',
      opts,
    })
  )

export const getParticipantDonations = async (participantID: string | number, opts?: GetDonationsOptions) =>
  await fetch<Result<Donation[]>>(
    createUrl<GetDonationsOptions>({
      type: 'participants',
      id: participantID,
      resource: 'donations',
      opts,
    })
  )

export const getParticipantDonors = async (participantID: string | number, opts?: GetDonorsOptions) =>
  await fetch<Result<Donor[]>>(
    createUrl<GetDonorsOptions>({
      type: 'participants',
      id: participantID,
      resource: 'donors',
      opts,
    })
  )

export const getParticipantIncentives = async (participantID: string | number, opts?: GetIncentivesOptions) =>
  await fetch<Result<Incentive[]>>(
    createUrl<GetIncentivesOptions>({
      type: 'participants',
      id: participantID,
      resource: 'incentives',
      opts,
    })
  )

export const getParticipantMilestones = async (participantID: string | number, opts?: GetMilestonesOptions) =>
  await fetch<Result<Milestone[]>>(
    createUrl<GetMilestonesOptions>({
      type: 'participants',
      id: participantID,
      resource: 'milestones',
      opts,
    })
  )
