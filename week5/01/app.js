//FOR NORMAL FETCH METHOD

// async function getNewPost() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const data = await response.json();
//   console.log(data);

//   document.getElementById("posts").innerHTML = data.body;
// }
// getNewPost();

//BY USING AXIOS LIBRARY
async function getNewPost() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
  document.getElementById("posts").innerHTML = res.data.title;
}
