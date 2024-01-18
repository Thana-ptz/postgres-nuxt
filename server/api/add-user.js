const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
  connectionString: "postgres://default:JHzhj0iP4gOA@ep-bold-fire-08860045-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require",
});

const addUser = async (name, email, image) => {
  try {
    const result = await pool.query(
      'INSERT INTO users (name, email, image) VALUES ($1, $2, $3) RETURNING *',
      [name, email, image]
    );

    const addedUser = result.rows[0];
    console.log('User added successfully:', addedUser);
  } catch (error) {
    console.error('Error adding user:', error);
  }
};

// Example usage:
addUser('John Doe', 'john@example.com', 'https://example.com/john.jpg');
