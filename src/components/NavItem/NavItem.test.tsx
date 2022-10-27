import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NavItemsI } from "../Navbar/NavbarData";
import { ReactComponent as Logo } from "../../assets/svg/avatar.svg";
import { NavItem } from "./NavItem";
import { BrowserRouter, MemoryRouter, Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/example/path",
  }),
}));

const stub: NavItemsI[] = [
  {
    name: "Item1",
    link: "/",
    Icon: Logo,
  },
  {
    name: "Item2",
    link: "/",
    Icon: Logo,
    subItems: [
      {
        name: "SubItem1",
        link: "/",
        Icon: Logo,
      },
    ],
  },
  {
    name: "Item3",
    link: "/address",
    Icon: Logo,
  },
];

describe("NavItem", () => {
  it("Отображается элемент меню", () => {
    render(<NavItem name={stub[0].name} Icon={stub[0].Icon} />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getByText(`${stub[0].name}`)).toBeInTheDocument();
  });
  it("Отображается вложенный элемент меню", async () => {
    render(
      <NavItem
        name={stub[1].name}
        Icon={stub[1].Icon}
        subItems={stub[1].subItems}
      />,
      {
        wrapper: BrowserRouter,
      }
    );
    const user = userEvent.setup();
    await user.click(screen.getByText(`${stub[1].name}`));

    expect(screen.getByText(`SubItem1`)).toBeInTheDocument();
  });
  it("Активная ссылка подсвечена", async () => {
    const history = createMemoryHistory({ initialEntries: ["/home"] });
    render(
      <Router location={history.location} navigator={history}>
        <NavItem name={stub[2].name} Icon={stub[2].Icon} link={stub[2].link} />,
      </Router>
    );
    expect(history.location.pathname).toBe("/home");
    fireEvent.click(screen.getByText(`${stub[2].name}`));
    expect(history.location.pathname).toBe("/address");
  });
});
