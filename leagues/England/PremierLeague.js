
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems,instances);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, instances);
});

let manele = document.querySelector('.manelepara');
let buton = document.querySelector('.btn-large');
let standings = document.querySelector('.standings');
async function getLeague() {
  const res = await  fetch("https://api.football-data.org/v2/competitions/PL/standings", {
    "method": "GET",
    "headers": {
      'X-Auth-Token': 'ef619df9f0034252b58c4ee99e8443c3',
      
    }
  });
  const data = await res.json();
  const data2 = data.standings[0].table;
  data2.forEach(team1 => {
    let name = team1.team.name;
    let points = team1.points;
    let position = team1.position;
    let imgurl = team1.team.crestUrl;
    let playedGames = team1.playedGames;
    let goalFor = team1.goalsFor;
    let goalAgainst= team1.goalsAgainst;
    let form = team1.form;

    let template1 = `
    <tr class="manele2 blue darken-2">
      <td class="valoare">${position} <button class="btn-floating btn-small franzela"></button></td>
      <td><img src="${imgurl}" height="20px" width="20px">${name}</td>
      <td class = "center-align hide-on-med-and-down">${form}</td>
      <td class="center-align">${playedGames}</td>
      <td class="center-align">${goalFor}:${goalAgainst}</td>
      
      <td class="center-align">${points}</td>
    </tr>
    
    `;
    let template2 = `
    <tr class="manele3 red lighten-3">
      <td class="valoare">${position} <button class="btn-floating btn-small red"><i class="material-icons red">arrow_downward</i></button></td>
      <td><img src="${imgurl}" height="20px" width="20px">${name}</td>
      <td class = "center-align hide-on-med-and-down">${form}</td>
      <td class="center-align">${playedGames}</td>
      <td class="center-align">${goalFor}:${goalAgainst}</td>
      
      <td class="center-align">${points}</td>
    </tr>
    
    `;

    let template3= `
    <tr class="manele3 orange lighten-2">
      <td class="valoare">${position} <button class="btn-floating btn-small europa"></td>
      <td><img src="${imgurl}" height="20px" width="20px">${name}</td>
      <td class = "center-align hide-on-med-and-down">${form}</td>
      <td class="center-align">${playedGames}</td>
      <td class="center-align">${goalFor}:${goalAgainst}</td>
      
      <td class="center-align">${points}</td>
    </tr>
    
    `;
    let template4= `
    <tr class="manele3">
      <td class="valoare">${position}</td>
      <td><img src="${imgurl}" height="20px" width="20px">${name}</td>
      <td class = "center-align hide-on-med-and-down">${form}</td>
      <td class="center-align">${playedGames}</td>
      <td class="center-align">${goalFor}:${goalAgainst}</td>
      
      <td class="center-align">${points}</td>
    </tr>
    
    `;
    
    
    if(position<5) {
      standings.innerHTML+=template1;
    }

    if (position===5) {
      standings.innerHTML+=template3;
    }
    if(position >17) {
      standings.innerHTML+=template2;
    }
    
    if(position>6 && position <18) {
      standings.innerHTML+=template4;
    }
    
    
    
  });
  
  

  
  
  /* manele.innerHTML = data.value; */
}

window.addEventListener('load',getLeague);

