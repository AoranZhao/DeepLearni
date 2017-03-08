# DeepLearni.ng Coding

---

## About

** DeepLearni.ng ** is a demo project for the MEAN stack with facebook sdk and graph API granted appropiate permissions. 

## Install
### npm
```
npm install
```
You could use this command download and install dependencies, which list in package.json file.

### Config
Default port number is 4000. You could change it in config.js file if you want set it as other port number.

### Run
```
node index
```
or
```
nodemon
```
You could set server up via "node index". Strongly suggest use "nodemon" to set server up.

### Visit
```
http://localhost:4000/
```
Launch a browser and access website via this URL.

### API
```
GET http://localhost:4000/api/influencers?fb_id=<some id>
```
Returns a list of all of the influencers’ ids with a confidence rating, one per line.
```
GET http://localhost:4000/api/influencers/most_influential
```
Returns (all the data) from the influencer who is ranked highest by your measure.

(deprecated)
Facebook Graph API v2.8 change /me/friends as get a list of friends who use same APP, /me/taggable_friends and /me/invitable_friends get a list of friends tagged and invited, in which id is token, which can not be decrypt to user id. Privacy policy has been improved by Facebook, and the way to get 2nd degree friends list and those information is blocked.

### TEST
Test combination is Karma and Jasmine. Test file locate in /test. karma.conf.js in root dirtory is test configuration file.
Install tools listed in package.json, section "devDependencies".
Run test script via
```
karma start karma.conf.js
```