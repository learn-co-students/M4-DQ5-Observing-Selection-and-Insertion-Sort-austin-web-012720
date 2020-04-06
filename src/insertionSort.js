function insertionSort(arr) {
  let length = arr.length;
  for (let i = 1; i < length; i++) {
    let key = arr[i];
    let num = i - 1;
    while (num >= 0 && arr[num] > key) {
      arr[num + 1] = arr[num];
      num = num - 1;
    }
    arr[num + 1] = key;
  }
  return arr;
}

// shown with different variable names
function anotherInsertionSort(arr) {
  for (let startIndex = 0; startIndex < arr.length; startIndex++) {
    for (
      let currentIndex = startIndex;
      currentIndex > 0 && arr[currentIndex - 1] > arr[currentIndex];
      currentIndex--
    ) {
      let temp = arr[currentIndex];
      arr[currentIndex] = arr[currentIndex - 1];
      arr[currentIndex - 1] = temp;
    }
  }
}
