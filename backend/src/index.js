const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { port } = require('./config');
const authRoutes = require('./routes/auth');
const contentRoutes = require('./routes/content');
const progressRoutes = require('./routes/progress');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '1mb' }));

app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/progress', progressRoutes);

app.get('/', (req, res) => res.json({ ok: true, service: 'zylem-backend' }));

app.listen(port, () => console.log(`Backend listening on ${port}`));
