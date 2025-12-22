// Add custom post type

function create_custom_post() {
    register_post_type( 'custom-post', // slug for custom post type
        array(
        'labels' => array(
            'name' => __( 'Custom Post' ),
        ),
        'public'       => true,
        'hierarchical' => true, 
        'has_archive'  => true,
        'supports'     => array(
            'title',
            'editor',
            'excerpt',
            'thumbnail',
        ), 
        'can_export' => true,
        'taxonomies' => array(
             'post_tag',
              category',
        )
    ));
}

add_action( 'init', 'create_custom_post' );
