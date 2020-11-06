# LAB - Class 01
## Project: Notesy
### Author: Lulu Sevignon

### Setup

1. Clone down this repo in your terminal
1. run `npm i` in the root directory
1. add `.env file`

#### .env requirements 

- PORT - Port Number
- MONGODB_URI - URL to the running mongo instance/db

### Running the Application

##### In order to enter a note,run following command:

- `node index.js --add "my note here"`
- `node index.js --add "my note here" --category myNotes`

##### In order to see the full list of notes, run following command:

- All Notes: `node notes.js --list`
- Notes in a category: `node notes.js --list school`
 
##### In order to delete a note, run following command:

`node index.js --delete id` (using the id of the corresponding note you wish to delete)


#####  Please note that you may use either -a or --add, -l or --list, -d or --delete .

#### Tests
- npm test to run test
    - parse() creates a good object
    - valid() respects a proper object
    - valid() rejects an invalid object


### This app is created using the following technologies:
- Node.js
- ES6 Classes
- Persistance using a Mongo Database
- Mongoose Schemas to define and model the data for Mongo
- Test Driven Development, using Jest