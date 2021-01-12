document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems,instances);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, instances);
  });

  async function getValue(){
    const response = await fetch("https://free-football-soccer-videos.p.rapidapi.com/", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "37c9a986c7mshd594a88ef67488dp19fef4jsnf21c7f920328",
      "x-rapidapi-host": "free-football-soccer-videos.p.rapidapi.com",
    }
    
  
  })
  let idSerie= 0;
  let idBundes = 0;
  let idPremier= 0;
  let idLaliga = 0;
  let idLigue= 0;
  let id = 0;
  let seriea = document.querySelector('.seriea');
  let laliga = document.querySelector('.laliga');
  let bundes = document.querySelector('.bundes');
  let premierleague = document.querySelector('.premierleague');
  let ligue1 = document.querySelector('.ligue1');
  let liga1 = document.querySelector('.liga1');

  const data = await response.json();
  console.log(data);
  data.forEach(object => {
    if(object.competition.name==="ITALY: Serie A") {
      idSerie++;
    }
    if(object.competition.name==="SPAIN: La Liga") {
      idLaliga++;
    }
    if(object.competition.name==="GERMANY: Bundesliga") {
      idBundes++;
    }
    if(object.competition.name==="ENGLAND: Premier League") {
      idPremier++;
    }
    if(object.competition.name==="FRANCE: Ligue 1") {
      idLigue++;
    }
    // appearences
    id++;
    
    
    // make 3 appearences
    if(object.competition.name==='ITALY: Serie A' && idSerie < 4) 
    {
    let url = object.url;
    template1 = `
  
    
    <div class="col s4 serieacss "> <iframe src="${url}" width="300px" height="320px" style="border:1px solid black;">
  </iframe> 
    </div>
    
    `;
  
    seriea.innerHTML += template1;}

    
    else if(object.competition.name==="SPAIN: La Liga" && idLaliga < 4) 
    {
      let url = object.url;
    template2 = `
  
    
    <div class="col s4 serieacss "> <iframe src="${url}" width="300px" height="320px" style="border:1px solid black;">
  </iframe> 
    </div>
    
    `;
  
    laliga.innerHTML += template2;}


    else if(object.competition.name==="GERMANY: Bundesliga" && idBundes< 4) 
    {
      let url = object.url;
    template9 = `
  
    
    <div class="col s4 serieacss"> <iframe src="${url}" width="300px" height="330px" style="border:1px solid black;">
  </iframe> 
    </div>
    
    `;
  
    bundes.innerHTML += template9;}


    else if(object.competition.name==="FRANCE: Ligue 1" && idLigue < 4) 
    {
      let url = object.url;
    template5 = `
  
    <div class="col s4 serieacss "> <iframe src="${url}" width="300px" height="330px" style="border:1px solid black;">
  </iframe> 
    </div>
    
    `;
  
    ligue1.innerHTML += template5;}
    else if(object.competition.name==="ENGLAND: Premier League" && idPremier<4)
    
    {
      let url = object.url;
    template6 = `
  
    <div class="col s4 serieacss"> <iframe src="${url}" width="300px" height="330px" style="border:1px solid black;">
  </iframe>
    </div>
    
    `;
  
    premierleague.innerHTML += template6;}

    else if(object.competition.name==="ROMANIA: Liga 1" && id<100 ) 
    {
      let url = object.url;
    template7 = `
  
    
    <div class="col s4 serieacss"> <iframe src="${url}" width="300px" height="330px" style="border:1px solid black;">
  </iframe> 
    </div>
    
    `;
  
    liga1.innerHTML += template7;}
  
  });
  }
  
  window.addEventListener('load', getValue);
  