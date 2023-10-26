window.addEventListener("load", () => {
    let graciasDescription = document.querySelector('.graciasDescription');
    let graciasContainer = document.querySelector('.graciasDesCont');
    let logo = document.querySelector('.descriptionLogo');
    let graciasText = document.querySelector('.descriptionText');
    let graciasParrafo = document.querySelector('.descriptionParrafo');
    let graciasButton = document.querySelector('.descriptionButton');
    let imageContainer = document.querySelector('.graciasImage');
    let altura = screen.height;
    console.log(altura);
    if( screen.height >= 640 ) {
        logo.style.top = '2.5rem';
        graciasText.style.top = '9rem';
        graciasButton.style.bottom = '6rem';
        graciasParrafo.style.top = '14rem';
        imageContainer.style.top = '-15rem';
    }
    if( screen.height >= 780 ){
        graciasContainer.style.height = '82%';
        logo.style.top = '3.5rem';
        graciasText.style.top = '10rem';
        graciasText.style.height = '3rem';
        graciasParrafo.style.top = '14rem';
        graciasButton.style.bottom = '3rem';
    }
    if( screen.height >= 800 ) {
        imageContainer.style.height = '38.5rem';
    }
    if( screen.height >= 812 ) {
        imageContainer.style.height = '39rem';
    }
    if( screen.width === 360 && screen.height >= 880 ) {
        graciasDescription.style.height = '48rem';
        imageContainer.style.height = '46rem';
        imageContainer.style.top = '-14rem';
        logo.style.top = '3.5rem';
        logo.style.height = '5rem';
        graciasText.style.top = '12rem';
        graciasText.style.height = '3.5rem';
        graciasParrafo.style.top = '17.5rem';
    }
    if( screen.height >= 915 ) {
        graciasDescription.style.height = '52rem';
        imageContainer.style.height = '51rem';
        imageContainer.style.top = '-17rem';
        logo.style.height = '5rem';
        logo.style.top = '4.5rem';
        graciasText.style.top = '13rem';
        graciasText.style.height = '3.7rem';
        graciasParrafo.style.top = '20rem';
        graciasButton.style.bottom = '2rem';
    }
    if( screen.height >= 1024 ) {
        logo.style.height = '7rem';
        logo.style.top = '5.5rem';    
        graciasText.style.height = '5.5rem';
        graciasText.style.top = '16rem';
        graciasParrafo.style.top = '23rem';
        // graciasButton.style.width = '34%';
    }
    if( screen.height >= 1180 ) {
        graciasParrafo.style.top = '28rem';
    }
    if( screen.height >= 1280 ) {
        graciasText.style.height = '6rem';
        graciasText.style.top = '18rem';
        graciasParrafo.style.top = '28rem';
    }
})
