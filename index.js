const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
function superbowlWin(record) {
    // Use the find() method to search for a win in the record array
    const win = record.find(event => event.result === "W");
  
    // If a win is found, return the corresponding year
    if (win) {
      return win.year;
    }
  
    // If no win is found, return undefined
    return undefined;
  }
  