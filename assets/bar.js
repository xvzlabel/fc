
var params = new URLSearchParams(window.location.search);

function sendTo(url) {
    // Dodaj obsługę nowych nazw plików
    const pageMap = {
        'home': 'home.html',
        'documents': 'documents.html',
        'services': 'services.html',
        'qr': 'qr.html',
        'more': 'more.html',
        'card': 'id.html',  // Stare przekierowanie
        'login': 'login.html'
    };
    
    const targetPage = pageMap[url] || url;
    location.href = targetPage + (params.toString() ? '?' + params.toString() : '');
}

document.querySelectorAll(".bottom_element_grid").forEach((element) => {
    element.addEventListener('click', () => {
        sendTo(element.getAttribute("send"))
    })
})

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    if (/windows phone/i.test(userAgent)) {
        return 1;
    }
  
    if (/android/i.test(userAgent)) {
        return 2;
    }
  
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 3;
    }
  
    return 4;
  }
  
  if (getMobileOperatingSystem() == 2){
      document.querySelector(".bottom_bar").style.height = "70px"
}