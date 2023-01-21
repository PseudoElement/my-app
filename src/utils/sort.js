export function compare( a, b, selectedSort ) {
    if ( a[selectedSort] < b[selectedSort] ){
      console.log(a[selectedSort], b[selectedSort])
      return -1;
    }
    if ( a[selectedSort] > b[selectedSort] ){
      console.log(a[selectedSort], b[selectedSort])
      return 1;
    }
    console.log(a[selectedSort], b[selectedSort])
    return 0;
  }