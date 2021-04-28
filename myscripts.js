

  const ToNavbarSticky = () => {
      if(window.scrollY >= 40) {
        document.getElementById("mynavbar").className ="Navbarsticky";
      }else {
        document.getElementById("mynavbar").className ="navbar-container"
      }
  }

  window.addEventListener('scroll' , ToNavbarSticky )

  console.log(window.scrollY)