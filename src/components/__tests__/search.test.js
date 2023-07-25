import Body from "../Body";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { StaticRouter } from "react-router-dom/server";
import "@testing-library/jest-dom";

import { RESTAURANT_DATA } from "../../mocks/data";

// we write global fetch so our jest understands what is fetch
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("shimmer should render on page load", () => {
  const body = render(
    <StaticRouter>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getAllByTestId("shimmer");
  console.log(shimmer);

  expect(shimmer[0].children.length).toBe(11);
});

test("Restaurants should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("restData")));

  const resList = body.getByTestId("restData");

  expect(resList.children.length).toBe(15);
});

test("Search for string(food) on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("restData")));

  const input = body.getByTestId("input");

  fireEvent.change(input, {
    target: {
      value: "food",
    },
  });

  const searchBtn = body.getByTestId("button");

  fireEvent.click(searchBtn);

  const resList = body.getByTestId("restData");

  expect(resList.children.length).toBe(4);
});
