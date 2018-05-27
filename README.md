## WhatPulse

### Installation
```bash
yarn add whatpulse
npm i whatpulse -S
```

### Usage
#### get a Team:
```js
const wp = require('whatpulse');
async function team(){
    console.log(await wp.getTeam({team: "reddit"}))
}
team();
```
Outputs all the Team Stats or an error, if there is one.

#### get a User:
```js
const wp = require('whatpulse');
async function user(){
    console.log(await wp.getUser({user: "dunklesToast"}))
}
user();
```
Outputs all the User Stats or an error, if there is one.

#### get Pulse Information:
```js
const wp = require('whatpulse');
async function pulse(){
    console.log(await wp.getPulses({user: "dunklesToast"}))
}
pulse();
```
Outputs all the User Stats or an error, if there is one.


### LICENSE
This project is licensed under the MIT license. Do whatever you want to do with this library. I do not take any responsibility for any damage you make with it.
Detailed information about the License can be found in the LICENSE file.