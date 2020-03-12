function saveHandler() {
  debugger;
  // write me!
  let inputEl = document.getElementById('input').value;
  
  if (inputEl === '') {
    return alert('nothing to save') 
  }

  if (Number(inputEl) % 2 === 0) {
    strings.evens.push(inputEl);
  } else if (Number(inputEl) % 2 === 1) {
    strings.odds.push(inputEl);
  } else {
    strings.NaNy.push(inputEl);
  }
  

  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'save',
    inputEl,
    strings: JSON.parse(JSON.stringify(strings))
  });
}
