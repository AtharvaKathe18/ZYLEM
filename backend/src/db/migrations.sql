CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT,
  role TEXT DEFAULT 'teacher',
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS content_packs (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  language TEXT DEFAULT 'en',
  size_bytes INT DEFAULT 0,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS quizzes (
  id SERIAL PRIMARY KEY,
  pack_id INT REFERENCES content_packs(id) ON DELETE CASCADE,
  title TEXT,
  questions JSONB,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS student_progress (
  id SERIAL PRIMARY KEY,
  student_id INT REFERENCES users(id) ON DELETE SET NULL,
  quiz_id INT REFERENCES quizzes(id) ON DELETE CASCADE,
  score INT,
  time_taken INT,
  attempts INT DEFAULT 1,
  synced BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now()
);
