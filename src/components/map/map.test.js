import React from "react";
import renderer from "react-test-renderer";
import Map from "./map";
import {offers, city, currentCity} from "../../data-test/data-test";

describe(`<Map /> render`, () => {
  it(`renders correctly without currentOfferLocation`, () => {
    const tree = renderer
      .create(<Map
        offers={offers}
        currentCity={city}
        offerActive={offers[0]}
        test={true}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly with currentOfferLocation`, () => {
    const tree = renderer
      .create(<Map
        offers={offers}
        currentCity={city}
        offerActive={offers[0]}
        currentOfferLocation={currentCity}
        test={true}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
