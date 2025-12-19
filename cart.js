function addToCart() {
  localStorage.setItem("cart", "Classic Notebook ¥39");
  alert("Added to cart / 已加入购物车");
}

if (document.getElementById("cart-info")) {
  const cart = localStorage.getItem("cart");
  document.getElementById("cart-info").innerText =
    cart ? "Item: " + cart : "Cart is empty / 购物车为空";
}

function checkout() {
  localStorage.removeItem("cart");
  window.location.href = "success.html";
}
