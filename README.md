# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run

```


# instructions to run this project (ubuntu 20.04)

## clone the project

```
git clone https://github.com/denisluciano30/AirGarageAPI
```

## if you not have adonis, run 

```
npm i -g @adonisjs/cli
```

## install dependences

```
npm install
```

## if you not have mysql on computer
https://support.rackspace.com/how-to/install-mysql-server-on-the-ubuntu-operating-system/
### Install the MySQL server by using the Ubuntu operating system package manager:

```
sudo apt-get update
sudo apt-get install mysql-server
```
The installer installs MySQL and all dependencies.


### If the secure installation utility does not launch automatically after the installation completes, enter the following command:
```
sudo mysql_secure_installation utility
```

### After the installation is complete, you can start the database service by running the following command. If the service is already started, a message informs you that the service is already running:
```
sudo systemctl start mysql
```

### Set the root password

```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
```
Where root as your user localhost as your URL and password as your password

Then run this query to refresh privileges:
```
flush privileges;
```

### login on mysql

```
mysql -u root -p
```

### then create db
```
CREATE DATABASE airgaragedb;
``` 


## .env
copy file .env.example and rename to .env and replace keys
```
cp .env.example .env
```


## generate api key
```
adonis key:generate
```

## run migrations

```
adonis migration:run
```

## To run project

```
adonis serve --dev
```
