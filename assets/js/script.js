let filmList = document.querySelector("#list-film");

let getFilm = async() =>{
    let res = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=a89b49061a2fb0a94a443b04683d10aa&sort_by=popularity.desc")
    let result = await res.json()

    let data = result.results
    console.log(data)

    data.slice(0,16).forEach(item => {
        filmList.innerHTML +=
        `<div class="col">
        <div class="card" style="width: 19rem;">
            <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-title">${item.original_title}</h5>
                <p class="card-text">
                    <span class="text-warning" style="display:block;font-weight:bold;"><i class="fa-solid fa-star"></i> ${item.vote_average}</span>
                    ${item.release_date}
                </p>
            </div>
        </div>
    </div>`
    });
}

document.querySelector("form").addEventListener('submit', async (event) => {
        event.preventDefault()
        let judulFilm = document.querySelector("#judul-film").value
        let res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6498a2ab00dfbdea32609eec6bc9f04b&query=${judulFilm}&page=1`)
        let result = await res.json()
        
        let data = result.results
        if(data.length > 1){
            document.querySelectorAll(".col").forEach((e)=>{
                e.remove()
            })

            data.slice(0,16).forEach(item => {
                filmList.innerHTML += 
                `<div class="col">
                    <div class="card" style="width: 19rem;">
                        <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-title">${item.original_title}</h5>
                            <p class="card-text">
                                <span class="text-warning" style="display:block;font-weight:bold;"><i class="fa-solid fa-star"></i> ${item.vote_average}</span>
                                ${item.release_date}
                            </p>
                        </div>
                    </div>
                </div>`
            });
        }else{
            alert("Opps Film tidak ditemukan!")
        }
        
});
    

getFilm()