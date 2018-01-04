var request = require('request');

function ProductController () {

}


ProductController.prototype.getKeywords = function(req,res){
  var url="http://completion.amazon.co.uk/search/complete?method=completion&mkt=44571&r=F4EDABSY5J0XX6K9CE5S&s=261-8357666-3763641&c=A3QGGZY8MIYO3A&p=Gateway&l=en_IN&b2b=0&fresh=0&sv=desktop&client=amazon-search-ui&x=String&search-alias=aps&q="
  var query = req.body.query
  var newUrl=url.concat(query)
  var data1=[];
  // res.json(newUrl)
request(newUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log("Response is " + response);
        var data = extractKeywords(response.body)
        var intermediateData=filter(data)
        var requiredData=removeDoubleQuotes(intermediateData)
        console.log(requiredData)
        res.json(requiredData)
    } 
}); 
}
function removeDoubleQuotes(data){
  console.log("data",data)
console.log(data[0].substring(1))
var filter=data[0].substring(1)
var filter3= data[data.length-1].substring(data.length)
return filter,filter3
// console.log(data[data.length-1].substring(data.length-1))
}
function filter(data){
  var keyword=[]
  for (i=1;i<11;i++){
    var stringremove=data[i].substring(1,data[i].length-1)
    if(i==1 ){
      stringremove.substring(1)
    }
    keyword.push(stringremove)
  }
  return keyword
}
function extractKeywords(data){
  // var keywords={}
  var filter = data.replace(/;|;String();|String|String();|completion =/g,'')
  var filter1 = filter.split(",")
  console.log("Filter\n\n",filter1)
  // var key=JSON.parse(filter1)
  // return key;
  return filter1
}


var productController = new ProductController()

module.exports = productController