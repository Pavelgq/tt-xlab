import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Address } from "./Address";

describe("Address page", () => {
  it("Есть поле ввода", () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Address />
      </QueryClientProvider>
    );
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
  it("Есть кнопка для сабмита", () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Address />
      </QueryClientProvider>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("При вводе текста и нажатии кнопки отправляется запрос", async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Address />
      </QueryClientProvider>
    );
    const user = userEvent.setup();
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Питер" },
    });
    await user.click(screen.getByRole("button"));
    expect(screen.getByText(/Загрузка/i)).toBeInTheDocument();
  });
  it("Если запрос короче 3х символов - не отправляет запрос", async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Address />
      </QueryClientProvider>
    );
    const user = userEvent.setup();
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Пи" },
    });
    await user.click(screen.getByRole("button"));

    const loadingState = screen.queryByText(/Загрузка/i);
    expect(loadingState).not.toBeInTheDocument();
  });
});
