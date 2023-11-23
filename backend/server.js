const express = require('express');
const app = express();

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
// Serve your Angular app
app.use(express.static('../portfoliopageapp/dist/portfoliopageapp'));

const port = process.env.PORT || 3500;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});