
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('layout', { title: 'Express' });
};
/*
 * POST /results
 */
exports.results = function(req, res){
  var isbn = '';
  for(var i=0; i< fake_books.length; i++ ) {
    if( req.body.book.title == fake_books[i].title || req.body.book.isbn == fake_books[i].isbn ) {
      isbn = fake_books[i].isbn
    }
  }
  var results = []
  if( isbn == '' ) {
    res.render('results', { num: 0 })
  } else {
    for( var i=0; i< schools.length; i++ ) {
      if( isbn in schools[i].has ) {
        results.push( schools[i] )
      }
    }

    res.render('results', { 
      title: 'Results',
      num: results.length,
      results: results,
      isbn: isbn
    });
  }
};
