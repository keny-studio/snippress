// Excluding pages from search

function exclude_pages_from_search() {
    global $wp_post_types;
    $wp_post_types['page']->exclude_from_search = true;
}

add_action( 'init', 'exclude_pages_from_search' );
