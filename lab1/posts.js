// Use https://gorest.co.in/ REST API for Testing and Prototyping
// Write function to fetch data from https://gorest.co.in/public/v2/posts
// This function should print in console array of obects with the following structure {id, title, user_id}
// and handle possible errors 

async function getData() {
  const url = "https://gorest.co.in/public/v2/posts";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`); 
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error fetching data:", error.message); 
  }
}

getData();
