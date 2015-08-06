var chartDiv = d3.select("#chart");

//Data for Setup
var w = 600;
var h = 625;
var centerPoint = w / 2;
var delayVarShort = 10;
var delayVarLong = 50;

// data for ringSections—Rings
var intValue = 0;

// Data for group2—dots
var numberOfSpokes = 80;
var halfOfSpokes = numberOfSpokes/2;
var quarterOfSpokes = numberOfSpokes/4;
var threeQuartersOfSpokes = (numberOfSpokes/4) * 3;
var ring = 240;
var ringOuter = 250

var dotSize = 4;
var strokeWidth = 0;

//Data for episodeSpokes—Spokes
var spokePos = [{"":"","counter":"1","ep_num":"100","ep_title":"The Cage","s":"1","e":"0","spokePos":"80"},{"":"","counter":"2","ep_num":"101","ep_title":"The Man Trap","s":"1","e":"1","spokePos":"1"},{"":"","counter":"3","ep_num":"102","ep_title":"Charlie X","s":"1","e":"2","spokePos":"2"},{"":"","counter":"4","ep_num":"103","ep_title":"Where No Man Has Gone Before","s":"1","e":"3","spokePos":"3"},{"":"","counter":"5","ep_num":"104","ep_title":"The Naked Time","s":"1","e":"4","spokePos":"4"},{"":"","counter":"6","ep_num":"105","ep_title":"The Enemy Within","s":"1","e":"5","spokePos":"5"},{"":"","counter":"7","ep_num":"106","ep_title":"Mudd's Women","s":"1","e":"6","spokePos":"6"},{"":"","counter":"8","ep_num":"107","ep_title":"What Are Little Girls Made Of?","s":"1","e":"7","spokePos":"7"},{"":"","counter":"9","ep_num":"108","ep_title":"Miri","s":"1","e":"8","spokePos":"8"},{"":"","counter":"10","ep_num":"109","ep_title":"Dagger of the Mind","s":"1","e":"9","spokePos":"9"},{"":"","counter":"11","ep_num":"110","ep_title":"The Corbomite Maneuver","s":"1","e":"10","spokePos":"10"},{"":"","counter":"12","ep_num":"111","ep_title":"The Menagerie, Part I","s":"1","e":"11","spokePos":"11"},{"":"","counter":"13","ep_num":"112","ep_title":"The Menagerie, Part II","s":"1","e":"12","spokePos":"12"},{"":"","counter":"14","ep_num":"113","ep_title":"The Conscience of the King","s":"1","e":"13","spokePos":"13"},{"":"","counter":"15","ep_num":"114","ep_title":"Balance of Terror","s":"1","e":"14","spokePos":"14"},{"":"","counter":"16","ep_num":"115","ep_title":"Shore Leave","s":"1","e":"15","spokePos":"15"},{"":"","counter":"17","ep_num":"116","ep_title":"The Galileo Seven","s":"1","e":"16","spokePos":"16"},{"":"","counter":"18","ep_num":"117","ep_title":"The Squire of Gothos","s":"1","e":"17","spokePos":"17"},{"":"","counter":"19","ep_num":"118","ep_title":"Arena","s":"1","e":"18","spokePos":"18"},{"":"","counter":"20","ep_num":"119","ep_title":"Tomorrow Is Yesterday","s":"1","e":"19","spokePos":"19"},{"":"","counter":"21","ep_num":"120","ep_title":"Court Martial","s":"1","e":"20","spokePos":"20"},{"":"","counter":"22","ep_num":"121","ep_title":"The Return of the Archons","s":"1","e":"21","spokePos":"21"},{"":"","counter":"23","ep_num":"122","ep_title":"Space Seed","s":"1","e":"22","spokePos":"22"},{"":"","counter":"24","ep_num":"123","ep_title":"A Taste of Armageddon","s":"1","e":"23","spokePos":"23"},{"":"","counter":"25","ep_num":"124","ep_title":"The Ultimate Computer","s":"1","e":"24","spokePos":"24"},{"":"","counter":"26","ep_num":"125","ep_title":"The Devil in the Dark","s":"1","e":"25","spokePos":"25"},{"":"","counter":"27","ep_num":"126","ep_title":"Errand of Mercy","s":"1","e":"26","spokePos":"26"},{"":"","counter":"28","ep_num":"127","ep_title":"The Alternative Factor","s":"1","e":"27","spokePos":"27"},{"":"","counter":"29","ep_num":"128","ep_title":"The City on the Edge of Forever","s":"1","e":"28","spokePos":"28"},{"":"","counter":"30","ep_num":"129","ep_title":"Operation: Annihilate!","s":"1","e":"29","spokePos":"29"},{"":"","counter":"31","ep_num":"201","ep_title":"Amok Time","s":"2","e":"1","spokePos":"30"},{"":"","counter":"32","ep_num":"202","ep_title":"Who Mourns for Adonais?","s":"2","e":"2","spokePos":"31"},{"":"","counter":"33","ep_num":"203","ep_title":"The Changeling","s":"2","e":"3","spokePos":"32"},{"":"","counter":"34","ep_num":"204","ep_title":"Mirror, Mirror","s":"2","e":"4","spokePos":"33"},{"":"","counter":"35","ep_num":"205","ep_title":"The Apple","s":"2","e":"5","spokePos":"34"},{"":"","counter":"36","ep_num":"206","ep_title":"The Doomsday Machine","s":"2","e":"6","spokePos":"35"},{"":"","counter":"37","ep_num":"207","ep_title":"Catspaw","s":"2","e":"7","spokePos":"36"},{"":"","counter":"38","ep_num":"208","ep_title":"I, Mudd","s":"2","e":"8","spokePos":"37"},{"":"","counter":"39","ep_num":"209","ep_title":"Metamorphosis","s":"2","e":"9","spokePos":"38"},{"":"","counter":"40","ep_num":"210","ep_title":"Journey to Babel","s":"2","e":"10","spokePos":"39"},{"":"","counter":"41","ep_num":"211","ep_title":"For the World Is Hollow and I Have Touched the Sky","s":"2","e":"11","spokePos":"40"},{"":"","counter":"42","ep_num":"212","ep_title":"The Deadly Years","s":"2","e":"12","spokePos":"41"},{"":"","counter":"43","ep_num":"213","ep_title":"Operation: Annihilate!","s":"2","e":"13","spokePos":"42"},{"":"","counter":"44","ep_num":"214","ep_title":"Wolf in the Fold","s":"2","e":"14","spokePos":"43"},{"":"","counter":"45","ep_num":"215","ep_title":"The Trouble with Tribbles","s":"2","e":"15","spokePos":"44"},{"":"","counter":"46","ep_num":"216","ep_title":"The Gamesters of Triskelion","s":"2","e":"16","spokePos":"45"},{"":"","counter":"47","ep_num":"217","ep_title":"A Piece of the Action","s":"2","e":"17","spokePos":"46"},{"":"","counter":"48","ep_num":"218","ep_title":"The Immunity Syndrome","s":"2","e":"18","spokePos":"47"},{"":"","counter":"49","ep_num":"219","ep_title":"A Private Little War","s":"2","e":"19","spokePos":"48"},{"":"","counter":"50","ep_num":"220","ep_title":"Requiem for Methuselah","s":"2","e":"20","spokePos":"49"},{"":"","counter":"51","ep_num":"221","ep_title":"Patterns of Force","s":"2","e":"21","spokePos":"50"},{"":"","counter":"52","ep_num":"222","ep_title":"By Any Other Name","s":"2","e":"22","spokePos":"51"},{"":"","counter":"53","ep_num":"223","ep_title":"The Omega Glory","s":"2","e":"23","spokePos":"52"},{"":"","counter":"54","ep_num":"224","ep_title":"The Ultimate Computer","s":"2","e":"24","spokePos":"53"},{"":"","counter":"55","ep_num":"225","ep_title":"Bread and Circuses","s":"2","e":"25","spokePos":"54"},{"":"","counter":"56","ep_num":"226","ep_title":"Assignment: Earth","s":"2","e":"26","spokePos":"55"},{"":"","counter":"57","ep_num":"301","ep_title":"Spock's Brain","s":"3","e":"1","spokePos":"56"},{"":"","counter":"58","ep_num":"302","ep_title":"The Enterprise Incident","s":"3","e":"2","spokePos":"57"},{"":"","counter":"59","ep_num":"303","ep_title":"The Paradise Syndrome","s":"3","e":"3","spokePos":"58"},{"":"","counter":"60","ep_num":"304","ep_title":"And the Children Shall Lead","s":"3","e":"4","spokePos":"59"},{"":"","counter":"61","ep_num":"305","ep_title":"Is There in Truth No Beauty?","s":"3","e":"5","spokePos":"60"},{"":"","counter":"62","ep_num":"306","ep_title":"Spectre of the Gun","s":"3","e":"6","spokePos":"61"},{"":"","counter":"63","ep_num":"307","ep_title":"Day of the Dove","s":"3","e":"7","spokePos":"62"},{"":"","counter":"64","ep_num":"308","ep_title":"For the World Is Hollow and I Have Touched the Sky","s":"3","e":"8","spokePos":"63"},{"":"","counter":"65","ep_num":"309","ep_title":"The Tholian Web","s":"3","e":"9","spokePos":"64"},{"":"","counter":"66","ep_num":"310","ep_title":"Plato's Stepchildren","s":"3","e":"10","spokePos":"65"},{"":"","counter":"67","ep_num":"311","ep_title":"Wink of an Eye","s":"3","e":"11","spokePos":"66"},{"":"","counter":"68","ep_num":"312","ep_title":"The Empath","s":"3","e":"12","spokePos":"67"},{"":"","counter":"69","ep_num":"313","ep_title":"Elaan of Troyius","s":"3","e":"13","spokePos":"68"},{"":"","counter":"70","ep_num":"314","ep_title":"Whom Gods Destroy","s":"3","e":"14","spokePos":"69"},{"":"","counter":"71","ep_num":"315","ep_title":"Let That Be Your Last Battlefield","s":"3","e":"15","spokePos":"70"},{"":"","counter":"72","ep_num":"316","ep_title":"The Mark of Gideon","s":"3","e":"16","spokePos":"71"},{"":"","counter":"73","ep_num":"317","ep_title":"That Which Survives","s":"3","e":"17","spokePos":"72"},{"":"","counter":"74","ep_num":"318","ep_title":"The Lights of Zetar","s":"3","e":"18","spokePos":"73"},{"":"","counter":"75","ep_num":"319","ep_title":"Requiem for Methuselah","s":"3","e":"19","spokePos":"74"},{"":"","counter":"76","ep_num":"320","ep_title":"The Way to Eden","s":"3","e":"20","spokePos":"75"},{"":"","counter":"77","ep_num":"321","ep_title":"The Cloud Minders","s":"3","e":"21","spokePos":"76"},{"":"","counter":"78","ep_num":"322","ep_title":"The Savage Curtain","s":"3","e":"22","spokePos":"77"},{"":"","counter":"79","ep_num":"323","ep_title":"All Our Yesterdays","s":"3","e":"23","spokePos":"78"},{"":"","counter":"80","ep_num":"324","ep_title":"Turnabout Intruder","s":"3","e":"24","spokePos":"79"},{"":"","counter":"","ep_num":"","ep_title":"","s":"","e":"","spokePos":""},{"":"","counter":"","ep_num":"","ep_title":"","s":"","e":"","spokePos":""},{"":"","counter":"","ep_num":"","ep_title":"","s":"","e":"","spokePos":""}];

var spokeWidth = .5;

// Data for centerHubCircle—Finishing Graphics

//var endCapRadius = 180;
var endCapRadius = 130;
var endCap = "N";
var titleText = ["Giles"];



// Draw thebackground and the Ring of Death

// Add SVG canvas
spokeAndWheelChart = chartDiv.append("svg")
  .attr("width", w)
  .attr("height", h);

// Background dark gray rectangle
spokeAndWheelChart.append("rect")
  .attr("x",0)
  .attr("y",0)
  .attr("width",w)
  .attr("height",h)
  .style("fill", "white")
  .style("stroke-width", 2)
  .style("stroke", "#ccc");


// Add a group to the canvas for the Ring of Death
var ringSections = spokeAndWheelChart.append("g")
  .attr("class", "ring");

// Add a large circle to the ringSections as background
var theRing = ringSections.selectAll("circle.ring")
    .data([ringOuter])
    .enter()
    .append("circle")
    .attr("cx", centerPoint)
    .attr("cy", centerPoint)
    .attr("r", function (d) { return d; })
    .attr("fill", function (d, i) {
      if((i + 1)%2==0) {return "#ffe"; }
    });

// Draw the spokes. One spoke for each episodes

// Create new group for the spokes
var episodeSpokes = spokeAndWheelChart.append("g")
  .attr("class", "episodeSpokes")
  .attr("stroke", "#666")
  .attr("stroke-width", .25)
  .attr("fill", "#ddd");


var spokes = episodeSpokes.selectAll("line")
  .data(spokePos)
  .enter()
  .append("line")
  .attr("class", "spoke")
  .attr("x1", centerPoint)
  .attr("y1", centerPoint)
  .attr("x2", function (d, i) {
    return centerPoint + Math.cos((i + 1) * ((2 * Math.PI)/numberOfSpokes)) * 250; })
  .attr("y2", function (d, i) {
    return centerPoint + Math.sin((i + 1) * ((2 * Math.PI)/numberOfSpokes)) * 250; });


// Labels for spokes currently puts season and episode number up.
// want episode name to be displayed somewhere

var spokeLabels = spokeAndWheelChart.append("g")
  .attr("class", "spokeLabels");

var labels = spokeAndWheelChart.selectAll("text.spokeLabel")
  .data(spokePos)
  .enter()
  .append("text")
  .text(function (d) { return d.s + "-" + d.e; })
  .attr('class', 'spokeLabel')
  // This locates the 90˚ and the -90˚ spots on the ring
  // then sets text anchor accordingly
  .style('text-anchor', function (d, i) {
    if (i > quarterOfSpokes && i < threeQuartersOfSpokes) {
      return "end"
    } else {
      return "start"
    }})
  .style('font-size', '.5em')
  // for rotating season/episode label so left hand rotates 180˚
  // quarter and threeQuarters of spokesdetermines when to start
  //  and stop the extra 180˚ rotation.
  .attr("transform", function (d, i) {
    if (i > quarterOfSpokes && i < threeQuartersOfSpokes) {
      return "translate(" +
        (centerPoint + Math.cos((i + .90) * ((2 * Math.PI)/numberOfSpokes)) * 255  ) + "," +
        (centerPoint + Math.sin((i + .90) * ((2 * Math.PI)/numberOfSpokes)) * 255  ) + ")" +
          "rotate(" + ((i + (numberOfSpokes/2) ) * 360 / (numberOfSpokes - 1.8)) + ")"
    } else {
      return "translate(" +
        (centerPoint + Math.cos((i + 1.10) * ((2 * Math.PI)/numberOfSpokes)) * 255) + "," +
        (centerPoint + Math.sin((i + 1.10) * ((2 * Math.PI)/numberOfSpokes)) * 255) + ")" +
          "rotate(" + (i * 360 / (numberOfSpokes - 1.8)) + ")"
    }
  })
  .on("mouseover", function (d) {
//    var episodeTitlelen = d.title.length;
    episodeTitle
      .attr("width", 200 + "px")
//      .attr("width", function (d) {
//      return (episodeTitlelen * 10) + "px"; })
    episodeTitle.transition()
      .duration(200)
      .style("opacity", .9)
    episodeTitle.html(d.ep_title)
      .style("left", function (d) {return (d3.event.pageX) < 300 ? (d3.event.pageX) + "px" : ((d3.event.pageX)-30) + "px"})
      .style("top", (d3.event.pageY - 28) + "px");
  })
  .on("mouseout", function(d) {
    episodeTitle.transition()
    .duration(500)
    .style("opacity", 0)
  });

// Draw the Dots in the spokes

var dotsOfTrope = spokeAndWheelChart.append("g")
  .attr("class", "dotsOfTrope")
  .attr("stroke", "black")
  .attr("stroke-width", 0)
  .attr("fill", "#666");

// Draw EndCap in the center
centerHubCircle = spokeAndWheelChart.append("g")
  .attr("class", "endCap")
  .attr("stroke", "black")
  .attr("stroke-width", 0)
  .attr("fill", "#666");

var centerCap = centerHubCircle.selectAll("circle.endCap")
  .data(endCap)
  .enter()
  .append("circle")
  .attr("cx", centerPoint)
  .attr("cy", centerPoint)
  .attr("r", 65)
  .style("fill", "white");
/*
*/

// tropeDetail for added information on specific dot

var tropeDetail = d3.select(".tropeDetail");

var episodeTitle = d3.select("body").append("div")
  .attr("class", "episodeTitle")
  .style("opacity", 0);

// Draw the legend so people will know what each color means

var starTrekLegend = spokeAndWheelChart.append("g")
  .attr('class', 'legendBox');

var lenMultipler = 10;

// Create the colored dots for the legend

var labels = spokeAndWheelChart.selectAll("text.spokeLabel")

var legendData = [];
var starTrekLegendDots = starTrekLegend.selectAll("circle.legendDot")
//  var legendData = d3.json("json/starTrekTitles.json", function(error, json) {
//    if(error) return console.warn(error);
//  })
  .data(legendData)
  .enter()
  .append("circle")
  .attr("class", "legendDot")
  .attr("cx", function (d, i) {return d.itemLen; } )
  .attr("cy", 10 )
  .attr("r", 5 )
  .attr("fill", function (d, i) {return d.legendColor; })
//  .style("stroke-width", evilKillIndicator)
;

// Create the smaller dots in the middle of the legend dots if necessary
var starTrekLegendAssists = starTrekLegend.selectAll("circle.starTrekLegendAssists")
  .data(legendData)
  .enter()
  .append("circle")
  .attr("class", "legendDot" )
  .attr("cx", function (d, i) {return d.itemLen; } )
  .attr("cy", 10 )
  .attr("r", function (d) {return d.KA == 0 ? 0 : 2} )
  .attr("fill", function (d) {return d.KA == 1 ? "white" : "black" });

// Create the text for each legend dot
var legendTexts = starTrekLegend.selectAll("text.legendText")
  .data(legendData)
  .enter()
  .append("text")
  .attr("class", "legendText")
  .attr("x", function (d, i) {return d.itemLen + 8; })
  .attr("y", 15 )
  .text(function (d) { return d.legendName; });

// Button click function to check which button pressed
d3.selectAll(".buttons")
    .on("click", function() {
      var d3Button = d3.select(this)
      var dataURL = "/data/" + d3Button.property("value") + ".json"
      d3.json(dataURL, function(error, json) {
        if (error) return console.warn(error);
        data = json;
      tropeDetail.transition().duration(1000).style("opacity", 0)
      d3.selectAll(".buttons").classed("pressed", false)
      d3.select(this).classed("pressed", true)
      var newData = d3.select(this).property("value");
      d3.selectAll('#characterroundels p[value]').classed('is-shown', false);
      d3.selectAll('#characterroundels p[value='+newData+']').classed('is-shown', true)
      updateCircles(data)
      });

});


// This function wraps around the d3 pattern (bind, add, update, remove)
function updateCircles(newData) {

  // bind data for death dots
  var makeSomeDots = dotsOfTrope.selectAll("circle.dotOfTrope")
    .data(newData)

    // add new death dots
    makeSomeDots.enter().append("circle")
      .attr("class", "dotOfTrope")
      .attr("cx", centerPoint)
      .attr("cy", centerPoint)
      .attr("r", 0)
      .transition().delay(function (d, i) {return i * delayVarShort; })
//      .attr("cx", centerPoint)
//      .attr("cy", centerPoint)
      .attr("cx", calcCosForDots)
      .attr("cy", calcSinForDots)
      .attr("r", function (d) { return dotSize; })
      .style("fill", colorTheDots)
//      .style("stroke-width", evilKillIndicator)
      ;

    // update existing death dots
    makeSomeDots
      .transition().delay(function (d, i) {return i * delayVarShort; })
      .attr("cy", calcSinForDots)
      .attr("cx", calcCosForDots)
//      .attr("cx", centerPoint)
//      .attr("cy", centerPoint)
      .attr("r", function (d) { return dotSize; })
      .style("fill", colorTheDots)
//      .style("stroke-width", evilKillIndicator)
      ;

    // remove old, used death dots
    makeSomeDots.exit()
      .transition().delay(function (d, i) {return i * delayVarShort; })
//      .attr("cx", centerPoint)
//      .attr("cy", centerPoint)
     .attr("cx", calcCosForDotsOnRemove)
      .attr("cy", calcSinForDotsOnRemove)
      .attr("r", 0)
      .remove();

/*
  var makeSomeDotsAssist = dotsOfTrope.selectAll("circle.assistDot")
    .data(newData)

    // add mini dots for assists
    makeSomeDotsAssist.enter().append("circle")
      .attr("class", "assistDot")
      .attr("cx", centerPoint)
      .attr("cy", centerPoint)
      .attr("r", 0)
      .transition().delay(function (d, i) {return i * delayVarShort; })
//      .attr("cx", centerPoint)
//     .attr("cy", centerPoint)
      .attr("cx", calcCosForDots)
      .attr("cy", calcSinForDots)
      .attr("r", function (d) { return d.KA == 0 ? 0 : 1; })
      .style("fill", function (d) { return d.KA == 1 ? "white" : "black";});

    // update existing mini dots for assist
    makeSomeDotsAssist
      .transition().delay(function (d, i) {return i * delayVarShort; })
//      .attr("cx", centerPoint)
//      .attr("cy", centerPoint)/
      .attr("cx", calcCosForDots)
      .attr("cy", calcSinForDots)
      .attr("r", function (d) { return d.KA == 0 ? 0 : 1; })
      .style("fill", function (d) { return d.KA == 1 ? "white" : "black";})
    ;

    // remove old mini dots for assist
    makeSomeDotsAssist
      .exit()
      .transition().delay(function (d, i) {return i * delayVarShort; })
      .delay(function (d, i) {return i * 3; })
      .attr("cx", centerPoint)
      .attr("cy", centerPoint)
//      .attr("cx", calcCosForDotsOnRemove)
//      .attr("cy", calcSinForDotsOnRemove)
      .attr("r", 0)
      .remove();
*/

    // detailed information about an individual kill
    var makeSomeDots = dotsOfTrope.selectAll("circle.dotOfTrope")
      .data(newData)
      .on("click", function(d) {
        tropeDetail.style("opacity", 0).transition().duration(1000).style("opacity", .9)
        tropeDetail.html("S"+d.s+"E"+d.e+" ("+d.ep_title+") **" + d.trope + "** " + d.trope_detail)
    })

};

function colorTheDots(d) {
  if( d.color =="") {
    return "#aaa";
  } else {
    return d.color; }
  };  

//stroke to indicate an evil kill
function evilKillIndicator(d) {
  if (d.evilKill == "1") {return .75;}
    else {return 0;}
}

// There are two SIN and COS functions. Need to figure out proper way.
// to pass parameters and make this only one set of functions.
function calcCosForDots (d) {
  return centerPoint + Math.cos((d.ep_num) * ((2 * Math.PI)/numberOfSpokes)) * ( ring - ( d.whichDotOnSpoke * (dotSize * 2))); };

function calcSinForDots (d) {
  return centerPoint + Math.sin((d.ep_num) * ((2 * Math.PI)/numberOfSpokes)) * ( ring - ( d.whichDotOnSpoke * (dotSize * 2))); };

function calcCosForDotsOnRemove (d) {
  return centerPoint + Math.cos((d.ep_num) * ((2 * Math.PI)/numberOfSpokes)) * ( 400 - ( d.whichDotOnSpoke * (dotSize * 2))); };

function calcSinForDotsOnRemove (d) {
  return centerPoint + Math.sin((d.ep_num) * ((2 * Math.PI)/numberOfSpokes)) * ( 400 - ( d.whichDotOnSpoke * (dotSize * 2))); };
