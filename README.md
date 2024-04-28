# ESCape the ClassRoom (ESC-CR)

A framework for creating Educational Escape Rooms in Virtual Reality using the A-Frame JS framework.

## Running the Application

There are two ways to run the application.  If you have Docker installed, you can simply use `docker compose` to run the application in a Dockerfile.  This is not necessary for single-player game mode, but useful for multi-player and hosted versions of the game.

### Running with Docker

From the root directory, run the following command:

`docker compose up`

### Running Locally

If you want to run the application on your machine, you'll first need to clone this repository and its submodules:

`git clone --recurse-submodules git@github.com:sax1johno/ESCape_the_ClassRoom.git`

Then run the following commands from the root director:

`npm install && npm run build && npm start`

This will install the necessary modules, build the latest version of the application, and run it.  Once you've done the initial build, you can run it again by just using `npm start`.

## Building Web2VR

This project includes a custom build of Web2VR that has some significant enhancements.  To build the latest version of the library, run the following commands from the root directory of this repository:

`cd web2vr && npm run build && npm run dev`

This will build both the development and production versions of the web2vr library.  Once you've built the new version, you'll need to re-build the ESCape The ClassRoom project to get the changes:

`npm run build`

Then you can start the application again:

`npm start`



## Folder Descriptions
The current main application code lives in the `networked-aframe` directory. The `./networked-aframe/server` directory contains the server application (easyrtc-server.js). 

The frontend code using the AFrameJS framework can be found in the `./networked-aframe/public` directory.  `index.html` is the entrypoint, with components contained in various `js` files throughout the project.
