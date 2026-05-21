// Add Custom Keyboard Shortcuts in Gutenberg Editor

// Shortcut	   Action
// Alt + C	   Styles → Blocks
// Alt + V	   Settings → Block
// Alt + B	   Advanced → CSS field
// Alt + D	   Duplicate block
// Alt + N     Command Palette

document.addEventListener('keydown', async function (e) {

    const isAlt = e.altKey;
    if (!isAlt) return;

    const key = e.key.toLowerCase();
    const wait = ms => new Promise(r => setTimeout(r, ms));

    const findBtn = (text) =>
        Array.from(document.querySelectorAll('button'))
            .find(btn =>
                btn.textContent.trim() === text ||
                btn.getAttribute('aria-label')?.includes(text)
            );

    const findTab = (text) =>
        Array.from(document.querySelectorAll('[role="tab"]'))
            .find(tab => tab.textContent.trim() === text);

    const sidebar = document.querySelector('.interface-complementary-area');

    // -----------------------------------
    // ALT + C → Styles → Blocks
    // -----------------------------------
    if (key === 'c') {

        e.preventDefault();

        const stylesBtn = findBtn('Styles');
        if (stylesBtn) stylesBtn.click();

        await wait(120);

        const blocksBtn = findBtn('Blocks') || findBtn('Bloki');
        if (blocksBtn) blocksBtn.click();
    }

    // -----------------------------------
    // ALT + V → Settings → Block
    // -----------------------------------
    if (key === 'v') {

        e.preventDefault();

        const settingsBtn = findBtn('Settings');
        if (settingsBtn) settingsBtn.click();

        await wait(120);

        const blockTab = findTab('Block') || findTab('Blok');
        if (blockTab) blockTab.click();
    }

    // -----------------------------------
    // ALT + B → Advanced → CSS field
    // -----------------------------------
   if (key === 'b') {

    e.preventDefault();

    const wait = ms => new Promise(r => setTimeout(r, ms));

    const sidebar = document.querySelector('.interface-complementary-area');

    const advancedBtn = Array.from(
        document.querySelectorAll('button.components-panel__body-toggle')
    ).find(btn =>
        btn.textContent.includes('Advanced') ||
        btn.textContent.includes('Zaawansowane')
    );

    if (!advancedBtn) return;

    const scrollPos = sidebar ? sidebar.scrollTop : 0;

    advancedBtn.click();

    // wait for React render (important)
    await wait(150);

    if (sidebar) sidebar.scrollTop = scrollPos;

    // wait again for inner fields to mount
    await wait(150);

    // more reliable selector (covers WP variations)
const cssField =
    Array.from(document.querySelectorAll('input, textarea'))
        .find(el => {
            const label =
                el.getAttribute('aria-label') ||
                el.getAttribute('placeholder') ||
                '';

            return (
                label.includes('Additional CSS class') ||
                label.includes('Additional CSS classes') ||
                label.includes('Dodatkowe klasy CSS')
            );
        });

    if (cssField) {
        cssField.focus();
        cssField.select?.();
        return;
    }

    // fallback: try last input in Advanced panel
    const fallback = document.querySelector(
        '.components-panel__body.is-opened input:last-of-type'
    );

    if (fallback) {
        fallback.focus();
        fallback.select?.();
    }
}

    // -----------------------------------
    // ALT + D → Duplicate block
    // -----------------------------------
    if (key === 'd') {

        e.preventDefault();

        const selectedId =
            wp.data.select('core/block-editor').getSelectedBlockClientId();

        if (selectedId) {
            wp.data.dispatch('core/block-editor').duplicateBlocks([selectedId]);
        }
    }

    // -----------------------------------
    // ALT + N → Command Palette
    // -----------------------------------
    if (key === 'n') {

        e.preventDefault();

        const actions = [
            {
                label: 'Styles → Blocks',
                run: async () => {
                    const stylesBtn = findBtn('Styles');
                    if (stylesBtn) stylesBtn.click();

                    await wait(120);

                    const blocksBtn = findBtn('Blocks') || findBtn('Bloki');
                    if (blocksBtn) blocksBtn.click();
                }
            },
            {
                label: 'Settings → Block',
                run: async () => {
                    const settingsBtn = findBtn('Settings');
                    if (settingsBtn) settingsBtn.click();

                    await wait(120);

                    const blockTab = findTab('Block') || findTab('Blok');
                    if (blockTab) blockTab.click();
                }
            },
            {
                label: 'Advanced → CSS field',
                run: async () => {
                    const advancedBtn = Array.from(
                        document.querySelectorAll('button.components-panel__body-toggle')
                    ).find(btn =>
                        btn.textContent.includes('Advanced') ||
                        btn.textContent.includes('Zaawansowane')
                    );

                    if (advancedBtn) advancedBtn.click();
                }
            },
            {
                label: 'Duplicate block',
                run: () => {
                    const selectedId =
                        wp.data.select('core/block-editor').getSelectedBlockClientId();

                    if (selectedId) {
                        wp.data.dispatch('core/block-editor').duplicateBlocks([selectedId]);
                    }
                }
            }
        ];

        const choice = prompt(
            'Gutenberg Commands:\n\n' +
            actions.map((a, i) => `${i + 1}. ${a.label}`).join('\n') +
            '\n\nType number:'
        );

        const index = parseInt(choice, 10) - 1;

        if (actions[index]) {
            await actions[index].run();
        }
    }

});
