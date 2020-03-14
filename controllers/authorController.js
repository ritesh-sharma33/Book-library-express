var Author = require('../models/author');

exports.author_list = function(req, res, next) {
  Author.find()
    .populate('author')
    .sort([['family_name', 'ascending']])
    .exec(function(err, list_authors) {
      if (err) { return next(err); }
      res.render('author_list', { title: 'Author List', author_list: list_authors });
    })
}

exports.author_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Author details' + req.params.id);
}

exports.author_create_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Author create GET');
}

exports.author_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Author create post');
}

exports.author_delete_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Author delete get');
}

exports.author_delete_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Author delete post');
}

exports.author_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Author update get');
}

exports.author_update_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Author update post');
}
