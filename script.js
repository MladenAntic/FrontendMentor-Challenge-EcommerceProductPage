// Selecting the DOM

// Desktop
const cartIcon = document.querySelector('.cart-icon')
const cartItems = document.querySelector('.cart-notification')
const currentProductImage = document.querySelector('.current-product-image')
const thumbnailContainers = document.querySelectorAll('.thumbnail-container')
const thumbnails = document.querySelectorAll('.thumbnail')
const decreaseItems = document.querySelector('.minus-icon')
const increaseItems = document.querySelector('.plus-icon')
const numberOfItems = document.querySelector('.number-of-items')
const addToCart = document.querySelector('.add-to-cart-btn')

// Mobile
const menuIcon = document.querySelector('.toggle-menu-icon')
const overlay = document.querySelector('.overlay')
const mobileNavigation = document.getElementById('mobile-navigation-container')
const closeIcon = document.querySelector('.close-icon')
const previous = document.querySelector('.previous')
const next = document.querySelector('.next')

// Cart Elements
const cartNotification = document.getElementById('cart-notification-container')
const closeCart = document.querySelector('.close-cart')
const cartMessage = document.querySelector('.message')
const cartState = document.querySelector('.cart-state')
const selectedAmount = document.querySelector('.selected-amount')
const totalPrice = document.querySelector('.total-price')
const removeCartItems = document.querySelector('.delete-icon')

// Lightbox
const lightboxOverlay = document.querySelector('.lightbox-overlay')
const lightbox = document.querySelector('.lightbox')
const lightboxCurrentProductImage = document.querySelector('.lightbox .current-product-image')
const lightboxThumbnailContainers = document.querySelectorAll('.lightbox .thumbnail-container')
const lightboxThumbnails = document.querySelectorAll('.lightbox .thumbnail')
const closeLightbox = document.querySelector('.close-icon-lightbox')
const lightboxPrevious = document.querySelector('.lightbox .previous')
const lightboxNext = document.querySelector('.lightbox .next')

// Displaying the mobile menu
function displayMobileMenu() {
    if(window.innerWidth < 768) {
        menuIcon.addEventListener('click', () => {
            overlay.style.display = 'block'
            mobileNavigation.style.display = 'block'
        })
        
        closeIcon.addEventListener('click', () => {
            overlay.style.display = 'none'
            mobileNavigation.style.display = 'none'
        })

        lightbox.style.display = 'none'
        lightboxOverlay.style.display = 'none'
    } else {
        overlay.style.display = 'none'
        mobileNavigation.style.display = 'none'
    }
}

window.addEventListener('resize', displayMobileMenu)

// Thumbnail state when thumbnail clicked
for (let i = 0; i < 4; i++) {
    thumbnailContainers[i].addEventListener('click', () => {
        thumbnailContainers[i].classList.add('current-border')
        thumbnails[i].classList.add('current-opacity')
        thumbnailContainers[i].addEventListener('mouseover', () => {
            thumbnailContainers[i].style.opacity = 1
        })

        lightboxOverlay.style.display = 'block'
        lightbox.style.display = 'block'

        closeLightbox.addEventListener('click', () => {
            lightboxOverlay.style.display = 'none'
            lightbox.style.display = 'none'

            window.location.reload()
        })
    })

    lightboxThumbnailContainers[i].addEventListener('click', () => {
        lightboxThumbnailContainers[i].classList.add('current-border')
            lightboxThumbnails[i].classList.add('current-opacity')
            lightboxThumbnailContainers[i].addEventListener('mouseover', () => {
            lightboxThumbnailContainers[i].style.opacity = 1
        })
    })
}

// Functions that regulate the behaviour of all other thumbnails except one that is clicked 
function index0() {
    thumbnailContainers[1].classList.remove('current-border')
    thumbnails[1].classList.remove('current-opacity')
    thumbnailContainers[2].classList.remove('current-border')
    thumbnails[2].classList.remove('current-opacity')
    thumbnailContainers[3].classList.remove('current-border')
    thumbnails[3].classList.remove('current-opacity')

    lightboxThumbnailContainers[1].addEventListener('mouseover', () => {
        lightboxThumbnailContainers[1].style.opacity = 0.5
    })
    lightboxThumbnailContainers[2].addEventListener('mouseover', () => {
        lightboxThumbnailContainers[2].style.opacity = 0.5
    })
    lightboxThumbnailContainers[3].addEventListener('mouseover', () => {
        lightboxThumbnailContainers[3].style.opacity = 0.5
    })

    lightboxThumbnailContainers[1].addEventListener('mouseout', () => {
        lightboxThumbnailContainers[1].style.opacity = 1
    })
    lightboxThumbnailContainers[2].addEventListener('mouseout', () => {
        lightboxThumbnailContainers[2].style.opacity = 1
    })
    lightboxThumbnailContainers[3].addEventListener('mouseout', () => {
        lightboxThumbnailContainers[3].style.opacity = 1
    })

    lightboxThumbnailContainers[1].classList.remove('current-border')
    lightboxThumbnails[1].classList.remove('current-opacity')
    lightboxThumbnailContainers[2].classList.remove('current-border')
    lightboxThumbnails[2].classList.remove('current-opacity')
    lightboxThumbnailContainers[3].classList.remove('current-border')
    lightboxThumbnails[3].classList.remove('current-opacity')

    currentProductImage.style.background = "url('images/image-product-1.jpg') no-repeat center center/cover"
    lightboxCurrentProductImage.style.background = "url('images/image-product-1.jpg') no-repeat center center/cover"
}

function index1() {
    thumbnailContainers[0].classList.remove('current-border')
    thumbnails[0].classList.remove('current-opacity')
    thumbnailContainers[2].classList.remove('current-border')
    thumbnails[2].classList.remove('current-opacity')
    thumbnailContainers[3].classList.remove('current-border')
    thumbnails[3].classList.remove('current-opacity')

    lightboxThumbnailContainers[0].addEventListener('mouseover', () => {
        lightboxThumbnailContainers[0].style.opacity = 0.5
    })
    lightboxThumbnailContainers[2].addEventListener('mouseover', () => {
        lightboxThumbnailContainers[2].style.opacity = 0.5
    })
    lightboxThumbnailContainers[3].addEventListener('mouseover', () => {
        lightboxThumbnailContainers[3].style.opacity = 0.5
    })

    lightboxThumbnailContainers[0].addEventListener('mouseout', () => {
        lightboxThumbnailContainers[0].style.opacity = 1
    })
    lightboxThumbnailContainers[2].addEventListener('mouseout', () => {
        lightboxThumbnailContainers[2].style.opacity = 1
    })
    lightboxThumbnailContainers[3].addEventListener('mouseout', () => {
        lightboxThumbnailContainers[3].style.opacity = 1
    })

    lightboxThumbnailContainers[0].classList.remove('current-border')
    lightboxThumbnails[0].classList.remove('current-opacity')
    lightboxThumbnailContainers[2].classList.remove('current-border')
    lightboxThumbnails[2].classList.remove('current-opacity')
    lightboxThumbnailContainers[3].classList.remove('current-border')
    lightboxThumbnails[3].classList.remove('current-opacity')

    currentProductImage.style.background = "url('images/image-product-2.jpg') no-repeat center center/cover"
    lightboxCurrentProductImage.style.background = "url('images/image-product-2.jpg') no-repeat center center/cover"
}

function index2() {
    thumbnailContainers[0].classList.remove('current-border')
    thumbnails[0].classList.remove('current-opacity')
    thumbnailContainers[1].classList.remove('current-border')
    thumbnails[1].classList.remove('current-opacity')
    thumbnailContainers[3].classList.remove('current-border')
    thumbnails[3].classList.remove('current-opacity')

    lightboxThumbnailContainers[0].addEventListener('mouseover', () => {
        lightboxThumbnailContainers[0].style.opacity = 0.5
    })
    lightboxThumbnailContainers[1].addEventListener('mouseover', () => {
        lightboxThumbnailContainers[1].style.opacity = 0.5
    })
    lightboxThumbnailContainers[3].addEventListener('mouseover', () => {
        lightboxThumbnailContainers[3].style.opacity = 0.5
    })

    lightboxThumbnailContainers[0].addEventListener('mouseout', () => {
        lightboxThumbnailContainers[0].style.opacity = 1
    })
    lightboxThumbnailContainers[1].addEventListener('mouseout', () => {
        lightboxThumbnailContainers[1].style.opacity = 1
    })
    lightboxThumbnailContainers[3].addEventListener('mouseout', () => {
        lightboxThumbnailContainers[3].style.opacity = 1
    })

    lightboxThumbnailContainers[0].classList.remove('current-border')
    lightboxThumbnails[0].classList.remove('current-opacity')
    lightboxThumbnailContainers[1].classList.remove('current-border')
    lightboxThumbnails[1].classList.remove('current-opacity')
    lightboxThumbnailContainers[3].classList.remove('current-border')
    lightboxThumbnails[3].classList.remove('current-opacity')

    currentProductImage.style.background = "url('images/image-product-3.jpg') no-repeat center center/cover"
    lightboxCurrentProductImage.style.background = "url('images/image-product-3.jpg') no-repeat center center/cover"
}

function index3() {
    thumbnailContainers[0].classList.remove('current-border')
    thumbnails[0].classList.remove('current-opacity')
    thumbnailContainers[1].classList.remove('current-border')
    thumbnails[1].classList.remove('current-opacity')
    thumbnailContainers[2].classList.remove('current-border')
    thumbnails[2].classList.remove('current-opacity')

    lightboxThumbnailContainers[0].addEventListener('mouseover', () => {
        lightboxThumbnailContainers[0].style.opacity = 0.5
    })
    lightboxThumbnailContainers[1].addEventListener('mouseover', () => {
        lightboxThumbnailContainers[1].style.opacity = 0.5
    })
    lightboxThumbnailContainers[2].addEventListener('mouseover', () => {
        lightboxThumbnailContainers[2].style.opacity = 0.5
    })

    lightboxThumbnailContainers[0].addEventListener('mouseout', () => {
        lightboxThumbnailContainers[0].style.opacity = 1
    })
    lightboxThumbnailContainers[1].addEventListener('mouseout', () => {
        lightboxThumbnailContainers[1].style.opacity = 1
    })
    lightboxThumbnailContainers[2].addEventListener('mouseout', () => {
        lightboxThumbnailContainers[2].style.opacity = 1
    })

    lightboxThumbnailContainers[0].classList.remove('current-border')
    lightboxThumbnails[0].classList.remove('current-opacity')
    lightboxThumbnailContainers[1].classList.remove('current-border')
    lightboxThumbnails[1].classList.remove('current-opacity')
    lightboxThumbnailContainers[2].classList.remove('current-border')
    lightboxThumbnails[2].classList.remove('current-opacity')

    currentProductImage.style.background = "url('images/image-product-4.jpg') no-repeat center center/cover"
    lightboxCurrentProductImage.style.background = "url('images/image-product-4.jpg') no-repeat center center/cover"
}


// Functions that are triggered when clicked on previous/next button in lightbox display
function changeImage() {
    switch (idx) {
        case 0:
            currentProductImage.style.background = "url('images/image-product-1.jpg') no-repeat center center/cover"
            lightboxCurrentProductImage.style.background = "url('images/image-product-1.jpg') no-repeat center center/cover"
            thumbnailContainers[0].classList.add('current-border')
            thumbnails[0].classList.add('current-opacity')
            lightboxThumbnailContainers[0].addEventListener('mouseover', () => {
                lightboxThumbnailContainers[0].style.opacity = 1
            })
            index0()
            break;
        case 1:
            currentProductImage.style.background = "url('images/image-product-2.jpg') no-repeat center center/cover"
            lightboxCurrentProductImage.style.background = "url('images/image-product-2.jpg') no-repeat center center/cover"
            thumbnailContainers[1].classList.add('current-border')
            thumbnails[1].classList.add('current-opacity')
            lightboxThumbnailContainers[1].addEventListener('mouseover', () => {
                lightboxThumbnailContainers[1].style.opacity = 1
            })
            index1()
            break;
        case 2:
            currentProductImage.style.background = "url('images/image-product-3.jpg') no-repeat center center/cover"
            lightboxCurrentProductImage.style.background = "url('images/image-product-3.jpg') no-repeat center center/cover"
            thumbnailContainers[2].classList.add('current-border')
            thumbnails[2].classList.add('current-opacity')
            lightboxThumbnailContainers[2].addEventListener('mouseover', () => {
                lightboxThumbnailContainers[2].style.opacity = 1
            })
            index2()
            break;
        case 3:
            currentProductImage.style.background = "url('images/image-product-4.jpg') no-repeat center center/cover"
            lightboxCurrentProductImage.style.background = "url('images/image-product-4.jpg') no-repeat center center/cover"
            thumbnailContainers[3].classList.add('current-border')
            thumbnails[3].classList.add('current-opacity')
            lightboxThumbnailContainers[3].addEventListener('mouseover', () => {
                lightboxThumbnailContainers[3].style.opacity = 1
            })
            index3()
            break;
    }
    if(idx > lightboxThumbnailContainers.length - 1) {
        idx = 0
        lightboxThumbnailContainers[idx].classList.add('current-border')
        lightboxThumbnailContainers[idx].addEventListener('mouseover', () => {
            lightboxThumbnailContainers[idx].style.opacity = 1
        })
        lightboxThumbnails[idx].classList.add('current-opacity')
        thumbnailContainers[idx].classList.add('current-border')
        thumbnails[idx].classList.add('current-opacity')
        currentProductImage.style.background = "url('images/image-product-1.jpg') no-repeat center center/cover"
        lightboxCurrentProductImage.style.background = "url('images/image-product-1.jpg') no-repeat center center/cover"
        lightboxThumbnailContainers[lightboxThumbnailContainers.length - 1].classList.remove('current-border')
        lightboxThumbnails[lightboxThumbnailContainers.length - 1].classList.remove('current-opacity')
        thumbnailContainers[lightboxThumbnailContainers.length - 1].classList.remove('current-border')
        thumbnails[lightboxThumbnailContainers.length - 1].classList.remove('current-opacity')
        lightboxThumbnailContainers[lightboxThumbnailContainers.length - 1].addEventListener('mouseover', () => {
            lightboxThumbnailContainers[lightboxThumbnailContainers.length - 1].style.opacity = 0.5
        })
    } else if (idx < 0) {
        idx = lightboxThumbnailContainers.length - 1
        lightboxThumbnailContainers[lightboxThumbnailContainers.length - 1].classList.add('current-border')
        lightboxThumbnailContainers[lightboxThumbnailContainers.length - 1].addEventListener('mouseover', () => {
            lightboxThumbnailContainers[lightboxThumbnailContainers.length - 1].style.opacity = 1
        })
        lightboxThumbnails[lightboxThumbnailContainers.length - 1].classList.add('current-opacity')

        currentProductImage.style.background = "url('images/image-product-4.jpg') no-repeat center center/cover"
        lightboxCurrentProductImage.style.background = "url('images/image-product-4.jpg') no-repeat center center/cover"

        lightboxThumbnailContainers[0].classList.remove('current-border')
        lightboxThumbnailContainers[0].addEventListener('mouseover', () => {
            lightboxThumbnailContainers[0].style.opacity = 0.5
        })
        lightboxThumbnails[0].classList.remove('current-opacity')
    }
}

function clickPrevious() {
    lightboxThumbnailContainers[idx+1].classList.remove('current-border')
    lightboxThumbnails[idx+1].classList.remove('current-opacity')

    lightboxThumbnailContainers[idx].classList.add('current-border')
    lightboxThumbnails[idx].classList.add('current-opacity')
}

function clickNext() {
    lightboxThumbnailContainers[idx-1].classList.remove('current-border')
    lightboxThumbnails[idx-1].classList.remove('current-opacity')

    lightboxThumbnailContainers[idx].classList.add('current-border')
    lightboxThumbnails[idx].classList.add('current-opacity')
}

// Clicking on each of the desktop thumbnails
thumbnailContainers[0].addEventListener('click', () => {
    lightboxThumbnailContainers[0].classList.add('current-border')
    lightboxThumbnails[0].classList.add('current-opacity')
    lightboxThumbnailContainers[0].addEventListener('mouseover', () => {
        lightboxThumbnailContainers[0].style.opacity = 1
    })

    idx = 0

    lightboxNext.addEventListener('click', () => {
        idx++
        changeImage()
        clickNext()
    })

    lightboxPrevious.addEventListener('click', () => {
        idx--
        changeImage()
        clickPrevious()
    })

    thumbnailContainers[1].addEventListener('mouseover', () => {
        thumbnailContainers[1].style.opacity = 0.5
    })
    thumbnailContainers[2].addEventListener('mouseover', () => {
        thumbnailContainers[2].style.opacity = 0.5
    })
    thumbnailContainers[3].addEventListener('mouseover', () => {
        thumbnailContainers[3].style.opacity = 0.5
    })

    thumbnailContainers[1].addEventListener('mouseout', () => {
        thumbnailContainers[1].style.opacity = 1
    })
    thumbnailContainers[2].addEventListener('mouseout', () => {
        thumbnailContainers[2].style.opacity = 1
    })
    thumbnailContainers[3].addEventListener('mouseout', () => {
        thumbnailContainers[3].style.opacity = 1
    })

    index0()
})

thumbnailContainers[1].addEventListener('click', () => {
    lightboxThumbnailContainers[1].classList.add('current-border')
    lightboxThumbnails[1].classList.add('current-opacity')
    lightboxThumbnailContainers[1].addEventListener('mouseover', () => {
        lightboxThumbnailContainers[1].style.opacity = 1
    })

    idx = 1

    lightboxNext.addEventListener('click', () => {
        idx++
        changeImage()
        clickNext()
    })

    lightboxPrevious.addEventListener('click', () => {
        idx--
        changeImage()
        clickPrevious()
    })

    thumbnailContainers[0].addEventListener('mouseover', () => {
        thumbnailContainers[0].style.opacity = 0.5
    })
    thumbnailContainers[2].addEventListener('mouseover', () => {
        thumbnailContainers[2].style.opacity = 0.5
    })
    thumbnailContainers[3].addEventListener('mouseover', () => {
        thumbnailContainers[3].style.opacity = 0.5
    })

    thumbnailContainers[0].addEventListener('mouseout', () => {
        thumbnailContainers[0].style.opacity = 1
    })
    thumbnailContainers[2].addEventListener('mouseout', () => {
        thumbnailContainers[2].style.opacity = 1
    })
    thumbnailContainers[3].addEventListener('mouseout', () => {
        thumbnailContainers[3].style.opacity = 1
    })

    index1()
})

thumbnailContainers[2].addEventListener('click', () => {
    lightboxThumbnailContainers[2].classList.add('current-border')
    lightboxThumbnails[2].classList.add('current-opacity')
    lightboxThumbnailContainers[2].addEventListener('mouseover', () => {
        lightboxThumbnailContainers[2].style.opacity = 1
    })

    idx = 2

    lightboxNext.addEventListener('click', () => {
        idx++
        changeImage()
        clickNext()
    })

    lightboxPrevious.addEventListener('click', () => {
        idx--
        changeImage()
        clickPrevious()
    })

    thumbnailContainers[0].addEventListener('mouseover', () => {
        thumbnailContainers[0].style.opacity = 0.5
    })
    thumbnailContainers[1].addEventListener('mouseover', () => {
        thumbnailContainers[1].style.opacity = 0.5
    })
    thumbnailContainers[3].addEventListener('mouseover', () => {
        thumbnailContainers[3].style.opacity = 0.5
    })

    thumbnailContainers[0].addEventListener('mouseout', () => {
        thumbnailContainers[0].style.opacity = 1
    })
    thumbnailContainers[1].addEventListener('mouseout', () => {
        thumbnailContainers[1].style.opacity = 1
    })
    thumbnailContainers[3].addEventListener('mouseout', () => {
        thumbnailContainers[3].style.opacity = 1
    })

    index2()
})

thumbnailContainers[3].addEventListener('click', () => {
    lightboxThumbnailContainers[3].classList.add('current-border')
    lightboxThumbnails[3].classList.add('current-opacity')
    lightboxThumbnailContainers[3].addEventListener('mouseover', () => {
        lightboxThumbnailContainers[3].style.opacity = 1
    })

    idx = 3

    lightboxNext.addEventListener('click', () => {
        idx++
        changeImage()
        clickNext()
    })

    lightboxPrevious.addEventListener('click', () => {
        idx--
        changeImage()
        clickPrevious()
    })

    thumbnailContainers[0].addEventListener('mouseover', () => {
        thumbnailContainers[0].style.opacity = 0.5
    })
    thumbnailContainers[1].addEventListener('mouseover', () => {
        thumbnailContainers[1].style.opacity = 0.5
    })
    thumbnailContainers[2].addEventListener('mouseover', () => {
        thumbnailContainers[2].style.opacity = 0.5
    })

    thumbnailContainers[0].addEventListener('mouseout', () => {
        thumbnailContainers[0].style.opacity = 1
    })
    thumbnailContainers[1].addEventListener('mouseout', () => {
        thumbnailContainers[1].style.opacity = 1
    })
    thumbnailContainers[2].addEventListener('mouseout', () => {
        thumbnailContainers[2].style.opacity = 1
    })

    index3()
})

// Clicking on each of the lightbox thumbnails
lightboxThumbnailContainers[0].addEventListener('click', () => {
    thumbnailContainers[0].classList.add('current-border')
    thumbnails[0].classList.add('current-opacity')

    idx = 0

    index0()
})

lightboxThumbnailContainers[1].addEventListener('click', () => {
    thumbnailContainers[1].classList.add('current-border')
    thumbnails[1].classList.add('current-opacity')

    idx = 1

    index1()
})

lightboxThumbnailContainers[2].addEventListener('click', () => {
    thumbnailContainers[2].classList.add('current-border')
    thumbnails[2].classList.add('current-opacity')

    idx = 2

    index2()
})

lightboxThumbnailContainers[3].addEventListener('click', () => {
    thumbnailContainers[3].classList.add('current-border')
    thumbnails[3].classList.add('current-opacity')

    idx = 3

    index3()
})

// Increase/Decrease items in cart
let counter = 0
numberOfItems.innerText = counter

increaseItems.addEventListener('click', () => {
    counter++
    numberOfItems.innerText = counter
})

decreaseItems.addEventListener('click', () => {
    counter--
    numberOfItems.innerText = counter
    if(counter < 0) {
        counter = 0
        numberOfItems.innerText = counter
    }
})

// When clicked on cart icon
cartIcon.addEventListener('click', () => {
    if(parseInt(numberOfItems.innerText) === 0) {
        cartNotification.style.display = 'block'
        cartMessage.style.display = 'block'
    } else if (parseInt(numberOfItems.innerText) > 0) {
        cartItems.style.display = 'block'
        cartItems.innerText = numberOfItems.innerText
        cartNotification.style.display = 'block'
        cartMessage.style.display = 'none'
        cartState.style.display = 'block'
        selectedAmount.innerText = numberOfItems.innerText
        totalPrice.innerText = '$' + 125 * parseInt(numberOfItems.innerText) + '.00'

        removeCartItems.addEventListener('click', () => {
            cartItems.style.display = 'none'
            cartMessage.style.display = 'block'
            cartState.style.display = 'none'
        })
    }
})

closeCart.addEventListener('click', () => {
    cartNotification.style.display = 'none'
})

// When clicked on Add to Cart button
addToCart.addEventListener('click', () => {
    if(parseInt(numberOfItems.innerText) === 0) {
        cartNotification.style.display = 'block'
        cartMessage.style.display = 'block'
        cartState.style.display = 'none'
        cartItems.style.display = 'none'
    } else if(parseInt(numberOfItems.innerText) > 0) {
        cartItems.style.display = 'block'
        cartItems.innerText = numberOfItems.innerText
        selectedAmount.innerText = numberOfItems.innerText
        totalPrice.innerText = '$' + 125 * parseInt(numberOfItems.innerText) + '.00'
    }
})

// Image slider on mobile display
let current = 0

function switchBg() {
    switch (current) {
        case 0:
            currentProductImage.style.background = "url('images/image-product-1.jpg') no-repeat center center/cover"
            break;
        case 1:
            currentProductImage.style.background = "url('images/image-product-2.jpg') no-repeat center center/cover"
            break;
        case 2:
            currentProductImage.style.background = "url('images/image-product-3.jpg') no-repeat center center/cover"
            break;
        case 3:
            currentProductImage.style.background = "url('images/image-product-4.jpg') no-repeat center center/cover"
            break;
    }
}

next.addEventListener('click', () => {
    current++
    switchBg()
    if (current > 3) {
        current = 0
        currentProductImage.style.background = "url('images/image-product-1.jpg') no-repeat center center/cover"
    }
})

previous.addEventListener('click', () => {
    current--
    switchBg()
    if (current < 0) {
        current = 3
        currentProductImage.style.background = "url('images/image-product-4.jpg') no-repeat center center/cover"
    }
})



