// Search results - exclude pages - include posts and all custom post types

function search_exclude_pages_include_all_cpt($query) {
    if (!is_admin() && $query->is_main_query() && $query->is_search()) {

        // Get all public post types
        $post_types = get_post_types([
            'public' => true,
        ]);

        // Remove 'page'
        unset($post_types['page']);

        // Apply to search
        $query->set('post_type', array_values($post_types));
    }
}
add_action('pre_get_posts', 'search_exclude_pages_include_all_cpt');
