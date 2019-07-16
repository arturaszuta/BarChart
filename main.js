

function drawBarChart(data, options, element) {
  //Declare variables
  let axis = options.axis;

  //Remove existing axis class from parent container if applicable
  document.getElementById(element).classList.remove('xAxis');
  document.getElementById(element).classList.remove('yAxis');
  
  //Set up parent container to correspond to right axis - default is X axis
  if(axis == 'x') {
    document.getElementById(element).classList.add('xAxis');
  } else if (axis == 'y') {
    document.getElementById(element).classList.add('yAxis');
  } else {
    document.getElementById(element).classList.add('xAxis');
  }

  //Call functions to generate the bar charts
  drawBars(data, axis, element);
  adjustBarLength(data, axis);
  displayValueInsideBar(data, options);
  addLabels(data, options, element);
}

function drawBars(data, axis, element) {
  //Check if correct data type is passed
  if(!Array.isArray(data)) {
    return 'Error - data type is not an array. Please pass an array as an argument.';
  } else {
    //Create as many div's as there are numbers in the array and add them to the parent element.
    for(var i = 0; i < data.length; i++) {
      let div = document.createElement('div');
      div.id = 'bar' + i;
      div.className = 'barChart';
      document.getElementById(element).appendChild(div);
    }
  }
}

function adjustBarLength(data, axis) {
  //Find out the largest element of the array to establish the largest bar chart
  let dataArrayNumberValues = [];
  for(var i = 0; i < data.length;i++) {
    dataArrayNumberValues.push(data[i][0])
  }
  let largest = Math.max.apply(Math, dataArrayNumberValues);
  //Based on axis - div sizes adjusted depending on the array values
  let direction = '';
  let size = '';
  if(axis == 'x') {
    direction = 'height';
    size = 'width';
  } else if (axis = 'y') {
    direction = 'width';
    size = 'height';
  } else {
    console.log('Axis is not recognized');
  }
  for(var i = 0; i < data.length; i++) {
    document.getElementById('bar' + i).style[direction] = (data[i][0] / largest * 80) + '%';
    document.getElementById('bar' + i).style[size] = (80 / data.length) + '%';  
  }
}

function displayValueInsideBar(data, options) {

  for(var i = 0; i < data.length; i++) {
    let div = document.createElement('div');
    div.id = 'barChartValue' + i;
    div.className = 'textInsideBarChart';
    div.textContent = data[i][0];
    document.getElementById('bar'+ i).appendChild(div);
    if(options.barChartText == 'right') {
      document.getElementById('bar' + i).classList.add('right');
    }
  }
  
    let matches = document.querySelectorAll('.textInsideBarChart');
    matches.forEach(element => {
    element.classList.add('barChart-' + options.barChartText);
    });
   
}

function addLabels(data, options, element) {
  for(var i = 0; i < data.length; i++) {
    let div = document.createElement('div');
    div.id = 'label' + i;
    if(options.axis == 'x') {
      div.className = 'labelX';
    } else if(options.axis == 'y') {
      div.className = 'labelY';
      stylingCorrection();
    } else {
      div.className = 'labelX';
    }   
    div.textContent = data[i][1];
    document.getElementById('bar' + i).appendChild(div);  
  }
}

function stylingCorrection() {
  let barArray = document.querySelectorAll('.textInsideBarChart');
  barArray.forEach(element => {
    element.classList.add('corrective-styling');
  })
}

drawBarChart([[12, 'mazda'],[7,'bmw'],[4, 'tesla'],[5, 'mercedes']], {axis: 'y', barChartText: 'center'}, 'mainDiv');

