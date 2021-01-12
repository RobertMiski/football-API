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
    let idBundes = 0;
    let id = 0;
    let bundes = document.querySelector('.bundes');

    const data = await response.json();
    console.log(data);
    data.forEach(object => {
     
    
      if(object.competition.name==="FRANCE: Ligue 1") {
        idBundes++;
      }
      
      // appearences
      id++;
      
      
      // make 3 appearences
     
      
  
      
     
  
  
       if(object.competition.name==="FRANCE: Ligue 1") 
      {
        let url = object.url;
      template9 = `
    
      
      <div class="row beluga">
      <div class="col s1"> </div>
      <div class="col s10  serieacss matchcss"> <iframe src="${url}" width="100%" height="540px">
    </iframe> 
      </div>
      <div class="col s1"> </div>
      </div>
      
      `;
    
      bundes.innerHTML += template9;}
    });
    }
    
    window.addEventListener('load', getValue);
    