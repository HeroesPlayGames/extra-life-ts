export interface Result<T> {
  totalRecords?: number
  data: T
}

type Operators = 'LIKE' | '>' | '>=' | '<' | '<=' | '='

export interface WhereArguments<T> {
  fieldName: T
  operator: Operators
  term: string | number
}

export interface Options<T, IncludedFields extends keyof T | undefined = undefined> {
  limit?: number
  page?: number
  orderBy?: `${Exclude<keyof T, symbol>} ${'DESC' | 'ASC'}`
  where?: WhereArguments<IncludedFields>
}

export type ResourceTypes =
  | 'activity'
  | 'badges'
  | 'donations'
  | 'donors'
  | 'incentives'
  | 'milestones'
  | 'participants'
export type ActivityType = 'donation' | 'participantBadge' | 'teamBadge'
export interface Activity {
  amount?: number
  createdDateUTC: string
  imageURL: string
  isIncentive?: boolean
  message?: string
  title?: string
  type: ActivityType
}

export interface Participant {
  avatarImageURL: string
  createdDateUTC: string
  displayName: string
  eventID: number
  eventName: string
  fundraisingGoal: number
  hasActivityTracking: boolean
  isCustomAvatarImage: boolean
  isTeamCaptain?: boolean
  isTeamCoCaptain?: boolean
  links: {
    donate: string
    page: string
    stream?: string
    facebookFundraiser?: string
  }
  numDonations: number
  numIncentives: number
  numMilestones: number
  participantID: number
  participantTypeCode: string
  /**
   * So far the strings I've found here are:
   * A = CoCaptain
   * C = Captain
   * I = Individual
   * T = Team
   */
  role: string
  streamingChannel?: string
  streamingPlatform?: string
  streamIsEnabled?: boolean
  streamIsLive?: boolean
  sumDonations: number
  sumPledges: number
  teamID?: number
  teamName?: string
}

export interface TeamParticipant extends Participant {
  isTeamCaptain: boolean
  isTeamCoCaptain: boolean
  teamID: number
  teamName: string
}

export interface Badge {
  description: string
  title: string
  unlockedDateUTC: string
  badgeImageURL: string
  badgeCode: string
}

export interface Donor {
  avatarImageURL: string
  displayName: string
  donorID: number
  modifiedDateUTC: string
  numDonations: number
  recipientImageURL: string
  sumDonations: number
}

export interface Donation {
  amount: number
  avatarImageURL: string
  createdDateUTC: string
  displayName?: string
  donationID: string
  donorID: string
  eventID: number
  isRegFee: boolean
  links: {
    recipient: string
  }
  participantID: number
  recipientName: string
  recipientImageURL: string
  teamID: number
}

export interface Incentive {
  amount: number
  description: string
  endDateUTC?: string
  incentiveID: string
  incentiveImageURL: string
  isActive: boolean
  links: {
    donate: string
  }
  /** If not present, the quantity is unlimited */
  quantity: number
  /** If not present, the quantity is unlimited and the quantity claimed is zero */
  quantityClaimed: number
  startDateUTC?: string
}

export interface Milestone {
  description: string
  endDateUTC?: string
  fundraisingGoal: number
  isActive: boolean
  isComplete?: boolean
  links?: {
    donate: string
  }
  milestoneID: string
  startDateUTC?: string
}

export interface Team {
  avatarImageURL: string
  captainDisplayName: string
  createdDateUTC: string
  eventID: number
  eventName: string
  fundraisingGoal: number
  hasActivityTracking: boolean
  hasTeamOnlyDonations: boolean
  isCustomAvatarImage: boolean
  links: {
    stream?: string
    page: string
  }
  name: string
  numDonations: number
  numParticipants: number
  sourceTeamID: number
  streamingChannel: string
  streamingPlatform: string
  streamIsEnabled: boolean
  streamIsLive: boolean
  sumDonations: number
  sumPledges: number
  teamID: number
}

export type GetActivityOptions = Options<Activity>
export type GetBadgesOptions = Options<Badge, Exclude<keyof Badge, 'badgeImageUrl'>>
export type GetDonationsOptions = Options<Donation>
export type GetDonorsOptions = Options<Donor>
export type GetIncentivesOptions = Options<Incentive, Exclude<keyof Incentive, 'incentiveImageURL' | 'links'>>
export type GetMilestonesOptions = Options<Milestone>
export type GetTeamParticipantsOptions = Options<
  TeamParticipant,
  Exclude<keyof TeamParticipant, 'links' | 'teamName' | 'eventName'>
>
export type AllOptions =
  | GetActivityOptions
  | GetBadgesOptions
  | GetDonationsOptions
  | GetDonorsOptions
  | GetIncentivesOptions
  | GetMilestonesOptions
  | GetTeamParticipantsOptions
