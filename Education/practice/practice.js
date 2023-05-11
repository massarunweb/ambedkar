function change() {
    var img_arr = [
      "./images/num1.png",
      "./images/num2.png",
      "./images/num3.png",
      "./images/num4.png",
      "./images/num5.png",
      "./images/num6.png"
    ];
  
    var left = document.getElementById("left-blured-img");
    var main = document.getElementById("main-img");
    var right = document.getElementById("right-blured-img");
  
    var index = 0;
  
    setInterval(() => {
      if (index < img_arr.length - 2) {
        left.src = img_arr[index];
        main.src = img_arr[index + 1];
        right.src = img_arr[index + 2];
      } else if (index == img_arr.length - 2) {
        left.src = img_arr[index];
        main.src = img_arr[index + 1];
        right.src = img_arr[0];
      } else if (index == img_arr.length - 1) {
        left.src = img_arr[index];
        main.src = img_arr[0];
        right.src = img_arr[1];
      } else if (index == img_arr.length) {
        index = 0;
        left.src = img_arr[index];
        main.src = img_arr[index + 1];
        right.src = img_arr[index + 2];
      }
  
      index++;
    }, 5000);
  }
  
  change();
  