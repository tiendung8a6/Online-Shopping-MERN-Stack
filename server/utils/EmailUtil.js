//CLI: npm install nodemailer --save
const nodemailer = require('nodemailer');
const MyConstants = require('./MyConstants');
const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com', // Thay đổi host thành máy chủ SMTP của Hotmail
  port: 587, // Thay đổi cổng thành cổng của Hotmail (587)
  secure: false, // Sử dụng STARTTLS nên không cần secure
  auth: {
    user: MyConstants.EMAIL_USER, // Thay đổi tên người dùng thành địa chỉ email Hotmail của bạn
    pass: MyConstants.EMAIL_PASS // Thay đổi mật khẩu thành mật khẩu email Hotmail của bạn
  }
});
const EmailUtil = {
  send(email, id, token) {
    const text = 'Thanks for signing up, please input these informations to activate your account:\n\t .id: ' + id + '\n\t .token: ' + token;
    return new Promise(function (resolve, reject) {
      const mailOptions = {
        from: MyConstants.EMAIL_USER,
        to: email,
        subject: 'Signup | Verification',
        text: text
      };
      transporter.sendMail(mailOptions, function (err, result) {
        if (err) reject(err);
        resolve(true);
      });
    });
  }
};
module.exports = EmailUtil;