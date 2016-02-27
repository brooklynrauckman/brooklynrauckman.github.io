var teams = [
  ["No Name", 15],
  ["Burls", 14],
  ["Batman", 7],
  ["Do Math", 7],
  ["Wobbling Penguins", 12],
  ["Deez Bubbles", 15]
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
