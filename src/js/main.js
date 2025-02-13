const addr = window.location.href;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const v = urlParams.get('v')

let isLocal = (v == 'local') ? true : false;
let isMain = true;

const oneLinkRender = ( el ) => {
  let link = isLocal ? el.url_local : el.url;
  //let isValid = isValidURL(link) ? '+++' : '---';
  if (link == '') return;
  document.getElementById("links")
      .innerHTML +=
      `<a href="${link}" class="one-link" target="_blank">
          ${isLocal ? '[L]' : ''} ${el.name}
      </a>`;
}

const listRender = ( list ) => {
    $('#links').empty()
    list.forEach(l => oneLinkRender(l))
}

const render = () => {
    let list = isMain ? main_services : other_services;
    listRender(list)
}

const switchVersion = () => {
  isLocal = !isLocal
  render()
}

const switchToOther = () => {
  $('.switchBtn').text(isLocal ? 'other' : 'main')
  isMain = !isMain
  render()
}


render()