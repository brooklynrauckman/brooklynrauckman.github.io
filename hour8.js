var teams = [
  ["Team 1", 4],
  ["Team 2", 0],
  ["Team 3", 0],
  ["Team 4", 0],
  ["Team 5", 3],
  ["Team 6", 1],
  ["Team 7", 2],
  ["Team 8", 5]
];

//blank array to fill
var sortedTeams = [];

//sorts teams by score
sortedTeams = teams.sort(function(a, b) {
    return a[1] - b[1];
});
//sort high to low instead
sortedTeams = sortedTeams.reverse();



$(document).ready(function(){

  $('#how-to').click(function(){
    $('.container-points ul').slideToggle();
  });

  for(var i = 0; i < sortedTeams.length; i++){
    $('.flex-container').append(

      "<div class='flex-item'>" +
        "<div class='score'>" +
          "<h1>" + sortedTeams[i][1] + "</h1>" +
        "</div>" +
        "<div class='team-name'>" +
          "<div class='place'>" +
            "<p>" + (i+1) + "</p>" +
          "</div>" +
          "<div class='name'>" +
            sortedTeams[i][0] +
          "</div>" +
        "</div>" +
      "</div>"

    );
  }
});
