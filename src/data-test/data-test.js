export const comment = {
  comment: `What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!`,
  date: `2020-10-25T13:38:44.753Z`,
  id: 1,
  rating: 3,
  user: {
    [`avatar_url`]: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/10.jpg`,
    id: 13,
    [`is_pro`]: false,
    name: `Zak`
  }
};

export const comments = [{
  comment: `What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!`,
  date: `2020-10-25T13:38:44.753Z`,
  id: 1,
  rating: 3,
  user: {
    [`avatar_url`]: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/10.jpg`,
    id: 13,
    [`is_pro`]: false,
    name: `Zak`
  }
}, {
  comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  date: `2020-10-09T13:38:44.753Z`,
  id: 2,
  rating: 5,
  user: {
    [`avatar_url`]: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/10.jpg`,
    id: 13,
    [`is_pro`]: false,
    name: `Zak`
  }
}, {
  comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt ornare massa eget egestas.`,
  date: `2020-11-01T13:38:44.752Z`,
  id: 3,
  rating: 1,
  user: {
    [`avatar_url`]: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/10.jpg`,
    id: 13,
    [`is_pro`]: true,
    name: `Zak`
  }
}];

export const city = {
  location: {
    lat: 48.85661,
    lon: 2.351499,
    zoom: 10
  },
  name: `Paris`
};

export const offers = [
  {
    id: 0,
    city: {
      location: {
        lat: 52.370216,
        lon: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    coordinates: {
      lat: 48.877610000000004,
      lon: 2.333499,
      zoom: 16
    },
    pictures: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`
    ],
    title: `Beautiful & luxurious studio at great location`,
    description: [`Peaceful studio in the most wanted area in town. Q…hops, restaurants and bars in a walking distance.`],
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
    prevPic: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
    manager: {
      id: 25,
      picture: `https://avatarfiles.alphacoders.com/254/254847.jpg`,
      name: `Valera`,
      isSuper: true
    },
    isFavorite: false,
    location: {
      latitude: 48.877610000000004,
      longitude: 2.333499,
      zoom: 16
    }
  }, {
    id: 1,
    city: {
      location: {
        lat: 50.938361,
        lon: 6.959974,
        zoom: 10
      },
      name: `Cologne`
    },
    coordinates: {
      lat: 50.917361,
      lon: 6.977974,
      zoom: 16
    },
    pictures: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`
    ],
    title: `Wood and stone place`,
    description: [`Relax, rejuvenate and unplug in this ultimate rust… to the sounds of nature from your cozy warm bed.`],
    isPremium: true,
    type: `hotel`,
    rating: 2.8,
    numberBedrooms: 2,
    maxGuests: 4,
    price: 180,
    features: [
      `Breakfast`,
      `Air conditioning`,
      `Washing machine`,
      `Laptop friendly workspace`,
      `Coffee machine`,
      `Fridge`,
      `Dishwasher`,
      `Towels`,
      `Baby seat`,
      `Washer`
    ],
    prevPic: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
    manager: {
      id: 25,
      picture: `https://avatarfiles.alphacoders.com/254/254847.jpg`,
      name: `Valera`,
      isSuper: false
    },
    isFavorite: true,
    location: {
      latitude: 50.917361,
      longitude: 6.977974,
      zoom: 16
    }
  }, {
    id: 2,
    city: {
      location: {
        lat: 51.225402,
        lon: 6.776314,
        zoom: 10
      },
      name: `Dusseldorf`
    },
    coordinates: {
      lat: 51.225402,
      lon: 6.784314,
      zoom: 16
    },
    pictures: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`
    ],
    title: `The house among olive`,
    description: [`I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`],
    isPremium: false,
    type: `apartment`,
    rating: 5,
    numberBedrooms: 3,
    maxGuests: 2,
    price: 302,
    features: [
      `Breakfast`,
      `Air conditioning`,
      `Washing machine`,
      `Laptop friendly workspace`,
      `Coffee machine`
    ],
    prevPic: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
    manager: {
      id: 25,
      picture: `https://avatarfiles.alphacoders.com/254/254847.jpg`,
      name: `Valera`,
      isSuper: false
    },
    isFavorite: false,
    location: {
      latitude: 51.225402,
      longitude: 6.784314,
      zoom: 16
    }
  }
];

export const currentCity = {
  latitude: 51.211402,
  longitude: 6.756314000000001,
  zoom: 16
};

export const user = {
  [`avatar_url`]: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/4.jpg`,
  email: `cybranker@yandex.ru`,
  id: 1,
  [`is_pro`]: false,
  name: `cybranker`
};

export const match = {
  isExact: true,
  params: {city: `cologne`},
  path: `/:city?`,
  url: `/cologne`
};
