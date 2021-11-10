import { Pool } from 'pg'

export const pool = new Pool({
    host: 'ec2-23-23-181-251.compute-1.amazonaws.com',
    user: 'sfucqiugkdqahx',
    password: '323d79829a7c2d97897a31cd4245f148227098efd4c4ac1e59638a1a2ce5f913',
    database: 'd4mot446jsre7m',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})