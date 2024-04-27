

function topSection() {
    let iconBar = '';
    const html = `
    <p>SHARE</p>
    <img class="icons" src="images/icon-facebook.svg" alt"">
    <img class="icons" src="images/icon-twitter.svg" alt"">
    <img class="icons" src="images/icon-pinterest.svg" alt"">
    <img class="icons con" src="images/icon-share.svg" alt"">
    `

    iconBar += html

    document.querySelector('.js-top-section')
      .innerHTML = iconBar;

    document.querySelector('.contain')
      .innerHTML = '';

      document.querySelector('.cancel')
        .innerHTML = '';

  };

  









  