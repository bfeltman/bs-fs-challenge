import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

import { getItemFromCache, saveItemToCache } from '../cache';

const STATS_URLS: Record<string, string> = {
  MLB: 'https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json',
  NBA: 'https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json'
}

export async function getGames(req: Request, res: Response, next: NextFunction): Promise<any> {
  const league: string = req.params.league;

  let games = null;

  // Get from cache first, if not there, get from source.
  const cacheResponse = await getItemFromCache(league);

  // Cache is empty so go get the data from the server.
  if (cacheResponse == null) {
    const response: AxiosResponse = await axios.get(STATS_URLS[league.toUpperCase()]);
    
    const ttl = new Date();
    ttl.setSeconds(Number(ttl.getSeconds()) + 15);
 
    await saveItemToCache({
      id: league,
      data: JSON.stringify(response.data),
      ttl: Math.round(ttl.getTime() / 1000)
    });

    games = response.data;
  } else {
    const data = cacheResponse.data.S;
    games = JSON.parse(data!);
  }
  
  return res.status(200).json(games);
}
