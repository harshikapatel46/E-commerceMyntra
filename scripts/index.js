let bagItems;
onLoad();


function onLoad(){
  displayItems();

  let bagItemsString = localStorage.getItem('bagItems');
  if(bagItemsString){
    bagItems = JSON.parse(bagItemsString);
  }else{
    bagItems = [];
  }
  updateBagItemCount(bagItems);
}

function addToBag(id){
  bagItems.push(id);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));  
  updateBagItemCount(bagItems);
}

function updateBagItemCount() {
  let bagItemCountElement =
    document.querySelector(".bag-item-count");

  if (bagItems.length > 0) {
    bagItemCountElement.innerText = bagItems.length;
    bagItemCountElement.style.visibility = "visible";
  } else {
    bagItemCountElement.style.visibility = "hidden";
  }


}

function displayItems(){
  let itemsContainerElement = document.querySelector(".items-container");
  if(!itemsContainerElement){
    return;
  }
  let innerHtml='';
  items.forEach(item=>{
  innerHtml +=` <div class="item-container">
      <img class="item-image" src="${item.image}" alt="item image">
      <div class="rating"> ${item.rating.stars} ⭐ | ${item.rating.count}</div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`;
    itemsContainerElement.innerHTML=innerHtml;
})
 }