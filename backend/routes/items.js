const express = require('express');
const router = express.Router();
const db = require('../db');

// Fetch all items
router.get('/', (req, res) => {
  db.query('SELECT * FROM items', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Add a new item
router.post('/', (req, res) => {
    const { id, name, type, price, quantity } = req.body; // Tambahkan id
    db.query(
      'INSERT INTO items (id, name, type, price, quantity) VALUES (?, ?, ?, ?, ?)',
      [id, name, type, price, quantity],
      (err) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Item added successfully!' });
      }
    );
  });
  

// Delete an item
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM items WHERE id = ?', [id], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Item deleted successfully!' });
  });
});

// Update an item
router.put('/:id', (req, res) => {
    const { name, type, price, quantity } = req.body;
    const { id } = req.params;
    db.query(
      'UPDATE items SET name = ?, type = ?, price = ?, quantity = ? WHERE id = ?',
      [name, type, price, quantity, id],
      (err) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'Item updated successfully!' });
      }
    );
  });  

module.exports = router;
