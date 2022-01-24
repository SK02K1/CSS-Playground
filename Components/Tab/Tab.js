const tabsContainer = document.querySelector('.tabs-container');

const updateTab = (id) => {
  Array.from(tabsContainer.children).forEach((tab) => {
    if (tab.getAttribute('data-uid') === id) {
      tab.classList.add('active-tab');
    } else {
      tab.classList.remove('active-tab');
    }
  });
};

tabsContainer.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('tab')) {
    updateTab(target.getAttribute('data-uid'));
  }
});
