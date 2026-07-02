const app = document.querySelector('.app');
const main = document.getElementById('main');
const tabs = [...document.querySelectorAll('.tab')];

const panels = {
  friend: document.getElementById('friend'),
  walk: document.getElementById('walk')
};

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const home = tab.dataset.home;

    tabs.forEach(t => t.classList.toggle('active', t === tab));

    Object.entries(panels).forEach(([key, panel]) => {
      panel.hidden = key !== home;
    });

    main.classList.toggle('walk', home === 'walk');
    app.classList.toggle('friend-mode', home === 'friend');
    app.classList.toggle('walk-mode', home === 'walk');
  });
});
