import {it, expect, describe} from 'vitest';
import request from 'supertest';

import app from '../../src/app.js'

describe('test GET /user', () => {

    it('should be an array', async() => {
        const respond = await request(app).get('/api/user');
        expect(Array.isArray(respond.body)).toEqual(true)
    })

}) 