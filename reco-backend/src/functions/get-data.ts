import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { executeDynamodDBCommand } from "../libs/command-executors";

export const handler: AWSLambda.APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const cityName = event.queryStringParameters?.cityName;

    if (!cityName) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "City name is required." }),
      };
    }

    const params = {
      TableName: "CityWeather",
      Key: { cityId: cityName },
    };

    const command = new GetCommand(params);
    const result = await executeDynamodDBCommand(command);

    if (!result.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "City not found." }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error." }),
    };
  }
};
