/* eslint-disable testing-library/no-unnecessary-act */
import { fireEvent, render, screen } from "@testing-library/react";
import { userEvent } from '@testing-library/user-event';
import LoginComponent from "./LoginComponent";

describe('Login component tests', () => {

  const loginServiceMock = {
    login: jest.fn()
  }
  const setTokenMock = jest.fn();

  let container: HTMLElement;

  function setup() {
    container = render(
      <LoginComponent
        loginService={loginServiceMock}
        setToken={setTokenMock}
      />
    ).container;
  }

  beforeEach(() => {
    setup();
  });

  it('should render correctly the login component', () => {
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
    expect(screen.queryByTestId('resultLabel')).not.toBeInTheDocument()
  });

  it('should render correctly - query by test id', () => {
    const inputs = screen.getAllByTestId('input');
    expect(inputs).toHaveLength(3);
    expect(inputs[0].getAttribute('value')).toBe('')
    expect(inputs[1].getAttribute('value')).toBe('')
    expect(inputs[2].getAttribute('value')).toBe('Login')
  });

  it('should render correctly - query by document query', () => {
    // eslint-disable-next-line testing-library/no-node-access
    const inputs = container.querySelectorAll('input') // not recommended
    expect(inputs).toHaveLength(3);
    expect(inputs[0].value).toBe('')
    expect(inputs[1].value).toBe('')
    expect(inputs[2].value).toBe('Login')
  });

  it('Click login button with incomplete credentials - show required message', () => {
    const inputs = screen.getAllByTestId('input')
    const loginButton = inputs[2]

    fireEvent.click(loginButton);

    const resultLabel = screen.getByTestId('resultLabel');
    expect(resultLabel.textContent).toBe('UserName and password required!')
  });

  it('Click login button with incomplete credentials - show required message - with user click', async () => {
    const inputs = screen.getAllByTestId('input');
    const loginButton = inputs[2];

    userEvent.click(loginButton); // simulate user click on login button

    const resultLabel = await screen.findByTestId('resultLabel'); // wait for the resultLabel to appear
    expect(resultLabel.textContent).toBe('UserName and password required!');
  });
});
