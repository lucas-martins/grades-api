import mongoose from 'mongoose';

import gradesModel from './gradesModel.js';
import dotenv from 'dotenv';
dotenv.config();

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGO_URL;
db.grades = gradesModel(mongoose);

export { db };
