let container = document.querySelector('.products');
let loading = false;
let count = 0;

function addMoreProducts(){
  for(let i = 0; i < 4; i++){
    let card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="https://via.placeholder.com/300x180?text=Product+${count}">
      <div class="title">Extra Product ${count} — Village Supply</div>
      <div class="price">₹${299 + count}</div>
      <button class="buy">Add to Cart</button>
    `;

    container.appendChild(card);
    count++;
  }
}

window.addEventListener('scroll', () => {
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 300){
    if(!loading){
      loading = true;
      setTimeout(() => {
        addMoreProducts();
        loading = false;
      }, 800);
    }
  }
});
