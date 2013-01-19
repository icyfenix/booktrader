
/*
 * GET home page.
 */

exports.form = function(req, res){
  res.render('results', { 
    title: 'Results',
    book: req.body.book,
    school: req.body.school
  });
};
