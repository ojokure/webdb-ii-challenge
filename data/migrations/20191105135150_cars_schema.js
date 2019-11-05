exports.up = function(knex) {
  return knex.schema.createTable("cars", table => {
    table.increments("car_id");
    table
      .string("VIN", 35)
      .unique()
      .notNullable();
    table
      .string("make")
      .unique()
      .notNullable();
    table.string("model").notNullable();
    table.integer("mileage").notNullable();
    table.text("transmission type").notNullable();
    table.tex("status").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};

// VIN, make, model, and mileage.
