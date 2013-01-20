
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('layout', { page: 'index', title: 'Express', 'fake_books': fake_books });
};
/*
 * POST /results
 */
exports.results = function(req, res){
  var isbn = '';
  var book = {};
  for(var i=0; i< fake_books.length; i++ ) {
    if( req.body.book.title == fake_books[i].title || req.body.book.isbn == fake_books[i].isbn ) {
      isbn = fake_books[i].isbn
      book = fake_books[i]
    }
  }
  var results = []
  if( isbn == '' ) {
    res.render('layout', { page: 'results', num: 0 })
  } else {
    var num_books = 0
    for( var i=0; i< schools.length; i++ ) {
      if( isbn in schools[i].has ) {
        results.push( schools[i] )
          num_books += schools[i].has[isbn];
      }
    }

    res.render('layout', { 
      page: 'results',
      title: 'Results',
      num: results.length,
      results: results,
      isbn: isbn,
      book: book,
      num_books: num_books
    });
  }
};

/*
 * POST /donateresults
 */
exports.donate_results = function(req, res){
  var isbn = '';
  var book = {};
  for(var i=0; i< fake_books.length; i++ ) {
    if( req.body.book.title == fake_books[i].title || req.body.book.isbn == fake_books[i].isbn ) {
      isbn = fake_books[i].isbn
      book = fake_books[i]
    }
  }
  var results = []
  if( isbn == '' ) {
    res.render('layout', { page: 'results', num: 0 })
  } else {
    for( var i=0; i< schools.length; i++ ) {
      if( isbn in schools[i].has ) {
        results.push( schools[i] )
      }
    }

    res.render('layout', { 
      page: 'results',
      title: 'Donate Results',
      num: results.length,
      results: results,
      isbn: isbn,
      book: book
    });
  }
};

/*
 * POST /donateresults
 */
exports.donate_results = function(req, res){
  var isbn = '';
  var book = {};
  for(var i=0; i< fake_books.length; i++ ) {
    if( req.body.book.title == fake_books[i].title || req.body.book.isbn == fake_books[i].isbn ) {
      isbn = fake_books[i].isbn
      book = fake_books[i]
    }
  }
  var results = []
  if( isbn == '' ) {
    res.render('layout', { page: 'results', num: 0 })
  } else {
    for( var i=0; i< schools.length; i++ ) {
      if( isbn in schools[i].has ) {
        results.push( schools[i] )
      }
    }

    res.render('layout', { 
      page: 'results',
      title: 'Donate Results',
      num: results.length,
      results: results,
      isbn: isbn,
      book: book
    });
  }
};
