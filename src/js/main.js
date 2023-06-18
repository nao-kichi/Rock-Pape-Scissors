
var imageUrls = [
  "./src/image/ぐー.png",
  "./src/image/ちょき.png",
  "./src/image/ぱー.png"
];

var imageContainer = document.getElementById("image-container");
var resultContainer = document.getElementById("result-container");

for (var i = 0; i < imageUrls.length; i++) {
  var img = new Image();
  img.src = imageUrls[i];
  img.style.display = "none";
  imageContainer.appendChild(img);
}

function displayImagesWithDelay(delay) {
  var images = imageContainer.getElementsByTagName("img");
  var currentIndex = 0;

  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  images[currentIndex].style.display = "block";

  var intervalId = setInterval(function () {
    images[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = "block";
  }, delay);

  function stopImageLoop() {
    clearInterval(intervalId);
    var resultText = "";
    var userHand = this.textContent; // ユーザーが選んだ手を取得
    if (currentIndex === 0) {
      resultText = "グー";
    } else if (currentIndex === 1) {
      resultText = "チョキ";
    } else if (currentIndex === 2) {
      resultText = "パー";
    }
    var computerHand = resultText; // コンピュータの手

 // 勝敗判定
 var result = "";
 if (userHand === computerHand) {
   result = "引き分け";
 } else if (
   (userHand === "グー" && computerHand === "チョキ") ||
   (userHand === "チョキ" && computerHand === "パー") ||
   (userHand === "パー" && computerHand === "グー")
 ) {
   result = "ユーザーの勝利";
 } else {
   result = "コンピュータの勝利";
 }

 resultContainer.textContent = result;

  }

  var buttons = document.getElementsByClassName("content")[0].getElementsByTagName("button");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", stopImageLoop);
  }
}

var startButton = document.getElementById("rematch");
startButton.addEventListener("click", function () {
  resultContainer.textContent = "";
  displayImagesWithDelay(50);
});

displayImagesWithDelay(50);
