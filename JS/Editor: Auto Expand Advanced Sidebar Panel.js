// Editor: Auto Expand Advanced Sidebar Panel

wp.domReady(() => {

    function openAdvancedPanel() {

        const advancedButton = Array.from(
            document.querySelectorAll(
                'button.components-panel__body-toggle'
            )
        ).find(btn =>
            btn.textContent.includes('Advanced') ||
            btn.textContent.includes('Zaawansowane')
        );

        if (
            advancedButton &&
            advancedButton.getAttribute('aria-expanded') === 'false'
        ) {

            const scrollContainer = advancedButton.closest(
                '.interface-complementary-area'
            );

            const scrollPos = scrollContainer
                ? scrollContainer.scrollTop
                : 0;

            advancedButton.click();

            requestAnimationFrame(() => {

                if (scrollContainer) {
                    scrollContainer.scrollTop = scrollPos;
                }

            });
        }
    }

    let timeout;

    wp.data.subscribe(() => {

        clearTimeout(timeout);

        timeout = setTimeout(() => {
            openAdvancedPanel();
        }, 50);

    });

});
