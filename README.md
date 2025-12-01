# ecommerce-project
ecommerce for my team`s final exam

### installing necesary depedencies
- Backend App
```bash
cd app
bun i
```

- Frontend
```bash
cd frontend
bun i 
cd ..
```

# Creating mysql user for bun connect (MariaDB Server)

```bash
DROP USER IF EXISTS 'bunapp'@'localhost';
CREATE USER 'bunapp'@'localhost' IDENTIFIED BY '123456';
GRANT ALL PRIVILEGES ON *.* TO 'bunapp'@'localhost';
FLUSH PRIVILEGES;
```