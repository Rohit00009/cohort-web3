const axios = require("axios");
// async function main() {
//   const response = await axios.post(
//     "https://httpdump.app/dumps/d8510051-0c8a-4e09-b785-b66aa0ea5817",
//     {
//       username: "Rohit",
//       password: "Ro",
//     },
//     {
//       headers: {
//         Authorization: "ESPO 123",
//       },
//     }
//   );
//   console.log(response.data);
// }
// main();

//post request , put request , delete request
//whenever we try to post request
//2nd arguement should be "body" then "headers"

//get request
//whenever we try to get request
//2nd arguement should be "headers"

//we can also write it as belown
async function main1() {
  const response = await axios({
    url: "https://httpdump.app/dumps/d8510051-0c8a-4e09-b785-b66aa0ea5817",
    method: "POST",
    headers: {
      Authorization: "ESPO123",
    },
    data: {
      username: "ro",
    },
  });
  console.log(response.data);
}
main1();
