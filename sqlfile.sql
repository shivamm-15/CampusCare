Create database stocksim
Use stocksim
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  balance DECIMAL(15, 2) DEFAULT 100000.00,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE holdings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  symbol VARCHAR(20) NOT NULL,
  quantity INT NOT NULL DEFAULT 0,
  avg_buy_price DECIMAL(15,2) NOT NULL DEFAULT 0.00,
  FOREIGN KEY (user_id) REFERENCES users(id),
  UNIQUE KEY unique_user_stock (user_id, symbol)
);

CREATE TABLE transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  symbol VARCHAR(20) NOT NULL,
  type ENUM('buy','sell') NOT NULL,
  quantity INT NOT NULL,
  price_at_time DECIMAL(15,2) NOT NULL,
  total_amount DECIMAL(15,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE watchlist (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  symbol VARCHAR(20) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  UNIQUE KEY unique_user_watchlist (user_id, symbol)
);
select * from users
assignmentsassignments
SELECT * FROM holdings;
SELECT * FROM transactions;
SELECT balance FROM users;