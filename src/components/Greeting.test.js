import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

//my first test snapshot of codes


describe('Greeting components', () => {
    test('renders hello there as a text', () => {
        //Arrange
        render(<Greeting />);
    
        //Act
    
        //Assert
        const helloThereElement = screen.getByText('Hello There', { exact: false });
        expect(helloThereElement).toBeInTheDocument();
    });

    test('renders original welcome test when button not clicked', () => {
        render(<Greeting />);

        const originalElement = screen.getByText("It's nice to see you");
        expect(originalElement).toBeInTheDocument();
    });

    test('renders "changed" when button clicked', () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const outputElement = screen.getByText("Change Text!");
        expect(outputElement).toBeInTheDocument();
    });

    test('dose not render "good to see you"  when button clicked', () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const outputElement =screen.queryByText('good to see you');
        expect(outputElement).toBeNull();
    } )
});
