
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('layout', { title: 'Express' });
};

exports.results = function(req, res) {
  res.render('results');
}
