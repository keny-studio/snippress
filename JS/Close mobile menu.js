// Close mobile menu when clicking outside menu content

document.addEventListener('click', function (e) {

    const menu = document.querySelector(
        '.wp-block-navigation__responsive-container.is-menu-open'
    );

    if (!menu) return;

    const content = menu.querySelector(
        '.wp-block-navigation__responsive-container-content'
    );

    const openButton = document.querySelector(
        '.wp-block-navigation__responsive-container-open'
    );

    // don't close when clicking hamburger button
    if (openButton && openButton.contains(e.target)) {
        return;
    }

    // close only when clicking backdrop
    if (content && !content.contains(e.target)) {

        const closeButton = menu.querySelector(
            '.wp-block-navigation__responsive-container-close'
        );

        closeButton?.click();
    }

});
