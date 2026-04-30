// Page Editor - Set Default Preferences

wp.domReady(() => {
  const { select, dispatch } = wp.data;

  const PREFS_STORE = 'core/preferences';
  const EDITOR_SCOPE = 'core/edit-post';

  // Helper to safely set preference
  const setPref = (key, value) => {
    try {
      dispatch(PREFS_STORE).set(EDITOR_SCOPE, key, value);
    } catch (e) {}
  };

  // 1. Top toolbar (fixedToolbar)
  setPref('fixedToolbar', true);

  // 2. Always open list view
  // This is controlled via core/interface store
  try {
    dispatch('core/interface').enableComplementaryArea(
      'core/edit-post',
      'edit-post/block-inspector'
    );
    dispatch('core/interface').enableComplementaryArea(
      'core/edit-post',
      'edit-post/list-view'
    );
  } catch (e) {}

  // 3. Block breadcrumbs OFF
  setPref('showBreadcrumbs', false);

  // 4. Starter patterns OFF
  setPref('showBlockPatterns', false);
});
