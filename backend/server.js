const express = require('express');
const cors = require('cors');
const { default: test } = require('node:test');
const app = express();
const sgMail = require('@sendgrid/mail')
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(cors());
app.use(express.json());
// Define route for file download
app.get('/download', (req, res) => {

    res.download('familyOrg.apk', (err) => {
        if (err) {
            // Hiba esetén kezeljük le
            console.error('Error downloading file:', err);
            res.status(500).send('Internal Server Error');
        }
    });
});
app.post('/send-email', (req, res) => {
    console.log(sgMail);
    const { subject, text } = req.body;
    const msg = {
        to: "citrom333@gmail.com",
        from: 'citrom333@gmail.com',
        subject: subject,
        text: text,
        html: `<strong>${text}</strong>`,
    };

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent');
            res.status(200).json({ success: true, message: 'Email sent successfully.' });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ success: false, message: 'Failed to send email.' });
        });
});

// Serve your Angular app
app.use(express.static('../portfoliopageapp/dist/portfoliopageapp'));

const port = process.env.PORT || 3500;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});