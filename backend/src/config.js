require('dotenv').config();
module.exports = {
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET || 'devsecret',
  databaseUrl: process.env.DATABASE_URL || 'postgres://postgres:postgres@db:5432/zylem'
};
