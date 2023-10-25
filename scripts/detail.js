//URL deki arama parametrelerin yönetebilmek için yerleşik bir
//js class ı bulunuyor --URLSearchParams--

const params = new URLSearchParams(location.search);
//* js class'ını sağladığı get methodu ile parametreye erişmek
const paramId = params.get("id");

document.addEventListener("DOMContentLoaded", async () => {
  //APİ den ürünleri alma
  const res = await fetch("../db.json");
  const data = await res.json();
  //
  const product = data.menu.find((i) => i.id === Number(paramId));

  renderPage(product);
});
//arayüzü göndreceğimiz div
const outlet = document.querySelector("#outlet");
//bütün arayüzü ekana basar
function renderPage(product) {
  console.log(product);
  outlet.innerHTML = `
    <div class="d-flex justify-content-between">
      <a href="/"><img style="width: 40px;" src="images/home.png"/></a>
      <div>anasayfa/${product.category}/${product.title.toLowerCase()}</div>
    </div>
    <h1 class="text-center my-3 shadow rounded p-2">${product.title}</h1>
    <img
      src="${product.img}"
      class="rounded object-fit-cover shadow-lg"
      style="max-height: 400px"
    />

    <h3 class="mt-4">
      Ürünün Kategorisi: <span class="text-success">${product.category}</span>
    </h3>
    <h3 class="my-2">
      Ürünün Fiyatı: <span class="text-success">${(product.price*30).toFixed(2)}₺</span>
    </h3>
    <p class="lead">
    ${product.desc}
    </p>
  `;
}
