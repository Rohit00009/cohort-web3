const express = require("express");
const app = express();

var users = [
  {
    name: "joe",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  const joeKidneys = users[0].kidneys;
  const numberOfKidneys = joeKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < joeKidneys.length; i++) {
    if (joeKidneys[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }

  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

app.put("/", function (req, res) {
  if (isThereAtleastOneKidneyIsUnhealthy()) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys[i].healthy = true;
    }
    res.json({ msg: "All kidneys are now healthy!" });
  } else {
    res.status(411).json({
      msg: "All kidneys are already healthy!",
    });
  }
});

app.delete("/", function (req, res) {
  if (isThereAtleastOneKidneyIsUnhealthy()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({ msg: "Done!" });
  } else {
    res.status(411).json({
      msg: "You have no bad kidney!",
    });
  }
});

function isThereAtleastOneKidneyIsUnhealthy() {
  let atleastOneKidneyIsUnhealthy = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastOneKidneyIsUnhealthy = true;
    }
  }
  return atleastOneKidneyIsUnhealthy;
}

// function isThereAtleastOneKidneyHealthy() {
//   let atleastOneKidneyHealthy = false;
//   for (let i = 0; i < users[0].kidneys.length; i++) {
//     if (!users[0].kidneys[i].healthy) {
//       atleastOneKidneyIsHealthy = true;
//     }
//   }
//   return atleastOneKidneyIsHealthy;
// }

app.listen(3000);
