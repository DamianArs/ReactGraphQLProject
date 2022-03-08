const faker = require("faker");

module.exports = function () {
  const nodes = {
    nodes: [
      {
        name: "First",
        nodes: [
          {
            name: "FirstOne",
            nodes: [
              {
                name: "FirstFirstOne",
                nodes: [{ name: "TTT1" }, { name: "TTT2" }],
              },
              { name: "FirstFirstTwo" },
              { name: "FirstFirstThird" },
            ],
          },
          { name: "FirstTwo" },
          { name: "FirstThird" },
        ],
      },
      {
        name: "Second",
      },
      {
        name: "Third",
      },
      {
        name: "Fourth",
        nodes: [
          { name: "FourthOne" },
          { name: "FourthTwo" },
          { name: "FourthThird" },
          { name: "FourthFour" },
        ],
      },
    ],
    pagination: {
      page: 0,
      perPage: 5,
    },
  };
  return nodes;
};
