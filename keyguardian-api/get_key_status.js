// export const handler = async (event) => {
//     // TODO implement
//     const 
//     const response = {
//       statusCode: 200,
//       body: JSON.stringify('test4'),
//     };
//     return response;
//   };

  
// AWS SDKのインポート
const AWS = require('aws-sdk');

// DynamoDBの設定
const dynamoDB = new AWS.DynamoDB.DocumentClient();

export const handler = async (event) => {
    // クエリパラメータからlabIdを取得
    const labId = event.queryStringParameters && event.queryStringParameters.labId;

    if (!labId) {
        return {
            statusCode: 400,
            body: JSON.stringify('Missing labId query parameter'),
        };
    }

    // DynamoDBからデータを取得
    const params = {
        TableName: 'TABLE_NAME',
        Key: {
            'labId': labId,
        },
    };

    try {
        const data = await dynamoDB.get(params).promise();

        if (data.Item) {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    labId: data.Item.labId,
                    status: data.Item.status,
                    lastUpdated: data.Item.lastUpdated,
                }),
            };
        } else {
            return {
                statusCode: 404,
                body: JSON.stringify({
                    error: 'Key not found.',
                }),
            };
        }
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify('An error occurred while fetching data from DynamoDB'),
        };
    }
};
