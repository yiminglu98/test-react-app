import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

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
});
