const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
};

// finds all schems in the database
function find() {
  return db("schemes");
}

// implement a method to find a scheme by id
function findById(id) {
  return db("schemes").where({ id }).first();
}

//Resolves to an array of all correctly ordered step for the given scheme
function findSteps(id) {
  return db("schemes").where("scheme_id", id);
}

//Inserts scheme into the database.
function add(scheme) {
  return db("schemes")
  .insert(scheme)
  .then((id) => {
    return findById(id[0])
  });
}

// Updates the scheme with the given id
function update(changes, id) {
  return db("schemes")
  .where({ id })
  .update(changes)
  .then(() => {
    return findById(id);
  })
}

//Removes the scheme object with the provided id
function remove(id) {
  return db("schemes")
  .where({ id }).del();
}