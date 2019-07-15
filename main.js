

function drawBarChart(data, options, element) {

}

function drawBars(data) {
  if(!Array.isArray(data)) {
    return 'Error';
  } else {
    for(var i = 0; i < data.length; i++) {
      let div = document.createElement('div');
      div.id = 'bar' + i;
      div.className = 'barChart';
      document.getElementById('mainDiv').appendChild(div);
    }
  }
}

