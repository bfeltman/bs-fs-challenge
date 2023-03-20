
import { DynamoDBClient, PutItemCommandInput, PutItemCommand, QueryCommand, QueryCommandInput } from '@aws-sdk/client-dynamodb';

const TableName = 'barstool-fullstack-challenge';

const client = new DynamoDBClient({ 
  region: "us-west-2",
  credentials: {
    accessKeyId: Buffer.from('QUtJQTRYRUdWUE8zR0xBWUVHTTY=', 'base64').toString(),
    secretAccessKey: Buffer.from('VEZTQXFsMElUSExpR3hQeWZZM1BWbG42MGlhejArbkdrb0ZGaEVCMw==', 'base64').toString()
  }
});

/**
 * Fetches an item from the cache. DynamoDB will delete an values with expiring TTL but it's
 * not always on time so we filter out items in the past.
 * 
 * @param key 
 * @returns 
 */
export async function getItemFromCache(key: string) {
  const input: QueryCommandInput = {
    ExpressionAttributeNames: {
      '#ttl': 'ttl'
    },
    ExpressionAttributeValues: {
      ':key': {
        S: key
      },
      ':now': {
        N: (Date.now() / 1000).toString()
      }
    },
    FilterExpression: '#ttl > :now',
    KeyConditionExpression: 'id = :key',
    Limit: 1,
    TableName
  }
  const command = new QueryCommand(input);
  const response = await client.send(command);
  const item = response.Items?.length ? response.Items[0] : null;
  return item;
}

export async function saveItemToCache(item: { id: string, data: any, ttl: number }) {
  const input: PutItemCommandInput = {
    Item: {
      id: {
        S: item.id
      },
      data: {
        S: item.data
      },
      ttl: {
        N: item.ttl.toString()
      }
    },
    TableName
  }
  const command = new PutItemCommand(input);
  const response = await client.send(command);
}
