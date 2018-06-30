const googleTrends = require('google-trends-api');

function TrendzController () {

}

TrendzController.prototype.interestOverTime = function(req,res){
    googleTrends.interestOverTime({keyword: req.body.keyword,startTime:new Date(new Date("2017/07/03")),endTime:new Date(Date.now()),geo: 'IN'})
    .then(function(results){
      console.log('These results are awesome', results);
      res.json(results)
    })
    .catch(function(err){
      console.error('Oh no there was an error', err);
      res.json(results)
    });
}



var trendzController = new TrendzController()

module.exports = trendzController