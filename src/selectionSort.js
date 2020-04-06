// arr is an array of unsorted integers (i.e. [3, 5, 1])

function selectionSort(arr) {
  for (let oIndex = 0; oIndex < arr.length - 1; oIndex++) {
    let minIndex = oIndex;
    for (var iIndex = oIndex; iIndex < arr.length; iIndex++) {
      if (arr[iIndex] < arr[minIndex]) minIndex = iIndex;
    }
    let temp = arr[oIndex];
    arr[oIndex] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

// shown with different variable names
function anotherSelectionSort(newArray) {
  let arrLength = newArray.length;
  for (let i = 0; i < arrLength; i++) {
    let min = i;
    for (let newIndex = i + 1; newIndex < arrLength; newIndex++) {
      if (newArray[min] > newArray[newIndex]) {
        min = newIndex;
      }
    }
    if (min !== 1) {
      let temp = newArray[min];
      newArray[i] = newArray[min];
      newArray[min] = temp;
    }
  }
}
