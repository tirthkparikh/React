import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";
import { Restaurants } from "../../components/Restaurants";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Add Items to Cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={appStore}>
        <Header />
        <Restaurants />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getAllByTestId("menu")));

  const addBtn = body.getAllByTestId("changebtn");

  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[2]);
  fireEvent.click(addBtn[2]);

  const cart = body.getByTestId("cart-qty");

  expect(cart.innerHTML).toBe("3");
});
