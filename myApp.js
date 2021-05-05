require("dotenv").config()
//install and setup mongoDB & mongoose and require them
//add mongodb and mongoose to package.json
//store atlas URI atlas cloud database to .env file
//connect to database using this syntax --> mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Create a Model
const Schema = mongoose.Schema
const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
})

let Person = mongoose.model("Person", personSchema)

const brahim = new Person({
  name: "brahim jarallah",
  age: 32,
  favoriteFood: ["Pizza", "Spaghetti"],
})

// Create and Save a Record of a Model

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

const arrayOfPeople = [
  { name: "Brahim", age: 32, favoriteFood: ["pizza", "spaghetti"] },
  { name: "clara", age: 32, favoriteFood: ["pizza", "hamburger"] },
]
const createManyPeople = (arrayOfPeople, people) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) console.log(err)
    done(null, people)
  })
}

const findPeopleByName = (personName, done) => {
  done(null /*, data*/)
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
