# React + Vite
# Inventory Management

Website application that use vite react js as frameword and frontend, the application will connect to mysql database. In the Application you can add item, see all the item that you have added, edit the properties/data and delete the data.

## Instalation
### Prerequisites
After cloning the project, Create your databases and adjust the database configuration on the db.js, In this project we use laragon database, with the table query:
```
CREATE TABLE items (
    id VARCHAR(50) NOT NULL PRIMARY KEY, 
    name VARCHAR(100) NOT NULL,          
    type VARCHAR(50) NOT NULL,           
    price DECIMAL(10, 2) NOT NULL,      
    quantity INT NOT NULL               
);
```
## Available Scripts

In the backend directory you can run:

### `npm install express mysql body-parser cors.`

install the dependencies for the back end

### `node server.js`
for running the backend

In the item-management-app directory you can run:

### `npm install`
install the dependencies for the front end

### `npm run dev`
runs the app in development mode<br />
Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.

