
function parse(str) {
  if(typeof str !== 'string') {
    str = str.toString();
  }

  var positions = [];
  var cells = [];
  var faceNormals = [];
  var name = null;

  var lines = str.split('\n');
  var cell = [];

  for(var i=0; i<lines.length; i++) {

    var parts = lines[i]
      .trim()
      .split(' ')
      .filter(function(part) {
        return part !== '';
      });

    switch(parts[0]) {
      case 'solid':
        name = parts.slice(1).join(' ');
        break;
      case 'facet':
        var normal = parts.slice(2).map(Number);
        faceNormals.push(normal);
        break;
      case 'vertex':
        var position = parts.slice(1).map(Number);
        cell.push(positions.length);
        positions.push(position);
        break;
      case 'endfacet':
        cells.push(cell);
        cell = [];
      default:
        // skip
    }
  }

  return {
    positions: positions,
    cells: cells,
    faceNormals: faceNormals,
    name: name
  };
}

module.exports = parse;
