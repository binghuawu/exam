#!/bin/sh

DIR_CURRENT=${PWD}
DIR_BACKHOME=${DIR_CURRENT}/backend
DIR_FONTHOME=${DIR_CURRENT}/frontend

#start background first
cd ${DIR_BACKHOME}
chmod +x ./gradlew
./gradlew bootRun &

#goto the TOP directory
cd ${DIR_CURRENT}
#start frontend second
cd ${DIR_FONTHOME}
npm install
npm start
#below cmd:port:9000, non-hot update
#npm run dev
#below cmd equals npm start ,port:9001,hot update.
#npm  prod
