document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.sidenav').style.width = '250px';
});
// Update your existing JavaScript code in script.js

// script.js

// Function to add an item to the cart
function addToCart() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const cartItem = { name: name, price: price, quantity: quantity };
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert('Item added to cart!');
    window.location.href = 'cartpage.html'; // Redirect to the cart page after adding the item
  }
function showFoodDetails(button) {
    const foodItem = button.parentElement;
    const foodName = foodItem.dataset.name;
    const foodImage = foodItem.dataset.image;
    const foodDescription = foodItem.dataset.description;
    const foodPrice = parseFloat(foodItem.dataset.price);

    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal');

    const modalContent = `
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <img src="${foodImage}" alt="${foodName}">
            <h2>${foodName}</h2>
            <p>${foodDescription}</p>
            <p>Price: $${foodPrice.toFixed(2)}</p>
            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" value="1" min="1" max="10">
            <button onclick="addToCart('${foodName}', ${foodPrice})">Add to Cart</button>
        </div>
    `;

    modalContainer.innerHTML = modalContent;
    document.body.appendChild(modalContainer);
}
function addToCartAndRedirect(destination, name, image, description, price) {
    addToCart(name, price); // Call the addToCart function to add the item to the cart
    window.location.href = destination; // Redirect to the specified page
}
function redirectToFoodDetails(name, image, description, price) {
    const url = `fooddetails.html?name=${name}&image=${image}&description=${description}&price=${price}&source=addToCartButton`;
    window.location.href = url;
}

// script.js

// ... Existing code ...

function displayFoodDetailsOnHomepage() {
    const foodContainer = document.querySelector('.food-container');
    foodContainer.innerHTML = '';

    foodDetails.forEach((food) => {
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');

        const imageElement = document.createElement('img');
        imageElement.src = food.image;
        imageElement.alt = food.name;
        imageElement.classList.add('food-image');

        const detailsContainer = document.createElement('div');
        detailsContainer.classList.add('food-details');

        const nameElement = document.createElement('h3');
        nameElement.textContent = food.name;

        const restaurantsElement = document.createElement('p');
        restaurantsElement.textContent = `Available at: ${food.restaurants.join(', ')}`;

        const priceElement = document.createElement('p');
        priceElement.textContent = `Price: Rs${food.price.toFixed(2)}`;

        detailsContainer.appendChild(nameElement);
        detailsContainer.appendChild(restaurantsElement);
        detailsContainer.appendChild(priceElement);

        foodItem.appendChild(imageElement);
        foodItem.appendChild(detailsContainer);

        foodContainer.appendChild(foodItem);
    });
}

// ... Existing code ...
// script.js

// ... Existing code ...

function createFoodItem(name, image, description, price) {
    const foodItem = document.createElement('div');
    foodItem.classList.add('food-item');

    const imageElement = document.createElement('img');
    imageElement.src = image;
    imageElement.alt = name;
    imageElement.classList.add('food-image');

    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('food-details');

    const nameElement = document.createElement('h3');
    nameElement.textContent = name;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;

    const priceElement = document.createElement('p');
    priceElement.textContent = `Price: Rs${price.toFixed(2)}`;

    const addButton = document.createElement('button');
    addButton.textContent = 'Add to Cart';
    addButton.onclick = function() {
        redirectToFoodDetails(name, image, description, price);
    };

    detailsContainer.appendChild(nameElement);
    detailsContainer.appendChild(descriptionElement);
    detailsContainer.appendChild(priceElement);
    detailsContainer.appendChild(addButton);

    foodItem.appendChild(imageElement);
    foodItem.appendChild(detailsContainer);

    return foodItem;
}

// Example usage:
const foodContainer = document.querySelector('.food-container');

const chickenKarahi = createFoodItem('CHICKEN KARAHI', 'chicken-karahi-3.jpg', 'Description of Chicken Karahi', 10.99);
foodContainer.appendChild(chickenKarahi);

// You can call createFoodItem for other food items
// ...
/*CAHT*/

