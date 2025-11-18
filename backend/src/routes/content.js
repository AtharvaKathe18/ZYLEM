const express = require('express');
const router = express.Router();
const pool = require('../db/pool');

router.get('/packs', async (req, res) => {
  try {
    const r = await pool.query('SELECT id, slug, title, language, published FROM content_packs ORDER BY created_at DESC');
    res.json(r.rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({error:'server'});
  }
});

router.get('/packs/:slug', async (req,res) => {
  const { slug } = req.params;
  try {
    const r = await pool.query('SELECT * FROM content_packs WHERE slug=$1', [slug]);
    if (r.rowCount===0) return res.status(404).json({error:'not found'});
    res.json(r.rows[0]);
  } catch(e){ res.status(500).json({error:'server'}); }
});

module.exports = router;
