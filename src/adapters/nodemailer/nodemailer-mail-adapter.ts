import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2e1b927765ec1a",
      pass: "bab7dcaad361a5"
    }
  });



export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject,body}: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <feedget@feedget.com>",
      to: "Victor Martins <vitor_jhoul@hotmail.com>",
      subject,
      html: body,
    });
  }
}
