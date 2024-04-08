// let url = 'http://localhost:3000/films'
// let ulFilms =document.getElementById("films");
// let idBuyticket = document.getElementById("buy-ticket")

// let movieImg = document.getElementById("poster");
// let idTitle = document.getElementById("title")
// let idRuntime = document.getElementById("runtime")
// let idFilmInfo = document.getElementById("film-info")
// let idShowtime = document.getElementById("showtime")
// let idTicketnum = document.getElementById("ticket-num")

// // function show(value){
// //     console.log(value)
// // }
// function  grabMovie(){
  
//     fetch(url)
//    .then(res => res.json())
//    .then(data => {
//        // console.log(data)
//        ulFilms.innerHTML = "";
//          for(value of data){
//             addMovie(values);
//          }
//         }
//    )

//         // console.log(data[id].title)
//         .catch(e => console.log(e.message));
// }
// grabMovie();
// function addMovie(movies){
//     let remaining = movies.capacity - movies.tickets_sold;
//     movieTitle = movies.title
//     movieId = movies.id

//         let liFilm = document.createElement("li")
//         if(!remaining > 0)   if(!remaining > 0)
//         {  liFilm.className = "sold-out"
//         }
//         {  liFilm.className = "sold-out"
//         }
//         // liFilm.innerText = data[id].title;
//         // liFilm.innerText = title

//         ulFilms.appendChild(liFilm)

//         let movieSpan = document.createElement("span");
//         movieSpan.innerText = movieTitle;
//         liFilm.appendChild(movieSpan);

//         deleteButton.addEventListener('click', () => {
//             deleteMovie(movies)
//         })
//         movieSpan.addEventListener('click', () => {
//             updateDom(movies);
//         })
//         if(movies.id === "1"){
//             updateDom(movies);
//         }
//     }


//     function updateDom(movies){
//         let remaining = movies.capacity - movies.tickets_sold;
//         let movieId = movies.id;
//         let availabiity;
    
//         if(remaining > 0){
//             availabiity = "Buy Tickt"
//         }else{
//             availabiity = "Sold out"
//         }
    
//         movieImg.src = movies.poster;
//         idTitle.innerText = movies.title ;
//         idRuntime.innerText = movies.runtime + "minutes";
//         idFilmInfo.innerText = movies.description;
//         idShowtime.innerText = movies.showtime;
//         idTicketnum.innerText = remaining;


//         idBuyticket.onclick = () => {
//             if(remaining > 0)
//             { 
//                  buyTicket(movies)
//             }else{
//                 console.log("You cannot buy tickets")
//             }
//         };

//         idBuyticket.dataset.movieId = movies.id;
//         let button = document.querySelector([data-movie-id="${movieId}"]);
//         button.innerText = availabiity;
//     }
//     function buyTicket(movies){
//         movies.tickets_sold++
//         let ticketsSold = movies.tickets_sold;
//         let requestHeaders = {
//             "Content-Type": "application/json"
//         }
//         }
//         let requestBody = {
//             "tickets_sold": ticketsSold
//         }
//         fetch(url+movies.id,{
//             method: "PATCH",
//             headers: requestHeaders,    
//             body: JSON.stringify(requestBody)
//         })

//         .then (res => res.json())
//         .then (data => {
//             updateDom(data);
//             let numberOfTickets = (data.capacity - data.tickets_sold)

//             if(!numberOfTickets > 0)
//             { grabMovie()
//             }

//             let  RequestBodyTickets =  {
//                 "film_id": data.id,
//                 "number_of_tickets": numberOfTickets
//              }

//              fetch("http://localhost:3000/tickets",{
//                 method: "POST",
//                 headers: requestHeaders,    
//                 body: JSON.stringify(RequestBodyTickets)
//             })





        
//         })
    
       










        // {
        //     "films": [
        //       {
        //         "id": "1",
        //         "title": "The Giant Gila Monster",
        //         "runtime": "108",
        //         "capacity": 30,
        //         "showtime": "04:00PM",
        //         "tickets_sold": 30,
        //         "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
        //         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
        //       },
        //       {
        //         "id": "2",
        //         "title": "Manos: The Hands Of Fate",
        //         "runtime": "118",
        //         "capacity": 50,
        //         "showtime": "06:45PM",
        //         "tickets_sold": 50,
        //         "description": "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.",
        //         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/47781/p47781_v_v8_ac.jpg"
        //       },
        //       {
        //         "id": "3",
        //         "title": "Time Chasers",
        //         "runtime": "93",
        //         "capacity": 50,
        //         "showtime": "09:30PM",
        //         "tickets_sold": 47,
        //         "description": "An inventor comes up with a time machine, but must prevent its abuse at the hands of an evil C.E.O.",
        //         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/23342/p23342_v_v8_ab.jpg"
        //       },
        //       {
        //         "id": "4",
        //         "title": "The Touch Of Satan",
        //         "runtime": "101",
        //         "capacity": 40,
        //         "showtime": "09:00PM",
        //         "tickets_sold": 40,
        //         "description": "A young man meets a farm girl who is actually a witch.",
        //         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/43468/p43468_v_v8_aa.jpg"
        //       },
        //       {
        //         "id": "5",
        //         "title": "Santa Claus Conquers The Martians",
        //         "runtime": "96",
        //         "capacity": 50,
        //         "showtime": "03:30PM",
        //         "tickets_sold": 50,
        //         "description": "The Martians kidnap Santa Claus because there is nobody on Mars to give their children presents.",
        //         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/4232/p4232_v_v8_aa.jpg"
        //       },
        //       {
        //         "id": "9",
        //         "title": "Project Moon Base",
        //         "runtime": "99",
        //         "capacity": 40,
        //         "showtime": "07:30PM",
        //         "tickets_sold": 33,
        //         "description": "A saboteur posing as a scientist strives to destroy the world's first space station.",
        //         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/46755/p46755_v_v8_aa.jpg"
        //       },
        //       {
        //         "id": "10",
        //         "title": "The Giant Spider Invasion",
        //         "runtime": "122",
        //         "capacity": 50,
        //         "showtime": "10:00PM",
        //         "tickets_sold": 50,
        //         "description": "Giant spiders from another dimension invade Wisconsin.",
        //         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/42171/p42171_v_v8_ab.jpg"
        //       },
        //       {
        //         "id": "11",
        //         "title": "Catalina Caper",
        //         "runtime": "104",
        //         "capacity": 30,
        //         "showtime": "06:00PM",
        //         "tickets_sold": 23,
        //         "description": "A group of swingin' teens take time out from having fun in the sun to try to foil a group of crooks searching for a stolen scroll.",
        //         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/58122/p58122_v_v8_aa.jpg"
        //       },
        //       {
        //         "id": "12",
        //         "title": "Secret Agent Super Dragon",
        //         "runtime": "104",
        //         "capacity": 30,
        //         "showtime": "07:00PM",
        //         "tickets_sold": 30,
        //         "description": "A series of murders in Michigan lead an American secret agent to Amsterdam, where he uncovers a plot to imperil the world with a potent new drug.",
        //         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/93417/p93417_v_v8_aa.jpg",
        //         "showing_id": "12"
        //       },
        //       {
        //         "id": "13",
        //         "title": "Wild Rebels",
        //         "runtime": "100",
        //         "capacity": 40,
        //         "showtime": "09:00PM",
        //         "tickets_sold": 40,
        //         "description": "A stock car driver goes undercover as the wheel man for a motorcycle gang.",
        //         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/45367/p45367_v_v8_aa.jpg"
        //       },
        //       {
        //         "id": "14",
        //         "title": "Danger: Diabolik",
        //         "runtime": "111",
        //         "capacity": 50,
        //         "showtime": "08:00PM",
        //         "tickets_sold": 50,
        //         "description": "International man of mystery Diabolik and his lover pull off heist after heist, all while European cops led by Inspector Ginko and envious mobsters led by Ralph Valmont are closing in on them.",
        //         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/11850/p11850_v_v8_aa.jpg"
        //       },
        //       {
        //         "id": "15",
        //         "title": "Village Of The Giants",
        //         "runtime": "98",
        //         "capacity": 50,
        //         "showtime": "04:45PM",
        //         "tickets_sold": 50,
        //         "description": "Delinquent teen-agers ingest a substance and grow thirty feet tall, then proceed to take over a small town.",
        //         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/37991/p37991_v_v8_aa.jpg"
        //       }
        //     ]
        //   }


















//         let url = "http://localhost:3000/films/";
// let ulFilms = document.getElementById("films");
// let idBuyticket = document.getElementById("buy-ticket")

// let movieImg = document.getElementById("poster");
// let idTitle = document.getElementById("title")
// let idRuntime = document.getElementById("runtime")
// let idFilmInfo = document.getElementById("film-info")
// let idShowtime = document.getElementById("showtime")
// let idTicketnum = document.getElementById("ticket-num")


// function grabMovie(){
//     fetch(url)
//     .then(res => res.json())
//     .then(data => { 
//         ulFilms.innerHTML = "";
//         for(values of data){
//              addMovie(values);
//         }
//         }
//     )
//     .catch(e => console.log(e.message));
// }
// grabMovie();
// function addMovie(movies){
    
//     let remaining = movies.capacity - movies.tickets_sold;

//     movieTitle = movies.title
//     movieId = movies.id
//     let liFilm = document.createElement("li");
//     if(!remaining > 0)
//     {  liFilm.className = "sold-out"
//     }

//     ulFilms.appendChild(liFilm);

//     let movieSpan = document.createElement("span");
//     movieSpan.innerText = movieTitle;
//     liFilm.appendChild(movieSpan);

//     let deleteButton = document.createElement("button");
//     deleteButton.innerText = "Delete"
//     liFilm.appendChild(deleteButton); 

//     deleteButton.addEventListener('click', () => {
//         deleteMovie(movies)
//     })
//     movieSpan.addEventListener('click', () => {
//         updateDom(movies);
//     })
//     if(movies.id === "1"){
//         updateDom(movies);
//     }
// }

// function updateDom(movies){
//     let remaining = movies.capacity - movies.tickets_sold;
//     let movieId = movies.id;
//     let availabiity;

//     if(remaining > 0){
//         availabiity = "Buy Tickt"
//     }else{
//         availabiity = "Sold out"
//     }

//     movieImg.src = movies.poster; 
//     movieImg.alt = movies.title; 
//     idTitle.innerText = movies.title;
//     idRuntime.innerText = movies.runtime + " minutes";
//     idFilmInfo.innerText = movies.description;
//     idShowtime.innerText = movies.showtime;
//     idTicketnum.innerText = remaining;

//     idBuyticket.onclick = () => {
//         if(remaining > 0)
//         { 
//              buyTicket(movies)
//         }else{
//             console.log("You cannot buy tickets")
//         }
//     };
//     idBuyticket.dataset.movieId = movies.id;
//     let button = document.querySelector("[data-movie-id='"+movieId+"']");
//     button.innerText = availabiity;
// }
// function buyTicket(movies){

//     movies.tickets_sold++
//     let ticketsSold = movies.tickets_sold;
//     let requestHeaders = {
//         "Content-Type": "application/json"
//     }
//     let requestBody = {
//         "tickets_sold": ticketsSold
//     }
//     fetch(url+movies.id,{
//         method: "PATCH",
//         headers: requestHeaders,    
//         body: JSON.stringify(requestBody)
//     })
//     .then (res => res.json())
//     .then (data => {
//         updateDom(data);

//         let numberOfTickets = (data.capacity - data.tickets_sold)

//         if(!numberOfTickets > 0)
//         { grabMovie()
//         }

//         let  RequestBodyTickets =  {
//             "film_id": data.id,
//             "number_of_tickets": numberOfTickets
//          }

//         fetch("http://localhost:3000/tickets",{
//             method: "POST",
//             headers: requestHeaders,    
//             body: JSON.stringify(RequestBodyTickets)
//         })
//         .then (res => res.json())
//         .then(data => data)
//         .catch (e => console.log(e.message));

//     })
//     .catch (e => console.log(e.message));
// }
// function deleteMovie(movie){
//     let requestHeaders = {
//         "Content-Type": "application/json"
//     }
//     let requestBody = {
//         "id": movie.id
//     }
//     fetch(url+movie.id, {
//         method: "DELETE",
//         headers: requestHeaders,    
//         body: JSON.stringify(requestBody)
//     })
//     .then (res => res.json())
//     .then (data => grabMovie())
//     .catch (e => console.log(e.message));
// }