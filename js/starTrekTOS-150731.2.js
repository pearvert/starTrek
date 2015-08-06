// Draw thebackground and the Ring of Death

// Add SVG canvas
theSpokeAndWheelChart = chartDiv.append("svg")
  .attr("width", w)
  .attr("height", h);

// Background dark gray rectangle
theSpokeAndWheelChart.append("rect")
  .attr("x",0)
  .attr("y",0)
  .attr("width",w)
  .attr("height",h)
  .style("fill", "white")
  .style("stroke-width", 2)
  .style("stroke", "#ccc");


// Add a group to the canvas for the Ring of Death
var ringSections = theSpokeAndWheelChart.append("g")
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
var episodeSpokes = theSpokeAndWheelChart.append("g")
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

var spokeLabels = theSpokeAndWheelChart.append("g")
  .attr("class", "spokeLabels");

var labels = spokeLabels.selectAll("text.spokeLabel")
  .data(starTrekTitleList)
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
        (centerPoint + Math.cos((i + .75) * ((2 * Math.PI)/numberOfSpokes)) * 255  ) + "," +
        (centerPoint + Math.sin((i + .75) * ((2 * Math.PI)/numberOfSpokes)) * 255  ) + ")" +
          "rotate(" + ((i + (numberOfSpokes/2) ) * 360 / numberOfSpokes) + ")"
    } else {
      return "translate(" +
        (centerPoint + Math.cos((i + 1.25) * ((2 * Math.PI)/numberOfSpokes)) * 255) + "," +
        (centerPoint + Math.sin((i + 1.25) * ((2 * Math.PI)/numberOfSpokes)) * 255) + ")" +
          "rotate(" + (i * 360 / numberOfSpokes) + ")"
    }
  })
  .on("mouseover", function (d) {
    var episodeTitlelen = d.title.length;
    episodeTitle
      .attr("width", 200 + "px")
//      .attr("width", function (d) {
//        return (episodeTitlelen * 10) + "px"; })
    episodeTitle.transition()
      .duration(200)
      .style("opacity", .9)
    episodeTitle.html(d.title)
      .style("left", function (d) {return (d3.event.pageX) < 300 ? (d3.event.pageX) + "px" : ((d3.event.pageX)-30) + "px"})
      .style("top", (d3.event.pageY - 28) + "px");
  })
  .on("mouseout", function(d) {
    episodeTitle.transition()
    .duration(500)
    .style("opacity", 0)
  });

// Draw the Dots in the spokes

var dotsOfTrope = theSpokeAndWheelChart.append("g")
  .attr("class", "dotsOfTrope")
  .attr("stroke", "black")
  .attr("stroke-width", 0)
  .attr("fill", "#666");

// Draw EndCap in the center
centerHubCircle = theSpokeAndWheelChart.append("g")
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

var starTrekLegend = theSpokeAndWheelChart.append("g")
  .attr('class', 'legendBox');

var lenMultipler = 10;

// Create the colored dots for the legend
var starTrekLegendDots = starTrekLegend.selectAll("circle.legendDot")
  .data(legendData)
  .enter()
  .append("circle")
  .attr("class", "legendDot")
  .attr("cx", function (d, i) {return d.itemLen; } )
  .attr("cy", 10 )
  .attr("r", 5 )
  .attr("fill", function (d, i) {return d.legendColor; })
  .style("stroke-width", evilKillIndicator
);

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
      tropeDetail.transition().duration(1000).style("opacity", 0)
      d3.selectAll(".buttons").classed("pressed", false)
      d3.select(this).classed("pressed", true)
      var newData = d3.select(this).property("value");
      updateCircles(window[newData])
      d3.selectAll('#characterroundels p[value]').classed('is-shown', false);
      d3.selectAll('#characterroundels p[value='+newData+']').classed('is-shown', true)
});

// This function wraps around the d3 pattern (bind, add, update, remove)
function updateCircles(newData) {

  // bind data for death dots
  var makeSomeDots = dotsOfTrope.selectAll("circle.dotOfDeath")
    .data(newData)

    // add new death dots
    makeSomeDots.enter().append("circle")
      .attr("class", "dotOfDeath")
      .attr("cx", centerPoint)
      .attr("cy", centerPoint)
      .attr("r", 0)
      .transition().delay(function (d, i) {return i * delayVarShort; })
      .attr("cx", calcCosForDots)
      .attr("cy", calcSinForDots)
      .attr("r", function (d) { return dotSize; })
      .style("fill", colorTheDots)
      .style("stroke-width", evilKillIndicator);

    // update existing death dots
    makeSomeDots
      .transition().delay(function (d, i) {return i * delayVarShort; })
      .attr("cx", calcCosForDots)
      .attr("cy", calcSinForDots)
      .attr("r", function (d) { return dotSize; })
      .style("fill", colorTheDots)
      .style("stroke-width", evilKillIndicator);

    // remove old, used death dots
    makeSomeDots.exit()
      .transition().delay(function (d, i) {return i * delayVarShort; })
      .attr("cx", calcCosForDotsOnRemove)
      .attr("cy", calcSinForDotsOnRemove)
      .attr("r", 0)
      .remove();

  var makeSomeDotsAssist = dotsOfTrope.selectAll("circle.assistDot")
    .data(newData)

    // add mini dots for assists
    makeSomeDotsAssist.enter().append("circle")
      .attr("class", "assistDot")
      .attr("cx", centerPoint)
      .attr("cy", centerPoint)
      .attr("r", 0)
      .transition().delay(function (d, i) {return i * delayVarShort; })
      .attr("cx", calcCosForDots)
      .attr("cy", calcSinForDots)
      .attr("r", function (d) { return d.KA == 0 ? 0 : 1; })
      .style("fill", function (d) { return d.KA == 1 ? "white" : "black";});

    // update existing mini dots for assist
    makeSomeDotsAssist
      .transition().delay(function (d, i) {return i * delayVarShort; })
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
      .attr("cx", calcCosForDotsOnRemove)
      .attr("cy", calcSinForDotsOnRemove)
      .attr("r", 0)
      .remove();

    // detailed information about an individual kill
    var makeSomeDots = dotsOfTrope.selectAll("circle.dotOfDeath")
      .data(newData)
      .on("click", function(d) {
        tropeDetail.style("opacity", 0).transition().duration(1000).style("opacity", .9)
        tropeDetail.html("S"+d.season+"E"+d.episode+" ("+d.title+") "+d.killInfo)
    })

};

function colorTheDots(d) {
  if (d.v_species == "Vampire") {
    if (d.many == 0) {return colorVampire}
      else {return colorVampireMany};
  } else if (d.v_species == "Demon") {
    if (d.many == 0) {return colorDemon}
      else {return colorDemonMany};
  } else if (d.v_species == "Human") {
    if (d.many == 0) {return colorHuman}
      else {return colorHumanMany}
  } else if (d.v_species == "Animal") {
    return colorAnimal}
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
