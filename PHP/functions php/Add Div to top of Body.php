<?php

// Add div right after opening <body>
function add_top_body() {
    echo '<div class="" id=""></div>';
}
add_action('wp_body_open', 'add_top_body');
