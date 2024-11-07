(function(document) {
    var metas = document.getElementsByTagName('meta'),
        changeViewportContent = function(content) {
            for (var i = 0; i < metas.length; i++) {
                if (metas[i].name == "viewport") {
                    metas[i].content = content;
                }
            }
        },
        initialize = function() {
            changeViewportContent("width=device-width, minimum-scale=1.0, maximum-scale=1.0");
        },
        gestureStart = function() {
            changeViewportContent("width=device-width, minimum-scale=0.25, maximum-scale=1.6");
        },
        gestureEnd = function() {
            initialize();
        };


    if (navigator.userAgent.match(/iPhone/i)) {
        initialize();

        document.addEventListener("touchstart", gestureStart, false);
        document.addEventListener("touchend", gestureEnd, false);
    }
})(document);


document.addEventListener("DOMContentLoaded", function() {
  // Preserve the original hash value on load
  const originalHash = window.location.hash;

  // Scroll smoothly to the element when page loads with a hash
  if (originalHash) {
    const element = document.querySelector(originalHash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Listen for changes in the URL hash
  window.addEventListener("hashchange", function(event) {
    // Prevent the default hash behavior
    event.preventDefault();

    // Restore the original hash to stop the page from jumping back to top
    window.location.hash = originalHash;

    // Scroll to the anchor element
    const element = document.querySelector(originalHash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  });
});

