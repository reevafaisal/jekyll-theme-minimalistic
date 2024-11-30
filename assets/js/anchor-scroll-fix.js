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
  // Function to scroll smoothly to the element
  function scrollToAnchor() {
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        // Smoothly scroll to the target element
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  // Wait for all other scripts and potential layout shifts to complete
  window.addEventListener("load", function () {
    setTimeout(scrollToAnchor, 100); // Delay execution slightly
  });

  // Handle browser back/forward navigation
  window.addEventListener("hashchange", function () {
    scrollToAnchor();
  });
})();
 Remove unnecessary repeated scroll attempts
})();

