interface BatterTotals {
  sacrifices: number,
  at_bats: number,
  plate_appearances: number,
  singles: number,
  doubles: number,
  triples: number,
  home_runs: number,
  sac_flies: number,
  sac_hits: number,
  stolen_bases: number,
  caught_stealing: number,
  rbi_with_two_outs: number,
  total_bases: number,
  runs: number,
  hits: number,
  rbi: number,
  walks: number,
  strike_outs: number,
  left_on_base: number,
  hit_by_pitch: number,
  ops: number,
  avg: number,
  obp: number,
  slg: number,
  at_bats_per_home_run: number,
  at_bats_per_rbi: number,
  walk_rate: number,
  plate_appearances_per_rbi: number,
  plate_appearances_per_home_run: number,
  extra_base_hits: number,
  stolen_base_average: number,
  strikeout_rate: number,
  ops_string: string,
  slg_string: string,
  obp_string: string,
  avg_string: string,
  batting_highlights: string
}

interface EventInformation {
  temperature: number,
  site: {
    capacity: number,
    surface: string,
    name: string,
    state: string,
    city: string
  },
  attendance: number,
  duration: string,
  status: string,
  season_type: string,
  start_date_time: string
}

export enum League {
  MLB = 'MLB',
  NBA = 'NBA'
}

interface MLBFieldingStat {
  last_name: string,
  first_name: string,
  display_name: string,
  errors: number,
  team_abbreviation: string
}

interface Official {
  position: string,
  first_name: string,
  last_name: string
}

interface MLBPitcher {
  last_name: string,
  first_name: string,
  display_name: string,
  pitch_order: number,
  win: boolean,
  loss: boolean,
  save: boolean,
  hold: boolean,
  era: number,
  whip: number,
  innings_pitched: number,
  hits_allowed: number,
  runs_allowed: number,
  earned_runs: number,
  walks: number,
  intentional_walks: number,
  strike_outs: number,
  home_runs_allowed: number,
  pitch_count: number,
  pitches_strikes: number,
  wild_pitches: number,
  hit_by_pitch: number,
  errors: number,
  team_abbreviation: string
}

interface MLBPlayer {
  last_name: string,
  first_name: string,
  display_name: string,
  position: string,
  bat_order: number,
  sub_bat_order: number,
  sacrifices: number,
  at_bats: number,
  plate_appearances: number,
  singles: number,
  doubles: number,
  triples: number,
  home_runs: number,
  sac_flies: number,
  sac_hits: number,
  stolen_bases: number,
  caught_stealing: number,
  rbi_with_two_outs: number,
  total_bases: number,
  runs: number,
  hits: number,
  rbi: number,
  walks: number,
  strike_outs: number,
  left_on_base: number,
  hit_by_pitch: number,
  team_abbreviation: string,
  ops: number,
  avg: number,
  obp: number,
  slg: number,
  at_bats_per_home_run: number,
  at_bats_per_rbi: number,
  walk_rate: number,
  plate_appearances_per_rbi: number,
  plate_appearances_per_home_run: number,
  extra_base_hits: number,
  stolen_base_average: number,
  strikeout_rate: number,
  ops_string: string,
  slg_string: string,
  obp_string: string,
  avg_string: string,
  batting_highlights: string
}

interface NBAGameTotals {
  minutes: number,
  points: number,
  assists: number,
  turnovers: number,
  steals: number,
  blocks: number,
  field_goals_attempted: number,
  field_goals_made: number,
  three_point_field_goals_attempted: number,
  three_point_field_goals_made: number,
  free_throws_attempted: number,
  free_throws_made: number,
  defensive_rebounds: number,
  offensive_rebounds: number,
  personal_fouls: number,
  field_goal_percentage: number,
  three_point_percentage: number,
  free_throw_percentage: number
}

interface NBAPlayerStats {
  last_name: string,
  first_name: string,
  display_name: string,
  position: string,
  minutes: number,
  points: number,
  assists: number,
  turnovers: number,
  steals: number,
  blocks: number,
  field_goals_attempted: number,
  field_goals_made: number,
  three_point_field_goals_attempted: number,
  three_point_field_goals_made: number,
  free_throws_attempted: number,
  free_throws_made: number,
  defensive_rebounds: number,
  offensive_rebounds: number,
  personal_fouls: number,
  team_abbreviation: string,
  is_starter: boolean,
  field_goal_percentage: number,
  three_point_percentage: number,
  free_throw_percentage: number
}

interface TeamInfo {
  team_id: string,
  abbreviation: string,
  active: boolean,
  first_name: string,
  last_name: string,
  conference: string,
  division: string,
  site_name: string,
  city: string,
  state: string,
  full_name: string
}

interface Data {
  league: League,
  away_team: TeamInfo,
  home_team: TeamInfo,
  away_period_scores: Array<number>,
  home_period_scores: Array<number>,
  officials: Array<Official>
  event_information: EventInformation

}

export interface MLB_Data extends Data {
  league: League.MLB,
  away_errors: number,
  home_errors: number,
  away_batters: Array<MLBPlayer>
  home_batters: Array<MLBPlayer>
  away_pitchers: Array<MLBPitcher>
  home_pitchers: Array<MLBPitcher>
  away_fielding: Array<MLBFieldingStat>
  home_fielding: Array<MLBFieldingStat>
  away_batter_totals: BatterTotals,
  home_batter_totals: BatterTotals
}

export interface NBA_Data extends Data {
  league: League.NBA,
  away_stats: Array<NBAPlayerStats>
  home_stats: Array<NBAPlayerStats>
  away_totals: NBAGameTotals
  home_totals: NBAGameTotals
}
