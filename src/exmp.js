import request from 'supertest';
import app from './app.js';

const respond = await request(app).get('/api/user');
console.log(respond.body)