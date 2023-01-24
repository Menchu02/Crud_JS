let card = document.getElementById('cards');
let inputTitle = document.getElementById('title');
let inputImg = document.getElementById('img');
let button_update = document.getElementsByClassName('button_añadir');
let inputSearch = document.getElementById('input_search');
let form = document.getElementById('form_style');
let data = [];
let isEditMode = false;
let idToEdit = null;

form.addEventListener('submit', (e) => {
  e.preventDefault;
  if (inputTitle.value.length < 3) {
    console.log('Muy corto');
  }
});

// form.addEventListener('submit', (e) => {
//   e.preventDefault;
//   //   console.log(e);
//   if (inputTitle.value.length < 3) {
//     alert('Muy corto');
//   }
// });
// const evento = () => {};
// console.log('n de click');
// inputSearch.addEventListener('click', evento);

// FUNCIONES MOSTRAR OCULTAR FORMULARIO
function mostrar() {
  document.getElementById('principal_section').style.display = 'block';
}

function ocultar() {
  document.getElementById('principal_section').style.display = 'none';
}

// FUNCION MOSTRAR
let showCard = () => {
  if (!inputTitle.value) {
    alert('No hay título');
    return;
  }
  //   if (inputTitle.value != (patter = 'https://.*')) {
  //     alert('debes añadir una url');
  //     return;
  //   }
  if (!isEditMode)
    data.push({
      id: crypto.randomUUID(),
      img: inputImg.value,
      title: inputTitle.value,
    });
  //   console.log(isEditMode);
  let index = data.findIndex((item) => item.id == idToEdit);
  if (isEditMode) data[index].title = inputTitle.value;
  if (isEditMode) data[index].img = inputImg.value;

  inputTitle.value = '';
  inputImg.value = '';

  toAddMode();
  render();
};

// FUNCION ELIMINAR
let deletCard = (id) => {
  let index = data.findIndex((item) => item.id == id);
  data.splice(index, 1);
  render();
};

// FUNCION EDITAR
let editCard = (id) => {
  let index = data.findIndex((item) => item.id == id);
  inputImg.value = data[index].img;
  inputTitle.value = data[index].title;
  isEditMode = true;
  idToEdit = id;
  //   console.log(id);
};
let toAddMode = () => {
  isEditMode = false;
  button_update.innerText = 'editar';
  idToEdit = null;
};

// FUNCION FILTRAR
function search() {
  data = data.filter((item) => item.title.includes(inputSearch.value));
  //   inputSearch.value = '';
  render();
}

// let search = () => {

// FUNCION PINTAR
let render = () => {
  let template = '';
  data.forEach((item) => {
    template += `<div class="card"><img class="img_card" src="${item.img}" alt=""/>
            <div class="footer_card"><p class="title_card">${item.title}</p><div class="div_icons"><i class="bi bi-trash3-fill" onclick="deletCard('${item.id}')"></i>
            <i class="bi bi-pencil-fill" onclick="editCard('${item.id}')"></i></div></div></div> `;
  });
  card.innerHTML = template;

  //   localStorage.setItem('tarjetas', JSON.stringify(data));
};

// let persistencia = () => {
//   let guardar = localStorage.getItem('tarjetas');
//   data = JSON.parse(guardar);
// };
{
}
