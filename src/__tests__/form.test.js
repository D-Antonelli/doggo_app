import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Form from "../components/Form";

let container = null;
beforeEach(() => {
  //setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  //cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("render data", () => {
  const fakeData = [
    {
      weight: {
        imperial: "6 - 13",
        metric: "3 - 6",
      },
      height: {
        imperial: "9 - 11.5",
        metric: "23 - 29",
      },
      id: 1,
      name: "Affenpinscher",
      bred_for: "Small rodent hunting, lapdog",
      breed_group: "Toy",
      life_span: "10 - 12 years",
      temperament:
        "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
      origin: "Germany, France",
      reference_image_id: "BJa4kxc4X",
      image: {
        id: "BJa4kxc4X",
        width: 1600,
        height: 1199,
        url: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
      },
    },
  ];

act(() => {
  render(<Form data={fakeData} selected={1}/>, container)      
})

expect(container.textContent).toContain(fakeData[0].name);
});


it("handle empty array", () => {
  const fakeData = [];

  act(() => {
    render(<Form data={fakeData} selected={1} />, container);
  });

  expect(container.textContent).toContain("Search by breed");
});

it("handle empty data", () => {
    const fakeData = [{}];
    act(() => {
      render(<Form data={fakeData} selected={1} />, container);

      expect(container.textContent).toContain("Search by breed");
    });
})

it("handle null data", () => {
  const fakeData = null;
  act(() => {
    render(<Form data={fakeData} selected={1} />, container);

    expect(container.textContent).toContain("Search by breed");
  });
});


