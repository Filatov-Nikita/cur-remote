function run(elId, script) {
  const el = document.getElementById(elId);
  if(el) {
    script();
  }
}

run('pult', function () {
  const items = document.querySelector('.items');
  items.addEventListener('click', (e) => {
    const category = e.target.dataset.category;
    if(!category) return;
    postCategory(category);
  });

  async function postCategory(category) {
    try {
      const res = await fetch(`/category/emit?category=${category}`);

      const text = await res.text();
      if(text === 'ok') {
        alert('Успешно');
      } else {
        throw new Error();
      }
    } catch(e) {
      console.log(e);
      alert('Ошибка!');
    }
  }
});


run('screen', function () {
  const elCategory = document.querySelector('.category');
  const sse = new EventSource('/stream');

  sse.addEventListener('category.change', function (e) {
    elCategory.innerHTML = `<img src="/images/${e.data}.jpg" />`
  })
});
