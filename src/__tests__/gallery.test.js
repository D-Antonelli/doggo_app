import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Gallery from "../components/Gallery";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("render images", () => {
  const fakeData = [
    {
      breeds: [
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
        },
      ],
      id: "BJa4kxc4X",
      url: "https://cdn2.thedogapi.com/images/BJa4kxc4X_1280.jpg",
      width: 1600,
      height: 1199,
    },
  ];

  act(() => {
    render(<Gallery data={fakeData} />, container);
  });

  expect(container.textContent).toContain(fakeData[0].id);
});

it("handle null data", () => {
  const fakeData = null;

  act(() => {
    render(<Gallery data={fakeData} />, container);
  });

  expect(container.firstChild.textContent).toBe("");
});

it("handle empty data", () => {
  const fakeData = [{}];

  act(() => {
    render(<Gallery data={fakeData} />, container);
  });

  expect(container.firstChild.textContent).toBe("");
});

it("handle empty array", () => {
  const fakeData = [];

  act(() => {
    render(<Gallery data={fakeData} />, container);
  });

  expect(container.firstChild.textContent).toBe("");
});
