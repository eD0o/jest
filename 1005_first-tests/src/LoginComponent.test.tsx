import { render, screen } from "@testing-library/react";
import { act } from 'react';
import LoginComponent from "./LoginComponent";

describe('Login component tests', () => {

  const loginServiceMock = {
    login: jest.fn()
  }
  const setTokenMock = jest.fn();

  it('should render correctly the login component', () => {
    let container: HTMLElement;

    act(() => {
      container = render(
        <LoginComponent
          loginService={loginServiceMock}
          setToken={setTokenMock}
        />
      ).container;

      console.log(container.innerHTML);
    });

    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });
});
