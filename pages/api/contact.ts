import { transporter } from '@/config/nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const data = req.body;
    if (!data.senderName || !data.senderEmail || !data.recipientName || !data.recipientEmail || !data.message) {
      return res.status(400).json({ message: 'Bad Request' });
    }
    try {
      await transporter.sendMail({
        from: data.senderEmail,
        to: data.recipientEmail,
        subject: `Greeting From ${data.senderName}`,
        text: data.message,
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Bad Request' });
    }
  }
  return res.status(400).json({ message: 'Bad Request' });
}
