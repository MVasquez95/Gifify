import { render } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe('Prueba de component GifGridItem', () => {
    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';
    it('debe de hacer match con el snapshot', () => {
        const { container } = render(<GifGridItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });
    it('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        const { getByRole } = render(<GifGridItem title={title} url={url} />);
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const { src, alt } = getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });
    it('debe de mostrar el título en el componente', () => {
        const { getByText } = render(<GifGridItem title={title} url={url} />);
        expect(getByText(title)).toBeTruthy();
    });
});