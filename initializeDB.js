require('dotenv').config();

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoDB = process.env.mongoDB;
const Message = require('./models/message');

const textMessage = (text, author, added) => {
  return {
    text,
    author,
    added,
  };
};

const messages = [
  textMessage('Hi There!', 'Amando', new Date()),
  textMessage('Hello World!', 'Charles', new Date()),
];

main().catch((err) => {
  console.log(err);
});
async function main() {
  await mongoose.connect(mongoDB);
  for (m of messages) {
    await Message.create(m);
  }
  mongoose.connection.close();
}



