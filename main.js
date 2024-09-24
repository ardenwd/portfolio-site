
function checkWindowSize(){
      const windowWidth = window.innerWidth;
    var dropdown = document.getElementById('dropdown');
      // If the screen width is less than or equal to 600px (mobile), hide the element
      if (windowWidth <= 768) {
        dropdown.classList.add('hidden');
      } else {
        dropdown.classList.remove('hidden');
      }
    }
window.addEventListener('load', checkWindowSize);   // Onload event
window.addEventListener('resize', checkWindowSize); // Window resize event


function toggleNav(){
      var dropdown = document.getElementById('dropdown');
   dropdown.classList.toggle('hidden');
 
}