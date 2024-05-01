const express = require('express');
const axios = require('axios');
const cors = require('cors');


const app = express();
app.use(cors());
const port = 3000;


app.use(express.json());


app.get('/api/data/id/:id', async (req, res) => {
    try {
       
        const { id } = req.params;

       
        const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

     
        const response = await axios.get(apiUrl);

        res.json(response.data);
    } catch (error) {
        
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data from the API' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

const corsOptions = {
    origin: 'http://localhost:5173',
  };
  
  app.use(cors(corsOptions));