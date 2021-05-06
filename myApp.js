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

// Use model.findOne() to Return a Single Matching Document from Your Database
const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, onePeopleFoodLover) => {
    if (err) return console.log(err)
    done(null, onePeopleFoodLover)
  })
}

// Use model.findById() to Search Your Database By _id
const findPersonById = (personId, done) => {
  Person.findById(personId, (err, peopleFoundById) => {
    if (err) return console.log(err)
    done(null, peopleFoundById)
  })
}

// Perform Classic Updates by Running Find, Edit, then Save
const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger"
  Person.findById(personId, (err, personUpd) => {
    if (err) return console.log(err)
    personUpd.favoriteFoods.push(foodToAdd)
    personUpd.save((err, data) => {
      if (err) return console.log(err)
      done(null, data)
    })
  })
}

// Perform New Updates on a Document Using model.findOneAndUpdate()
const findAndUpdate = (personName, done) => {
  const ageToSet = 20

  Person.findOneAndUpdate(
    { name: personName },
    { age: ageToSet },
    { new: true },
    (err, personAgeSet) => {
      personAgeSet.save((err, data) => {
        if (err) return console.log(err)
        done(null, data)
      })
    }
  )
}

// Delete One Document Using model.findByIdAndRemove
const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, personRemoved) => {
    if (err) return console.log(err)
    done(null, personRemoved)
  })
}

// Delete Many Documents with model.remove()
const removeManyPeople = (done) => {
  const nameToRemove = "Mary"
  Person.remove(nameToRemove, (err, peopleRemoved) => {
    if (err) return console.log(err)
    done(null, peopleRemoved)
  })
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
