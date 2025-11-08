// Notes Dashboard Widget
<?php 

add_action('wp_dashboard_setup', 'keny_dashboard_notes_widget');
function keny_dashboard_notes_widget() {
    wp_add_dashboard_widget(
        'keny_dashboard_notes',          
        'KENY Notes',                    // Set your widget Title here
        'keny_dashboard_notes_display'   
    );
}
function keny_dashboard_notes_display() {
    $notes = get_option('keny_dashboard_notes', '');

    if (isset($_POST['keny_dashboard_notes_nonce']) && wp_verify_nonce($_POST['keny_dashboard_notes_nonce'], 'save_keny_dashboard_notes')) {
        $notes = sanitize_textarea_field($_POST['keny_dashboard_notes']);
        update_option('keny_dashboard_notes', $notes);
        echo '<div class="updated"><p>Note saved.</p></div>';
    }
    ?>
    <form method="post">
        <?php wp_nonce_field('save_keny_dashboard_notes', 'keny_dashboard_notes_nonce'); ?>
        <textarea name="keny_dashboard_notes" rows="10" style="width:100%;"><?php echo esc_textarea($notes); ?></textarea>
        <p><input type="submit" class="button button-primary" value="Save Notes"></p>
    </form>
    <?php
}
