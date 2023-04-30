import { dbConnection } from '@/config/db';

export default async function handler(req: any, res: any) {
  const data = req.body;

  const sql = "INSERT INTO '" + process.env.DB_NAME + "' VALUES ('" + data.senderName + "','" + data.senderEmail + "','" + data.recipientName + "','" + data.recipientEmail + "','" + data.message + "')";

  dbConnection.query(sql, function (error: any, result: any) {
    if (error) {
      return res.send({
        status: 'failed',
        message: error,
      });
    } else {
      return res.send({
        status: 'success',
        message: 'successfully added',
      });
    }
  });
}
