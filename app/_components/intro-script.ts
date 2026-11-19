// Plain (server-safe) module: the layout inlines this script in <head>.

export const INTRO_SEEN_KEY = "shizuka-intro-seen";

/**
 * Inline script for <head>: marks JS as available, skips the intro for reduced motion or a repeat
 * visit this session, and lifts the curtain on its own if the app never hydrates.
 * Add `?intro` to the URL to replay it regardless of the session flag (for reviews and demos).
 */
export const introHeadScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var force=/[?&]intro\\b/.test(location.search);if((!force&&sessionStorage.getItem('${INTRO_SEEN_KEY}'))||matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('intro-skip');return}}catch(e){d.classList.add('intro-skip');return}setTimeout(function(){d.classList.add('intro-go','intro-done')},3200);setTimeout(function(){d.classList.add('intro-gone')},4300)})();`;
