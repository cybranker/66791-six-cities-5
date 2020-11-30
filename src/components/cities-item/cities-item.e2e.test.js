import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CitiesItem from "./cities-item";
import {city} from "../../data-test/data-test";

configure({adapter: new Adapter()});

test(`click on "Change City" button`, () => {
  const changeCity = jest.fn();

  const wrapper = shallow(
      <CitiesItem
        currentCity={city}
        city={city}
        changeCity={changeCity}
      />
  );

  wrapper.find(`.locations__item-link`).simulate(`click`);
  expect(changeCity).toHaveBeenCalledTimes(1);
});
