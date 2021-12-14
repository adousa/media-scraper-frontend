import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Provider } from "react-redux";

import App from "../App";
import configureStore from "../state/store";

import mediaResponse from "./media-url-response.json";

const server1 = setupServer(
  rest.get("http://localhost:3000/url-media", (req, res, ctx) => {
    return res(ctx.json(mediaResponse));
  })
);

beforeAll(() => {
  global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    disconnect() {
      return null;
    }
    observe() {
      return null;
    }
    takeRecords() {
      return null;
    }
    unobserve() {
      return null;
    }
  };
});

test("Load all url Media", async () => {
  server1.listen();
  const appComponent = render(
    <Provider store={configureStore()}>
      <App />
    </Provider>
  );
  await waitFor(() =>
    screen.getByText(
      "blob:https://www.youtube.com/8014cc26-05a5-4247-84cf-d25894e5a592321"
    )
  );
  expect(
    appComponent.getByText(
      "blob:https://www.youtube.com/8014cc26-05a5-4247-84cf-d25894e5a592321"
    )
  ).toBeTruthy();
  server1.close();
});
