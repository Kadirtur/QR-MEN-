import { buttonData } from "./constants.js";
const buttonArea = document.getElementById("buttons");
//ekrana menü elemanlarını basar
export function renderMenuItems(menuItems, menuList) {
  //dizideki her bir elemanı için
  //bir menü html'i oluşturup bunu ekrana bas
  menuList.innerHTML = menuItems
    .map(
      (item) => `
      
      <a id="card" target="_blank" href="/detail.html?id=${
        item.id
      }" class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3">
          <img class="rounded shadow img-fluid" src="${
            item.img
          }" alt="Süzme Pankek" />
          <div>
            <div class="d-flex justify-content-between">
              <h5>${item.title}</h5>
              <p class="text-succes fw-bold">${(item.price * 30).toFixed(
                2
              )}₺</p>
            </div>
            <p class="lead">
            ${item.desc.slice(0, 80) + "..."}
            </p>
          </div>
        </a>
      
      `
    )
    .join(" ");
}

//ekrana butonları basar
export function renderButtons(activeText) {
  //eski eklenen buttonları silme
  buttonArea.innerHTML = " ";
  //yeni butonları oluşturma
  buttonData.forEach((btn) => {
    //button elementi oluşturma
    const buttonEle = document.createElement("button");
    //class belirleme
    buttonEle.className = "btn btn-outline-dark";

    //data-id belirleme
    buttonEle.dataset.category = btn.value;

    //eğerki eleman aktifse bu classı ver
    if (btn.text === activeText) {
      buttonEle.classList.add("btn-dark", "text-white");
    }
    //içindeki yazıyı belirleme
    buttonEle.innerText = btn.text;
    //butonu hmtle gönderme
    buttonArea.appendChild(buttonEle);
  });
}
