import { render, screen } from "@testing-library/react";
import Async from "./Async";


describe('Test async code functioning', () => {

    test('renders component if request succeed', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async() => [{id:'p1', title:'mock test'}],
        });
        render(<Async />);

        const renderItems = await screen.findAllByRole('listitem');
        expect(renderItems).not.toHaveLength(0);

    });


});

