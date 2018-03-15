$(document).ready(function() {

  var states = {
    "AL": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "NY": {State: "New York", About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "AK": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "HI": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "AK": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "FL": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "GA": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "AL": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "NC": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "TN": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "RI": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "CT": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "MA": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "NH": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "NY": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "NJ": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "PA": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "DE": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "WV": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "KY": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "OH": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "MI": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "WY": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "MT": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "ID": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "TX": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "CA": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "AZ": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "NV": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "CO": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "NM": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "OR": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "ND": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "SD": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "NE": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "IA": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "MS": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "IN": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "IL": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "MN": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "WI": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "MO": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "AR": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "OK": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "KS": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "LA": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "VA": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"},
    "DC": {About: "Lorem Ipsum Om", url: "http://yoursite.com", imageUrl: "http://yoursite.com"}
  }

  $('#map').usmap({
    'stateStyles': {
      fill: "#FF8C00",
      stroke: "#FFFFFF",
      "stroke-width": 1,
      "stroke-linejoin": "round",
      scale: [1, 1]
    },
    'stateHoverStyles': {
      fill: "#DC143C",
      stroke: "#FFFFFF",
      scale: [1.1, 1.1]
    },
    'labelBackingStyles': {
      fill: "#F87217",
      stroke: "#FFFFFF",
      "stroke-width": 1,
      "stroke-linejoin": "round",
      scale: [1, 1]
    },
    
    // The styles for the hover
    'labelBackingHoverStyles': {
      fill: "#DC143C",
      stroke: "#ADCC56",
    },
    'labelTextStyles': {
    fill: "#222",
      'stroke': 'none',
      'font-weight': 300,
      'stroke-width': 0,
      'font-size': '10px'
    },
    
    click: function(event, data) {
      $('#clicked-state').html(
        '<strong>State:</strong> ' + data.name 
        + '<br/>' + states[data.name].State 
        + '<br/> <strong>Farm Dine:</strong>' 
        + '<br/> <strong>About:</strong> ' + states[data.name].About 
        + '<br/> ' + states[data.name].url
        + '<br/> <img src="'+  states[data.name].imageUrl  +'" width="200" /> '
      )
      // .parent().effect('highlight', {color: '#C7F464'}, 2000);
      $(this).addClass({'border-color': '3px solid orange'});
    }
  });
});
