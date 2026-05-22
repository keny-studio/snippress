<?php
add_filter( 'query_loop_block_query_vars', function( $query, $block ) {

    $current_id = get_queried_object_id();

    if ( $current_id ) {
        if ( ! isset( $query['post__not_in'] ) ) {
            $query['post__not_in'] = [];
        }

        $query['post__not_in'][] = $current_id;
    }

    return $query;

}, 10, 2 );
