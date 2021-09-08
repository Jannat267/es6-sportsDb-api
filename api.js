const loadTeam=()=>{
    const searchInput=document.getElementById("searchInput").value;
    
    const url =`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchInput}`;
    fetch(url)
    .then(res =>res.json())
    .then(data =>displayTeam(data.teams))
}
const displayTeam=(teams)=>{
    searchInput.value='';
    const cardsDiv = document.getElementById("cards");
    cardsDiv.textContent='';
    
    teams.forEach(team => {
        console.log(team);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div class="card h-100" onclick="loadSingleTeam('${team.idTeam}')">
            <img class="card-img-top w-50 " src="${team.strTeamBadge}" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title">${team.strTeam}</h4>
                <h6 class="card-title">${team.strCountry}</h6>
                <p class="card-text">${team.strDescriptionEN.substr(0,200)}</p>
            </div>
             <div class="card-footer">
                <small class="text-muted">${team.strFacebook}</small>
            </div>
        </div>`;
        cardsDiv.appendChild(div);

    });
}
const loadSingleTeam=(id)=>{
    const url =`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
    fetch(url)
    .then(res =>res.json())
    .then(data =>displaySingleTeam(data.teams[0]))
}
const displaySingleTeam=(team)=>{
    console.log(team)
    const teamView = document.getElementById("teamView");
    teamView .textContent='';
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML=`
    <div class="card">
        <img class="card-img-top h-5 w-10" src="${team.strTeamBadge}" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">${team.strTeam}</h4>
            <h6 class="card-title">${team.strCountry}</h6>
            <p class="card-text">${team.strDescriptionEN.substr(0,200)}</p>
        </div>
         <div class="card-footer">
            <small class="text-muted">${team.strFacebook}</small>
        </div>
    </div>`;
    teamView.appendChild(div);
}