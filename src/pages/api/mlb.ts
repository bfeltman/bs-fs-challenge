import type { NextApiRequest, NextApiResponse } from 'next'

const MLB_API_URL = 'https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json'

type Data = {
  name: string
}

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const response = await (await fetch(MLB_API_URL)).json();
  
//   res.status(200).json(response);
// }