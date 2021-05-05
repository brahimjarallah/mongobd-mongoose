require("dotenv").config()
//install and setup mongoDB & mongoose and require them
//add mongodb and mongoose to package.json
//store atlas URI atlas cloud database to .env file
//connect to database using this syntax --> mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
let mongoose = require("mongoose")

// Install and Set Up Mongoose

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Create a Model
let Schema = mongoose.Schema
let personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
})

let Person = mongoose.model("Person", personSchema)

// Create and Save a Record of a Model
const brahim = new Person({
  name: "brahim jarallah",
  age: 32,
  favoriteFood: ["Pizza", "Spaghetti"],
})

const createAndSavePerson = (done) => {
  brahim.save((err, data) => {
    if (err) {
      console.log(err)
    } else {
      done(null, data)
    }
  })
}

// Create Many Records with model.create()

var arrayOfPeople = [
  {
    name: "JImmy",
    age: 44,
    favoriteFood: ["Fruit", "Cereal", "Italian", "Chocolate"],
  },
  {
    name: "Johnny",
    age: 17,
    favoriteFood: ["BBQ", "Salad", "Italian", "Choclate"],
  },
]

var createManyPeople = function (arrayOfPeople, done) {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) {
      return console.log(err)
    }
    done(null, people)
  })
}
// Use model.find() to Search Your Database

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, peopleFound) => {
    if (err) {
      return console.log(err)
    } else {
      done(null, peopleFound)
    }
  })
}

const findOneByFood = (food, done) => {
  done(null /*, data*/)
}

const findPersonById = (personId, done) => {
  done(null /*, data*/)
}

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger"

  done(null /*, data*/)
}

const findAndUpdate = (personName, done) => {
  const ageToSet = 20

  done(null /*, data*/)
}

const removeById = (personId, done) => {
  done(null /*, data*/)
}

const removeManyPeople = (done) => {
  const nameToRemove = "Mary"

  done(null /*, data*/)
}

const queryChain = (done) => {
  const foodToSearch = "burrito"

  done(null /*, data*/)
}

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person
exports.createAndSavePerson = createAndSavePerson
exports.findPeopleByName = findPeopleByName
exports.findOneByFood = findOneByFood
exports.findPersonById = findPersonById
exports.findEditThenSave = findEditThenSave
exports.findAndUpdate = findAndUpdate
exports.createManyPeople = createManyPeople
exports.removeById = removeById
exports.removeManyPeople = removeManyPeople
exports.queryChain = queryChain
