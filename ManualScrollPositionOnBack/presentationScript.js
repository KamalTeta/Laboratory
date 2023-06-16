(function(){
    var currentSlide = 1;

        function moveForward () {
            if (currentSlide < 6) {
                currentSlide ++;
                document.getElementById(currentSlide).classList.add("focus");
            }
        }

        function moveBackward () {
            if (currentSlide > 1) {
                document.getElementById(currentSlide).classList.remove("focus");
                currentSlide --;
            }
        }

        document.addEventListener("keydown", function(e){
            if (e.keyCode == '37') {
                moveBackward();
            }
            if (e.keyCode == '39') {
                moveForward();
            }
        })

        document.querySelector("#arrowForward").addEventListener("click", function(){
            moveForward();
        });
        document.querySelector("#arrowBackward").addEventListener("click", function(){
            moveBackward();
        });
})();