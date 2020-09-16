<!-- devDependencies -->
npm install -D babel-core@6.23.1 babel-loader@6.3.2 babel-preset-env@1.7.0
npm install -D babel-preset-react@6.23.0 webpack@2.2.1

    "babel-core": "^6.23.1",
    "babel-loader": "^6.3.2",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.23.0",
    "webpack": "^2.2.1"
<!-- dependencies -->
npm install axios express mysql react react-dom

    "axios": "^0.19.2",
    "express": "^4.15.0",
    "mysql": "^2.16.0",
    "react": "^15.4.2",
    "react-dom": "^15.4.2",
    "sqlite3": "^4.0.6"

<!-- scripts -->
  "scripts": {
    "react-dev": "webpack -d --watch",
    "start": "nodemon server/index.js",
    "seed": "mysql -u root< schema.sql"
  },

<!-- terminal   -->
start server: npm start;
start bundle: npm run react-dev;
run db: npm urn seed;
start mysql: mysql -u root;


