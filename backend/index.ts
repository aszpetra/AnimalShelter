import dotenv from 'dotenv'
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import expressSession  from 'express-session';
import cors from 'cors';
import router from './routes'

dotenv.config();
const app = express();

const port = process.env.PORT || 5000; // Use environment variable or default port 5000

// bodyParser
app.use(bodyParser.urlencoded({extended: true}));

// cookieParser
app.use(cookieParser());

const whitelist = ['*', 'http://localhost:4200', 'http://localhost:10021']
const corsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allowed?: boolean) => void) => {
        if (whitelist.indexOf(origin!) !== -1 || whitelist.includes('*')) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS.'));
        }
    },
    credentials: true
};

app.use(cors(corsOptions));

// session
const sessionOptions: expressSession.SessionOptions = {
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false
};

app.use(expressSession(sessionOptions));

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});