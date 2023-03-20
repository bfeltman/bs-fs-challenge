import type { NextApiRequest, NextApiResponse } from 'next'

const DATA_ENDPOINTS: Record<string, string> = {
  MLB: 'https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json',
  NBA: 'https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json'
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const sport = <string>req.query?.sport;

  if (sport == undefined) {
    res.status(400);
  }

  let results = null;
  try {
    if (results == null) {
      const url = DATA_ENDPOINTS[(<string>sport).toUpperCase()];
      if (url === undefined) {
        res.status(400).send('Bad Request');
      }
    
      results = await (await fetch(url)).json();
    }
  } catch (err) {
    console.error(err);
    res.status(400);
  }
  res.status(200).json(results);
}
