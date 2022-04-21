import React from 'react';

function Hobby({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
      </div>
    );
}


const ILike = [
  {
    name: 'BellyGom',
    image: 'https://m.bellygom.com/_dj/img/main_section_1_img1.jpg',

  },

  {
    name: 'baseball',
    image: 'https://cdn.incheontoday.com/news/photo/202112/214039_216632_1359.jpg',

  },

  {
    name: 'basketball',
    image: 'https://basketkorea.com/news/data/20210818/p1065601935825140_865_thum.jpg',

  },

  {
    name: 'highlight',
    image: 'https://file.mk.co.kr/meet/neds/2021/05/image_readtop_2021_426697_16200214664632640.jpg',

  },

  {
    name: 'onf',
    image: 'https://www.koreaes.com/news/photo/202111/360828_9106_1035.jpg',
  },

];


function App() {
  return (
  <div>
   {ILike.map(good => (<Hobby name={good.name} picture={good.image} />
   ))}
 

  </div>
  );
}

export default App;
