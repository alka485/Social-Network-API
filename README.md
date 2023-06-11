## Social Network Api

## Description

This is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, the Mongoose ODM, and Moment.js to format timestamps. The seed data is created using Insomnia.

To see how the API works using Insomnia, see the walk-through demonstration videos here:

https://drive.google.com/file/d/1lxJUWoTgDk3jhLlJq3c6_XCIWDs2uNQW/view


## Table of Contents

* Application Preview ⭐
* Features 📋
* Installation 🗳

### Tests

## Application Preview

Demo GIF
[Demo link](./Assets/Demo.gif)

## Features

1.This is a social network API that uses MongoDB, a NoSQL database, which allows the website to handle large amounts of unstructured data.

2.When the command to invoke the application is entered, the Mongoose models are synced to the MongoDB database.

[MongoCompass](./Assets/MongoDB%20Compass%20socialnetwork.png)

3.When API GET routes for users and thoughts are opened in Insomnia, the data for each of the routes is displayed in formatted JSON.

4.User, Friend, Thought, and Reaction routes are created to create the database and test the API on Insomnia.

5.User Routes - a user can create a user with a username and valid email address. When created, the user is assigned a unique user ID.

## Installation 

* Download or clone repository to use this application on local machine.

* Node.js and MongoDB is required to run the application

* To install necessary dependencies, navigate to the root directory and run the following command: npm i
