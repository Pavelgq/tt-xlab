import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NewsItem } from "./NewsItem";
import { NewsItemI } from "../../pages/News/NewsData";

const stub: NewsItemI[] = [
  {
    title: "News",
    value: "some text",
  },
  {
    title: "News2",
    value: "some text https://xxx.xx some text",
  },
  {
    title: "News3",
    value: "some text http://xxx.xx some text",
  },
  {
    title: "News4",
    value: "some text sdfs@sfs.ru some text",
  },
];

describe("NewsItem", () => {
  it("Отображается заголовок новости", () => {
    render(<NewsItem title={stub[0].title} value={stub[0].value} />);
    expect(screen.getByText(`${stub[0].title}`)).toBeInTheDocument();
  });
  it("Отображается текст новости", () => {
    render(<NewsItem title={stub[0].title} value={stub[0].value} />);
    expect(screen.getByText(`${stub[0].value}`)).toBeInTheDocument();
  });
  it("Ссылка типа  https://xxx.xx", () => {
    render(<NewsItem title={stub[1].title} value={stub[1].value} />);
    const el = screen.getByRole("link");
    expect(el).toBeInTheDocument();
  });
  it("Ссылка типа  http://xxx.xx", () => {
    render(<NewsItem title={stub[2].title} value={stub[2].value} />);
    const el = screen.getByRole("link");
    expect(el).toBeInTheDocument();
  });
  it("Ссылка типа xxx@xxx.xx", () => {
    render(<NewsItem title={stub[3].title} value={stub[3].value} />);
    const el = screen.getByRole("link");
    expect(el).toBeInTheDocument();
  });
});
