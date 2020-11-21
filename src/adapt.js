import {extend} from "./utils";

export const adaptOffersToClient = (offer) => {
  const adaptedOffer = extend(offer, {
    numberBedrooms: offer.bedrooms,
    city: {
      location: {
        lat: offer.city.location.latitude,
        lon: offer.city.location.longitude,
        zoom: 10
      },
      name: offer.city.name
    },
    description: [offer.description],
    features: offer.goods,
    manager: {
      id: offer.host.id,
      picture: offer.host.avatar_url,
      isSuper: offer.host.is_pro,
      name: offer.host.name
    },
    prevPic: offer.preview_image,
    pictures: offer.images,
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    coordinates: {
      lon: offer.location.longitude,
      lat: offer.location.latitude,
      zoom: offer.location.zoom
    },
    maxGuests: offer.max_adults
  });

  delete adaptedOffer.bedrooms;
  delete adaptedOffer.goods;
  delete adaptedOffer.preview_image;
  delete adaptedOffer.images;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;

  return adaptedOffer;
};
