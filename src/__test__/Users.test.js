import React from "react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import { create } from 'react-test-renderer';

import Users from "../components/Users";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("User component", () => {
  it("it shows a list of users", async () => {
    const fakeResponse = [{ name: "John Doe" }, { name: "Kevin Mitnick" }];

    jest.spyOn(window, "fetch").mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(fakeResponse)
      };
      return Promise.resolve(fetchResponse);
    });

    await act(async () => {
      render(<Users />, container);
    });

    const header = container.querySelector('h2');
    const list = container.querySelector('ul');

    expect(header.textContent).toBe("Guests And Users");
    expect(list.textContent).toBe("John DoeKevin Mitnick");

    window.fetch.mockRestore();
  });




  it('takes snapshot of state changes', () => {

    const fakeResponse = [{ name: "John Doe" }, { name: "Kevin Mitnick" }];

    jest.spyOn(window, "fetch").mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(fakeResponse)
      };
      return Promise.resolve(fetchResponse);
    });

    let component;
    act(() => {
      component = create(<Users />);
    }); 

    expect(component.toJSON()).toMatchSnapshot();

    window.fetch.mockRestore();
  });
});