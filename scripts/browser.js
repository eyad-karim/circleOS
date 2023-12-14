browserSearch.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      browser(browserSearch.value)
    }
});
function browser(search) {
    browserIframe.setAttribute('src',search)
}