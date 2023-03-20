import useSWR from 'swr';
import { Boxscore } from "./BoxScore";
import { TitleBar } from "./TitleBar";
import { GameSummary } from "./GameSummary";

import { League } from "../interfaces";

import styles from '@/styles/Scoreboard.module.scss'

interface ScoreboardProps {
  league: League;
}

/**
 * The main component for rendering a box score.
 * 
 * @param props 
 * @returns 
 */

function findWinner(awayScore: number, homeScore: number): 'away' | 'home' | null {
  return awayScore > homeScore ? 'away' : 'home';
}

export function Scoreboard(props: ScoreboardProps) {
  const league = props.league;

  const {data, error, isLoading} = useSWR(`http://localhost:3030/games/${league.toLowerCase()}`, fetcher);

  if (error) return <div>Failed to load box score</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return <div>No event found</div>

  let winner = null;

  if (league === League.MLB) {
    winner = findWinner(data.away_batter_totals.runs, data.home_batter_totals.runs);
  } else {
    winner = findWinner(data.away_totals.points, data.home_totals.points);
  }

  return (
    <div className={styles.scoreboard}>
      <div className="flex flex-row h-6">
        <TitleBar data={data} />
      </div>

      <div className="flex flex-row">
        <Boxscore data={data} winner={winner} />
      </div>

      <div className="flex flex-row">
        <GameSummary data={data} />
      </div>
    </div>
  );
}

// Gets the data from the data source and returns the JSON.
const fetcher = (args: any) => fetch(args).then(res => res.json());
