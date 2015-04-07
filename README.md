parse-stl-ascii
===============
### STL ASCII parser

Parses an [STL](http://en.wikipedia.org/wiki/STL_%28file_format%29) (STereoLithography) ASCII string or buffer to a mesh compatible with [simplicial-complex](https://github.com/mikolalysenko/simplicial-complex). If you're looking for a streaming parser check [this](https://github.com/tmpvar/stl).

This module works well with [merge-vertices](https://github.com/thibauts/merge-vertices) to deduplicate identical vertices from different faces.

Install
-------

```bash
$ npm install parse-stl-ascii
```

Usage
-----

```javascript
var parseSTL = require('parse-stl-ascii');
var fs = require('fs');

var buf = fs.readFileSync('mesh.stl');
var mesh = parseSTL(buf);

console.log(mesh);
/*
{
  positions: [...],
  cells: [...],
  faceNormals: [...],
  name: 'solid name'
}
*/
```