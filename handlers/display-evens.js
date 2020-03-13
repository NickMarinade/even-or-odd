function evensHandler() {
  debugger;
  // write me!
  strings.displayed = "evens";
  let currentDisplayed = strings.displayed;
  let currentArray = strings[currentDisplayed];
  let currentListComponent = renderList(currentArray, currentDisplayed);
  let listContainer = document.getElementById('selected');
  listContainer.innerHTML = '';
  listContainer.appendChild(currentListComponent);

  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'evens',
    strings: JSON.parse(JSON.stringify(strings))
  });
}
