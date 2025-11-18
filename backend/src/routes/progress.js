const express = require('express');
const router = express.Router();
const pool = require('../db/pool');

// bulk sync endpoint: receive progress array and insert
router.post('/bulk', async (req, res) => {
  const entries = req.body.entries || [];
  if (!Array.isArray(entries)) return res.status(400).json({error:'entries must be array'});
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const insertText = 'INSERT INTO student_progress(student_id, quiz_id, score, time_taken, attempts, synced, created_at) VALUES($1,$2,$3,$4,$5,true,now())';
    for (const e of entries) {
      await client.query(insertText, [e.student_id || null, e.quiz_id || null, e.score || 0, e.time_taken || 0, e.attempts || 1]);
    }
    await client.query('COMMIT');
    res.json({ ok:true, inserted: entries.length });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error(err);
    res.status(500).json({ error:'server' });
  } finally {
    client.release();
  }
});

module.exports = router;
