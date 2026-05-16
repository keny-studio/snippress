<?php

//  One-time permanent replacement - directly in the database with a PHP snippet.
// This safely updates all post/page content once, then you remove the snippet.

// How to use
// Add snippet
// Visit your website once
// Links get permanently changed in DB
// REMOVE the snippet immediately afterward

function permanent_link_replacement() {

    global $wpdb;

    $old = 'https://oldsite.com/';
    $new = 'https://newsite.com/';

    $wpdb->query(
        $wpdb->prepare(
            "
            UPDATE {$wpdb->posts}
            SET post_content = REPLACE(post_content, %s, %s)
            ",
            $old,
            $new
        )
    );
}

add_action('init', 'permanent_link_replacement');
