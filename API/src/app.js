const express = require('express');
const bodyPareser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const router = express.Router();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions)); 

//Conecta ao banco
mongoose.connect('mongodb+srv://gabrieltgouveia:faisca123@cluster0-fbclv.mongodb.net/test?retryWrites=true&w=majority');

//Carregar models
const Cow = require('./models/cows');
const Filial = require('./models/filial');
const CowFilial = require('./models/cow-filial');

//Carrega rotas
const index = require('./routes/index-route');
const cowsRoutes = require('./routes/cows-route');
const filialRoutes = require('./routes/filial-route');
const cowFilialRoutes = require('./routes/cow-filial-route');

app.use(bodyPareser.json());
app.use(bodyPareser.urlencoded({ extended: false }));

app.use('/',index);
app.use('/cows',cowsRoutes);
app.use('/filiais',filialRoutes);
app.use('/cow-filial',cowFilialRoutes);

module.exports = app;
