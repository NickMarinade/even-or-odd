function nanyHandler() {
  debugger;
  // write me!
  strings.displayed = "NaNy";
  let currentDisplayed = strings.displayed;
  let currentArray = strings[currentDisplayed];
  let currentListComponent = renderList(currentArray, currentDisplayed);
  let listContainer = document.getElementById('selected');
  listContainer.appendChild(currentListComponent);
  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'NaNy',
    strings: JSON.parse(JSON.stringify(strings))
  });
  document.getElementById('nany-button').removeEventListener('click', nanyHandler);
}
