import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { StaticRouter } from "react-router-dom/server";
import { LOGO_URL } from "../../utils/constants";

test("Logo should load on header render", () => {
  const header = render(
    <StaticRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getAllByTestId("logo");

  expect(logo[0].src).toBe(LOGO_URL);
});

test("Online Status should be green on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // Check if logo is loaded
  const onlineStatus = header.getByTestId("status");

  expect(onlineStatus.innerHTML).toBe("online status: 🟢");
});

test("Cart should have 0 items on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // Check if logo is loaded
  const cart = header.getByTestId("cart-qty");

  expect(cart.innerHTML).toBe("0");
});
