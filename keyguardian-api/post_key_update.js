// AWS SDKのインポート
const AWS = require('aws-sdk');

// DynamoDBの設定
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const handler = async (event) => {
    // レスポンスデータの作成
    const item = event.body;

    try {
        // レスポンスデータをbase64でデコード
        let item_decode = Buffer.from(item, 'base64').toString('utf-8');
        
        // デコードされた文字列をログに出力
        console.log('Decoded string:', item_decode);
        
        // デコードされた文字列をJSONオブジェクトに変換
        item_decode = JSON.parse(item_decode);
        
        // DynamoDBにデータを書き込むためのパラメータの設定
        const params = {
            TableName: 'keyGuadian_DB',
            Item: item_decode,
        };

        // DynamoDBにデータを書き込む
        await dynamoDB.put(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify('Data written to DynamoDB successfully'),
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        };
    }
};

module.exports = { handler };
