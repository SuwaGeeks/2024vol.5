// export const handler = async (event) => {
//     // TODO implement
//     const response = {
//       statusCode: 200,
//       body: JSON.stringify('test3'),
//     };
//     return response;
//   };



// AWS SDKのインポート
const AWS = require('aws-sdk');

// DynamoDBの設定
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const handler = async (event) => {
    // レスポンスデータの作成
    const item = event.body;
    
    // レスポンスデータをbase64でデコード
    const item_decode = json.loads(base64.b64decode(body).decode('utf-8'));

    // DynamoDBにデータを書き込むためのパラメータの設定
    const params = {
        TableName: 'keyGuadian_DB',
        Item: item,
    };

    // DynamoDBにデータを書き込む
    try {
        await dynamoDB.put(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify('Data written to DynamoDB successfully'),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify('An error occurred while writing data to DynamoDB'),
        };
    }
};

module.exports = { handler };
