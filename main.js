
async function getMovies(){
    const url = 'https://imdb-top-100-movies1.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aaf412f001mshb16825a0d5065e6p181d8ajsn4a009ea4951a',
		'X-RapidAPI-Host': 'imdb-top-100-movies1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result =  await response.json();
	
   result.map((item)=>
   {
  
    const title = item.title;
    const stars = item.stars;
    const poster = item.images;
    const pis = poster.map((pos)=>pos[1]);
    const movie = `<li><img src="${pis}"><h2>${title}</h2>`;
    document.querySelector(".movie").innerHTML += movie;
})
} catch (error) {
	console.error(error);
}
}

getMovies()