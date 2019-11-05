exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "1GNEK13ZX3p198984",
          make: "GN",
          model: "e2",
          mileage: "10,000",
          status: "clean"
        },
        {
          VIN: "1BZEK13ZX3R277984",
          make: "BZ",
          model: "e3",
          mileage: "20,000",
          status: "clean"
        },
        {
          VIN: "1JPEK13ZX3R255984",
          make: "JP",
          model: "e4",
          mileage: "90,000",
          status: "salvage"
        }
      ]);
    });
};

// VIN, make, model, and mileage, transmission type, status
