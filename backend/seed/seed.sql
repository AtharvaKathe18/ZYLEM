INSERT INTO users (name,email,role) VALUES ('Teacher One','teacher@example.com','teacher') ON CONFLICT DO NOTHING;
INSERT INTO users (name,email,role) VALUES ('Student One','student@example.com','student') ON CONFLICT DO NOTHING;

INSERT INTO content_packs (slug,title,language,size_bytes,published) VALUES ('pack-1','Number Sense Grade 6','en', 102400, true) ON CONFLICT DO NOTHING;
INSERT INTO quizzes (pack_id,title,questions) VALUES ((SELECT id FROM content_packs WHERE slug='pack-1'), 'Basics of Numbers', '[{"q":"2+3=?","choices":["4","5","6"],"answer":1}]') ON CONFLICT DO NOTHING;
