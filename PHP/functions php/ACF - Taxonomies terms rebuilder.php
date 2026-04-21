// FIX FOR: missing post taxonomies, caused by ACF "Save Terms : OFF" when creating posts

// To fix this manually you need to resave all posts again.
// But you can do this automagically with this script:


add_action('admin_init', function () {

    if (!current_user_can('manage_options')) return;
    if (!isset($_GET['fix_cpt_taxonomies'])) return;

    $posts = get_posts([
        'post_type'      => 'CPT-NAME', // PASTE CUSTOM POST TYPE NAME
        'posts_per_page' => -1,
        'post_status'    => 'any',
        'fields'         => 'ids',
    ]);

    foreach ($posts as $post_id) {

        // Get ACF field (IMPORTANT)
        $terms = get_field('taxonomy-name', $post_id);  // PASTE TAXONOMY NAME

        if (!$terms) continue;

        // Normalize to term IDs
        $term_ids = [];

        foreach ($terms as $term) {
            if (is_object($term)) {
                $term_ids[] = $term->term_id;
            } else {
                $term_ids[] = (int) $term;
            }
        }

        // Force assign taxonomy
        wp_set_object_terms($post_id, $term_ids, 'taxonomy-name', false); // PASTE TAXONOMY NAME
    }


// RUN IT:

// go to page:
// www.yourwebsitename.com/wp-admin/?fix_cpt_taxonomies=1 // PASTE WEBSITE NAME
    echo 'DONE - Terms rebuilt';
    exit;
});
