function define(name, value) {
    return Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}
function getKeyByValue(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value);
} 


var staticGallery = {
  galleries: [
  {
  path: "Architecture",
  image: {
    path: "annapurna-massif-himalayas-nepal-4k-wallpaper.jpg",
    fullpath: "Architecture/annapurna-massif-himalayas-nepal-4k-wallpaper.jpg",
    name: "annapurna-massif-himalayas-nepal-4k-wallpaper",
    modified: "2019-04-16T13:04:45.0+0200"
  },
  name: "Architecture"
  },
  {
  path: "MotorBikes",
  image: {
  path: "MotorbikeTrip_rental_moto_vignette-Harley-Davidson-RoadKing-1800_1200x630.jpg",
  fullpath: "MotorBikes/MotorbikeTrip_rental_moto_vignette-Harley-Davidson-RoadKing-1800_1200x630.jpg",
  name: "MotorbikeTrip_rental_moto_vignette-Harley-Davidson-RoadKing-1800_1200x630",
  modified: "2019-01-14T00:26:29.0+0100"
  },
  name: "MotorBikes"
  },
  {
  path: "Space",
  image: {
  path: "space1.jpg",
  fullpath: "Space/space1.jpg",
  name: "space1",
  modified: "2019-01-31T11:59:16.0+0100"
  },
  name: "Space"
  },
  {
  path: "pes",
  image: {
  path: "How-to-Train-Your-Beagle-Dog-to-Be-Off-leash.jpg",
  fullpath: "pes/How-to-Train-Your-Beagle-Dog-to-Be-Off-leash.jpg",
  name: "How-to-Train-Your-Beagle-Dog-to-Be-Off-leash",
  modified: "2019-02-08T01:31:20.0+0100"
  },
  name: "pes"
  },
  {
  path: "jahody",
  image: {
  path: "z-STRA-CWW3508-A_h.jpg",
  fullpath: "jahody/z-STRA-CWW3508-A_h.jpg",
  name: "z-STRA-CWW3508-A_h",
  modified: "2019-02-08T01:27:59.0+0100"
  },
  name: "jahody"
  },
  {
  path: "Dizajn",
  image: {
  path: "pexels-photo-221506-5.jpg",
  fullpath: "Dizajn/pexels-photo-221506-5.jpg",
  name: "pexels-photo-221506-5",
  modified: "2019-04-11T17:45:54.0+0200"
  },
  name: "Dizajn"
  },
  {
  path: "cars",
  image: {
  path: "ferrari-488-spider-1.jpg",
  fullpath: "cars/ferrari-488-spider-1.jpg",
  name: "ferrari-488-spider-1",
  modified: "2019-01-17T14:23:25.0+0100"
  },
  name: "cars"
  },
  {
  path: "Wicher%20is%20cool%21",
  image: {
  path: "ar0uq_m_uz8_tumb_660.jpg",
  fullpath: "Wicher%20is%20cool%21/ar0uq_m_uz8_tumb_660.jpg",
  name: "ar0uq_m_uz8_tumb_660",
  modified: "2019-02-20T14:05:26.0+0100"
  },
  name: "Wicher is cool!"
  },
  {
  path: "people",
  image: {
  path: "pexels-photo-1282270.jpg",
  fullpath: "people/pexels-photo-1282270.jpg",
  name: "pexels-photo-1282270",
  modified: "2019-01-14T19:37:10.0+0100"
  },
  name: "people"
  },
  {
  path: "a",
  image: {
  path: "45452594_10215125997255127_3641667847899316224_n.jpg",
  fullpath: "a/45452594_10215125997255127_3641667847899316224_n.jpg",
  name: "45452594_10215125997255127_3641667847899316224_n",
  modified: "2019-01-16T14:11:37.0+0100"
  },
  name: "a"
  },
  {
  path: "TEST",
  image: {
  path: "pf.jpg",
  fullpath: "TEST/pf.jpg",
  name: "pf",
  modified: "2019-01-31T11:54:53.0+0100"
  },
  name: "TEST"
  },
  {
  path: "food",
  image: {
  path: "banana-muffins-2.jpg",
  fullpath: "food/banana-muffins-2.jpg",
  name: "banana-muffins-2",
  modified: "2018-10-21T22:02:37.0+0200"
  },
  name: "food"
  },
  {
  path: "Wild%20animals",
  image: {
  path: "1412019705887_wps_20_Tiger_ftr_ALAMY_A9XWED_jp.jpg",
  fullpath: "Wild%20animals/1412019705887_wps_20_Tiger_ftr_ALAMY_A9XWED_jp.jpg",
  name: "1412019705887_wps_20_Tiger_ftr_ALAMY_A9XWED_jp",
  modified: "2019-01-14T15:56:51.0+0100"
  },
  name: "Wild animals"
  },
  {
  path: "Phones",
  image: {
  path: "Samsung-Galaxy-S10-header-1800x1200.jpg",
  fullpath: "Phones/Samsung-Galaxy-S10-header-1800x1200.jpg",
  name: "Samsung-Galaxy-S10-header-1800x1200",
  modified: "2019-02-06T16:43:42.0+0100"
  },
  name: "Phones"
  },
  {
  path: "auta",
  image: {
  path: "Ford_Mustang_coupe.jpg",
  fullpath: "auta/Ford_Mustang_coupe.jpg",
  name: "Ford_Mustang_coupe",
  modified: "2019-02-05T23:54:26.0+0100"
  },
  name: "auta"
  },
  {
  path: "Candy%20cat",
  image: {
  path: "cake.jpg",
  fullpath: "Candy%20cat/cake.jpg",
  name: "cake",
  modified: "2019-02-17T21:05:27.0+0100"
  },
  name: "Candy cat"
  },
  {
  path: "sport",
  image: {
  path: "mgm22.jpg",
  fullpath: "sport/mgm22.jpg",
  name: "mgm22",
  modified: "2019-01-18T00:09:57.0+0100"
  },
  name: "sport"
  },
  {
  path: "Cooking",
  image: {
  path: "pexels-photo-24464.jpg",
  fullpath: "Cooking/pexels-photo-24464.jpg",
  name: "pexels-photo-24464",
  modified: "2019-01-14T19:27:16.0+0100"
  },
  name: "Cooking"
  }
  ]
  };
  
// define("gallery", staticGallery);
var fs = require('fs');
try {
  var data = fs.readFileSync('./resources/example_big.in', 'utf8');
  // var data = fs.readFileSync('./resources/test.in', 'utf8');
  
  var json = {};
  // {
  //   big: "large",
  //   large: "big",
  // };
  var num;
  var linesOfDic;
  var linesOfCases;
  var dictionary = {};
  var cases = {};

  var lines = data.split('\n');
  num = parseInt(lines[0]);
  for(var n = 1; n < lines.length; n++){
    linesOfDic = parseInt(lines[n]);
    for(var d = n+1; d <= linesOfDic+n; d++){
      var f = lines[d].toLowerCase();
      json[f.split(" ")[0]] = f.split(" ")[1];
      json[f.split(" ")[1]] = f.split(" ")[0];
    }
    y =linesOfDic+n+1;
    var x = lines[y];
    linesOfCases = parseInt(x);
    // for(var c = 2+n+linesOfDic; c <= linesOfDic+linesOfCases+2; c++){
    for(var c = 2+n+linesOfDic; c <= 1+n+linesOfDic+linesOfCases; c++){
      var find = lines[c].split(" ")[0].toLowerCase();
      var synn = lines[c].split(" ")[1].toLowerCase();
      
      // console.log(json);
      // console.log(lines[c]);


var daco = getKeyByValue(json,find);
var nieco = getKeyByValue(json,synn);

      if(find === synn) {
        console.log("synonyms");
      } else {
        if(json[synn] === find){
          console.log("synonyms");
        } else if (json[json[find]] === synn){
          console.log("synonyms");
        } else if(json[synn] === find){
          console.log("synonyms");
        } else if (json[json[find]] === synn){
          console.log("synonyms");
        } else if (json[json[synn]] === find){
          console.log("synonyms");
        } else if 
         ( daco===synn){
          console.log("synonyms");
        } else if 
         ( nieco===find){
          console.log("synonyms");
        } else if 
         ( nieco===find){
          console.log("synonyms");
        } else if 
         ( json[daco]===synn){
          console.log("synonyms");
        } else if 
         ( json[json[daco]]===synn){
          console.log("synonyms");
        } else if 
         ( json[nieco]===synn){
          console.log("synonyms");
        } else if 
         ( json[json[nieco]]===synn){
          console.log("synonyms");
        } else if 
        ( json[nieco]===find){
         console.log("synonyms");
       } else if 
        ( json[json[nieco]]===find){
         console.log("synonyms");
        
        } else {
          console.log("different");

        }
        
        

      }
    }

    json = {};
    n = 1+n+linesOfDic+linesOfCases;
  }

  








  // console.log(data);

} catch(e) {
  console.log('Error:', e.stack);
}



  // var lines = data.split('\n');
  // console.log(lines[0]);
  // num = parseInt(lines[0]);
  // for(var n = 1; n < lines.length; n++){
  //   linesOfDic = parseInt(lines[n]);
  //   console.log(linesOfDic);
  //   for(var d = n+1; d <= linesOfDic+n; d++){
  //     console.log(lines[d]);
  //   }
  //   y =linesOfDic+n+1;
  //   var x = lines[y];
  //   linesOfCases = parseInt(x);
  //   console.log(linesOfCases);
  //   // for(var c = 2+n+linesOfDic; c <= linesOfDic+linesOfCases+2; c++){
  //   for(var c = 2+n+linesOfDic; c <= 1+n+linesOfDic+linesOfCases; c++){
  //     console.log(lines[c]);
  //   }
  //   n = 1+n+linesOfDic+linesOfCases;
  // }