const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  userId: INT,
  userName: text,
  userRepositoriesNames: text
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */ repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  if (repoSchema.userRepositoriesNames !== repo) {
    repoSchema.userRepositoriesNames = repo;
  }
}

module.exports.save = save;