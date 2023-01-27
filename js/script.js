
function changeMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


document.addEventListener("DOMContentLoaded", function () {
  this.addEventListener("click", e => {
    let tar = e.target;
    if (tar.hasAttribute("data-dl")) {
      let dlClass = "dl-working";
      if (!tar.classList.contains(dlClass)) {
        let lastSpan = tar.querySelector("span:last-child"),
          lastSpanText = lastSpan.textContent,
          timeout = getMSFromProperty("--dur", ":root");

        tar.classList.add(dlClass);
        lastSpan.textContent = "Downloading…";
        tar.disabled = true;

        setTimeout(() => {
          lastSpan.textContent = "Completed!";


          window.open("./cv.pdf", "_blank", "toolbar = yes، top = 1000، left = 1000، width = 2000، height = 1000")
        }, timeout * 0.9);

        setTimeout(() => {
          tar.classList.remove(dlClass);
          lastSpan.textContent = lastSpanText;
          tar.disabled = false;
        }, timeout + 1e3);
      }
    }

  });
});
function getMSFromProperty(property, selector) {
  let cs = window.getComputedStyle(document.querySelector(selector)),
    transDur = cs.getPropertyValue(property),
    msLabelPos = transDur.indexOf("ms"),
    sLabelPos = transDur.indexOf("s");

  if (msLabelPos > -1)
    return transDur.substr(0, msLabelPos);
  else if (sLabelPos > -1)
    return transDur.substr(0, sLabelPos) * 1e3;
}

// lingth mode dawnlode button 


document.addEventListener("DOMContentLoaded", function () {
  this.addEventListener("click", e => {
    let tar = e.target;
    if (tar.hasAttribute("data-dl1")) {
      let dlClass = "dl-working";
      if (!tar.classList.contains(dlClass)) {
        let lastSpan = tar.querySelector("span:last-child"),
          lastSpanText = lastSpan.textContent,
          timeout = getMSFromProperty("--dur", ":root");

        tar.classList.add(dlClass);
        lastSpan.textContent = "Downloading…";
        tar.disabled = true;

        setTimeout(() => {
          lastSpan.textContent = "Completed!";


          window.open("./cv lingth.pdf", "_blank", "toolbar = yes، top = 1000، left = 1000، width = 2000، height = 1000")
        }, timeout * 0.9);

        setTimeout(() => {
          tar.classList.remove(dlClass);
          lastSpan.textContent = lastSpanText;
          tar.disabled = false;
        }, timeout + 1e3);
      }
    }

  });
});
function getMSFromProperty(property, selector) {
  let cs = window.getComputedStyle(document.querySelector(selector)),
    transDur = cs.getPropertyValue(property),
    msLabelPos = transDur.indexOf("ms"),
    sLabelPos = transDur.indexOf("s");

  if (msLabelPos > -1)
    return transDur.substr(0, msLabelPos);
  else if (sLabelPos > -1)
    return transDur.substr(0, sLabelPos) * 1e3;
}

// end lingth mode dawnlode button 

//top button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// end top button







// Get the modal

// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img1 = document.getElementById("myImg1");
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img1.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = img.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }





document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});


// var myVar;

// function myFunction() {
//   myVar = setTimeout(showPage, 1000);
// }

// function showPage() {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("myDiv").style.display = "block";
// }

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})