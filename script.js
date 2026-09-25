    // carrusel
    const words = document.querySelectorAll('.word');
    let index = 0;

    setInterval(() => {
      words[index].classList.remove('active');
      index = (index + 1) % words.length;
      words[index].classList.add('active');
    }, 2000);

    // iconos
    const fav = document.querySelector('.icon-fav');
    const user = document.querySelector('.icon-user');
    const cart = document.querySelector('.icon-cart');

    const favBox = document.getElementById('favBox');
    const userBox = document.getElementById('userBox');
    const cartBox = document.getElementById('cartBox');

    function ocultarTodo() {
      favBox.style.display = 'none';
      userBox.style.display = 'none';
      cartBox.style.display = 'none';
    }

    fav.addEventListener('click', () => {
      ocultarTodo();
      favBox.style.display = 'block';
    });

    user.addEventListener('click', () => {
      ocultarTodo();
      userBox.style.display = 'block';
    });

    cart.addEventListener('click', () => {
      ocultarTodo();
      cartBox.style.display = 'block';
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.icons')) {
        ocultarTodo();
      }
    });