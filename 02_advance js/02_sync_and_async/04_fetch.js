/*..........................fetch()............................
The Fetch API provides an interface for fetching resources (including across the network).
It is a more powerful and flexible replacement for XMLHttpRequest.
The fetch() method takes one mandatory argument, the path to the resource you want to fetch.
It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even if the server response is an HTTP error status.

when we make a fetch() call the work is divided into two parts.

first one reserves the location for data and create two arrays 
onFullfilled[];
onRejection[];

the second one works on api request/handling
it creates a network request it is either done by browser or native node
either we get response orr rejection
response get in onFullfilled[];
and if there is no response then it is stored in onRejection[]


*/

async function logMovies() {
    const response = await fetch("http://example.com/movies.json");
    const movies = await response.json();
    console.log(movies);
  }
 
 
  /* Here we are fetching a JSON file across the network, parsing it, and printing the data to the console.
   The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and does not directly return the JSON response body but instead returns a promise that resolves with a Response object.
   The Response object, in turn, does not directly contain the actual JSON response body but is instead a representation of the entire HTTP response. So, to extract the JSON body content from the Response object, we use the json() method, which returns a second promise that resolves with the result of parsing the response body text as JSON.*/