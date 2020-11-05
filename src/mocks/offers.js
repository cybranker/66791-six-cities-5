const PICTURE_URL = `http://picsum.photos/248/152`;

export default [{
  id: 0,
  city: {
    location: {
      lat: 52.370216,
      lon: 4.895168,
      zoom: 10
    },
    name: `Amsterdam`
  },
  pictures: [{
    src: `${PICTURE_URL}?r=${Math.random()}`,
    description: `Photo kitchen`
  }, {
    src: `${PICTURE_URL}?r=${Math.random()}`,
    description: `Photo living room`
  }, {
    src: `${PICTURE_URL}?r=${Math.random()}`,
    description: `Photo toilet and bathroom`
  }],
  title: `Beautiful & luxurious studio at great location`,
  description: [
    `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
  ],
  isPremium: true,
  type: `hotel`,
  rating: 2.8,
  numberBedrooms: 2,
  maxGuests: 4,
  price: 180,
  features: [
    `Wi-Fi`,
    `Kitchen`,
    `Washing machine`,
    `Cabel TV`
  ],
  manager: {
    picture: `https://avatarfiles.alphacoders.com/254/254847.jpg`,
    name: `Valera`,
    isSuper: true
  },
  isFavorite: false,
  coordinates: {
    lon: 4.85309666406198,
    lat: 52.3909553943508
  }
}, {
  id: 1,
  city: {
    location: {
      lat: 52.370216,
      lon: 4.895168,
      zoom: 10
    },
    name: `Amsterdam`
  },
  pictures: [{
    src: `${PICTURE_URL}?r=${Math.random()}`,
    description: `Photo kitchen`
  }, {
    src: `${PICTURE_URL}?r=${Math.random()}`,
    description: `Photo living room`
  }, {
    src: `${PICTURE_URL}?r=${Math.random()}`,
    description: `Photo toilet and bathroom`
  }, {
    src: `${PICTURE_URL}?r=${Math.random()}`,
    description: `Photo bedroom 1`
  }, {
    src: `${PICTURE_URL}?r=${Math.random()}`,
    description: `Photo bedroom 2`
  }, {
    src: `${PICTURE_URL}?r=${Math.random()}`,
    description: `Photo porch`
  }],
  title: `Best suburb house`,
  description: [
    `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  ],
  isPremium: true,
  type: `house`,
  rating: 5,
  numberBedrooms: 5,
  maxGuests: 8,
  price: 600,
  features: [
    `Wi-Fi`,
    `Heating`,
    `Kitchen`,
    `Fridge`,
    `Washing machine`,
    `Coffee machine`,
    `Dishwasher`,
    `Towels`,
    `Baby seat`,
    `Cabel TV`
  ],
  manager: {
    picture: `https://avatarfiles.alphacoders.com/254/254925.png`,
    name: `Petka`,
    isSuper: true
  },
  isFavorite: true,
  coordinates: {
    lon: 4.85309666406198,
    lat: 52.369553943508
  }
}, {
  id: 2,
  city: {
    location: {
      lat: 52.370216,
      lon: 4.895168,
      zoom: 10
    },
    name: `Amsterdam`
  },
  pictures: [{
    src: `${PICTURE_URL}?r=${Math.random()}`,
    description: `Photo kitchen`
  }, {
    src: `${PICTURE_URL}?r=${Math.random()}`,
    description: `Photo living room`
  }, {
    src: `${PICTURE_URL}?r=${Math.random()}`,
    description: `Photo toilet and bathroom`
  }, {
    src: `${PICTURE_URL}?r=${Math.random()}`,
    description: `Photo bedroom 1`
  }],
  title: `Room in the city center`,
  description: [
    `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
  ],
  isPremium: false,
  type: `room`,
  rating: 3.4,
  numberBedrooms: 1,
  maxGuests: 2,
  price: 110,
  features: [
    `Wi-Fi`,
    `Kitchen`,
    `Coffee machine`,
    `Dishwasher`,
    `Cabel TV`
  ],
  manager: {
    picture: `https://avatarfiles.alphacoders.com/254/254981.jpg`,
    name: `Natasha`,
    isSuper: false
  },
  isFavorite: true,
  coordinates: {
    lon: 4.929309666406198,
    lat: 52.3909553943508
  }
}, {
  id: 3,
  city: {
    location: {
      lat: 52.370216,
      lon: 4.895168,
      zoom: 10
    },
    name: `Amsterdam`
  },
  pictures: [{
    src: `${PICTURE_URL}?r=${Math.random()}`,
    description: `Photo kitchen`
  }, {
    src: `${PICTURE_URL}?r=${Math.random()}`,
    description: `Photo living room`
  }, {
    src: `${PICTURE_URL}?r=${Math.random()}`,
    description: `Photo toilet and bathroom`
  }],
  title: `Apartment near the sea`,
  description: [
    `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. `,
    `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.`
  ],
  isPremium: false,
  type: `apartment`,
  rating: 1.3,
  numberBedrooms: 2,
  maxGuests: 4,
  price: 80,
  features: [
    `Wi-Fi`,
    `Kitchen`
  ],
  manager: {
    picture: `https://avatarfiles.alphacoders.com/254/254912.png`,
    name: `Galya`,
    isSuper: true
  },
  isFavorite: false,
  coordinates: {
    lon: 4.939309666406198,
    lat: 52.3809553943508
  }
}, {
  id: 4,
  city: {
    location: {
      lon: 4.895168,
      lat: 52.370216,
      zoom: 10
    },
    name: `Paris`
  },
  pictures: [{
    src: `${PICTURE_URL}?r=${Math.random()}`,
    description: `Photo kitchen`
  }, {
    src: `${PICTURE_URL}?r=${Math.random()}`,
    description: `Photo living room`
  }, {
    src: `${PICTURE_URL}?r=${Math.random()}`,
    description: `Photo toilet and bathroom`
  }],
  title: `Apartment near the sea`,
  description: [
    `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. `,
    `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.`
  ],
  isPremium: false,
  type: `apartment`,
  rating: 1.3,
  numberBedrooms: 2,
  maxGuests: 4,
  price: 80,
  features: [
    `Wi-Fi`,
    `Kitchen`
  ],
  manager: {
    picture: `https://avatarfiles.alphacoders.com/254/254912.png`,
    name: `Galya`,
    isSuper: true
  },
  isFavorite: false,
  coordinates: {
    lon: 4.939309666406198,
    lat: 52.3809553943508
  }
}];
