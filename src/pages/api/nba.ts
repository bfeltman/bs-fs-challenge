import type { NextApiRequest, NextApiResponse } from 'next'

const NBA_API_URL = 'https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json'

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const response = await (await fetch(NBA_API_URL)).json();
//   res.status(200).json(response);
// }
