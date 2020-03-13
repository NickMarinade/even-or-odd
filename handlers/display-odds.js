function oddsHandler() {
  debugger;
  // write me!
  strings.displayed = "odds";
  let currentDisplayed = strings.displayed;
  let currentArray = strings[currentDisplayed];
  let currentListComponent = renderList(currentArray, currentDisplayed);
  let listContainer = document.getElementById('selected');
  listContainer.appendChild(currentListComponent);
  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'odds',
    strings: JSON.parse(JSON.stringify(strings))
  })
  document.getElementById('odds-button').removeEventListener('click', oddsHandler);
}
