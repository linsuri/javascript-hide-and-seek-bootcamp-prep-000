function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target');
}

function increaseRankBy(n) {
  const lis = document.getElementsByClassName('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + 1).toString()
  }
}