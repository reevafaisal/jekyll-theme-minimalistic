(function() {
  let targetElement;

  // Function to scroll smoothly to the element
  function scrollToAnchor() {
    if (window.location.hash) {
      targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  // 1. Scroll to the anchor on load
  window.addEventListener("load", function() {
    scrollToAnchor();
  });

  // 2. Restore the scroll position if other scripts interfere
  window.addEventListener("beforeunload", function() {
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });

  // 3. Reapply the scroll position after all scripts have finished loading
  setTimeout(function() {
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }, 500); // Adjust delay if needed
})();
