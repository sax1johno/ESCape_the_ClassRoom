/**
* Use this function to decorate the express API gateway / application with any 
* overrides you'd like.  You can add global middleware, custom routes, or any other 
* features you'd like.
**/
const socketIo = require("socket.io");        // web socket external module
const easyrtc = require("open-easyrtc");      // EasyRTC external module

module.exports = function(app) {

	/** START CUSTOM APP CONFIG **/
	// app.use(some_middlware);
	// app.get("/test", (req, res) => { res.send("testing")});
	// // Start Socket.io so it attaches itself to Express server
	// const server = require('http').createServer(app);
	// const io = require('socket.io')(server);
	// // const socketServer = io.listen(process.env.PORT);
	// const myIceServers = [
	// 	{"urls":"stun:stun1.l.google.com:19302"},
	// 	{"urls":"stun:stun2.l.google.com:19302"},
	// 	// {
	// 	//   "urls":"turn:[ADDRESS]:[PORT]",
	// 	//   "username":"[USERNAME]",
	// 	//   "credential":"[CREDENTIAL]"
	// 	// },
	// 	// {
	// 	//   "urls":"turn:[ADDRESS]:[PORT][?transport=tcp]",
	// 	//   "username":"[USERNAME]",
	// 	//   "credential":"[CREDENTIAL]"
	// 	// }
	// ];
	// easyrtc.setOption("appIceServers", myIceServers);
	// easyrtc.setOption("logLevel", "debug");
	// easyrtc.setOption("demosEnable", false);

	// // Overriding the default easyrtcAuth listener, only so we can directly access its callback
	// easyrtc.events.on("easyrtcAuth", (socket, easyrtcid, msg, socketCallback, callback) => {
	// 	easyrtc.events.defaultListeners.easyrtcAuth(socket, easyrtcid, msg, socketCallback, (err, connectionObj) => {
	// 		if (err || !msg.msgData || !msg.msgData.credential || !connectionObj) {
	// 			callback(err, connectionObj);
	// 			return;
	// 		}

	// 		connectionObj.setField("credential", msg.msgData.credential, {"isShared":false});

	// 		console.log("["+easyrtcid+"] Credential saved!", connectionObj.getFieldValueSync("credential"));

	// 		callback(err, connectionObj);
	// 	});
	// });

	// // To test, lets print the credential to the console for every room join!
	// easyrtc.events.on("roomJoin", (connectionObj, roomName, roomParameter, callback) => {
	// 	console.log("["+connectionObj.getEasyrtcid()+"] Credential retrieved!", connectionObj.getFieldValueSync("credential"));
	// 	easyrtc.events.defaultListeners.roomJoin(connectionObj, roomName, roomParameter, callback);
	// });

	// // Start EasyRTC server
	// easyrtc.listen(app, io, null, (err, rtcRef) => {
	// 	console.log("Initiated");

	// 	rtcRef.events.on("roomCreate", (appObj, creatorConnectionObj, roomName, roomOptions, callback) => {
	// 		console.log("roomCreate fired! Trying to create: " + roomName);

	// 		appObj.events.defaultListeners.roomCreate(appObj, creatorConnectionObj, roomName, roomOptions, callback);
	// 	});
	// });

	/**** DO NOT MODIFY BELOW THIS LINE!!!!!!! ******/
	return app;
}