import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
//import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
const data: {[key: string]: any} = require('./mock.json');

import schema from './schema';

const getProductsById: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const { id } = event.pathParameters;
  const product = data.products.find(el => el.id === Number(id));
  return {
    statusCode: 200,
    body: JSON.stringify(
      product
    ),
  };
}

export const main = middyfy(getProductsById);
