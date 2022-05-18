let n = 5;
if(n >= 1) {
    let triangle = '';
    for(let index = 1; index <= n - 1; index += 1) {
      triangle += ' ';
}
triangle += '*';
  console.log(triangle);
  for(let index = 1; index <= n - 1; index += 1) {
    triangle = triangle.substring(1);
    triangle += '*';
    console.log(triangle);
  }
}