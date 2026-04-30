<?php

// Define the maximum number of revisions allowed in editor to optimize database.

 // MAX NUMBER OF REVISIONS
define( 'MAX_POST_REVISIONS', 6 );

// Hook into the 'wp_revisions_to_keep' filter.
add_filter( 'wp_revisions_to_keep', 'limit_post_revisions', 10, 2 );
/**
 * Limits the number of revisions for each post type.
 *
 * @param int    $num  The number of revisions to keep.
 * @param object $post The post object.
 * @return int The limited number of revisions to keep.
 */
function limit_post_revisions( $num, $post ) {
    // Get the post type of the current post.
    $post_type = get_post_type( $post );
    // Check if the post type supports revisions.
    if ( post_type_supports( $post_type, 'revisions' ) ) {
        // Limit the number of revisions to the defined maximum.
        return MAX_POST_REVISIONS;
    }
    return $num;
}
