// (function() {
//   let targetElement;

//   // Function to scroll smoothly to the element
//   function scrollToAnchor() {
//     if (window.location.hash) {
//       targetElement = document.querySelector(window.location.hash);
//       if (targetElement) {
//         targetElement.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }

//   // 1. Scroll to the anchor on load
//   window.addEventListener("load", function() {
//     scrollToAnchor();
//   });

//   // 2. Restore the scroll position if other scripts interfere
//   window.addEventListener("beforeunload", function() {
//     if (targetElement) {
//       targetElement.scrollIntoView({ behavior: "smooth" });
//     }
//   });

//   // 3. Reapply the scroll position after all scripts have finished loading
//   setTimeout(function() {
//     if (targetElement) {
//       targetElement.scrollIntoView({ behavior: "smooth" });
//     }
//   }, 500); // Adjust delay if needed
// })();
(function () {
  // Function to smoothly scroll to the target element
  function scrollToAnchor() {
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        // Use smooth scrolling
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  // Function to delay execution until layout shifts settle
  function ensureScrollToAnchor() {
    let retries = 10; // Number of retries to wait for other scripts
    const delay = 200; // Delay between retries in milliseconds

    function attemptScroll() {
      if (retries > 0) {
        retries--;
        scrollToAnchor();
        setTimeout(attemptScroll, delay);
      }
    }

    attemptScroll();
  }

  // Scroll to anchor on page load
  window.addEventListener("load", ensureScrollToAnchor);

  // Scroll to anchor on hashchange
  window.addEventListener("hashchange", scrollToAnchor);
})();



