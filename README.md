# videoapp
Media App VOD is an app which displays a list of movies to the user and also keeps track of the list of videos a user has watched.

Application Features

1. Application displays a list of videos in a horizontal carousel on the home page which is scrollable.
2. User is able to select a video to play in full screen.
3. The user is able to see a list of videos they have previously watched on the History view.

Prerequisites: 
1. NodeJs - For installing node modules and running the server.
2. Git - For cloning the repository.
3. MongoDb - After installing MongoDb, run 'mongod.exe' located inside \MongoDB\Server\3.4\bin. Create a folder by name for eg: vod inside C drive. Cd to the directory and run the mongoDb server by command 'mongod --dbpath C:\vod\data --port 27017'.

Installing and Running the App

1. Clone the repository using 'git clone https://github.com/shaivi-v/videoapp.git' or 'git clone git@github.com:shaivi-v/videoapp.git'.
2. Cd to the project directory and run 'npm install'.
3. After successfully downloading all the node modules, run 'npm run start'. This will start the node js server at port 8080 and the application would be accessible at localhost:8080.

