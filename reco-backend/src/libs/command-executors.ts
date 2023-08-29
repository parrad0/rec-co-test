import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

export const executeDynamodDBCommand = async (command) => {
  const DBclient = new DynamoDBClient({ region: process.env.REGION });
  const ddbDocClient = DynamoDBDocumentClient.from(DBclient);
  let result;

  try {
    result = await ddbDocClient.send(command);
  } catch (error) {
    throw error;
  } finally {
    ddbDocClient.destroy();
    DBclient.destroy();
  }

  return result;
};
