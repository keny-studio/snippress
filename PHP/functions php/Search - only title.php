// Search only in titles, not content
add_filter('post_search_columns', function($search_columns) {  
  return ['post_title'];
});
