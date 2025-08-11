import { render } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en GifGrid", () => {
  const category = "One Punch";
  it("debe de mostrar un loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    const { getByText } = render(<GifGrid category={category} />);
    expect(getByText("Loading...")).toBeTruthy();
    expect(getByText(category)).toBeTruthy();
  });
  it("debe de mostar items cuando se cargan las imágenes UseFetchGifs", () => {
    const gifs = [
      {
        id: "1",
        title: "Gif 1",
        url: "https://example.com/gif1.gif",
      },
      {
        id: "2",
        title: "Gif 2",
        url: "https://example.com/gif2.gif",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    const { getAllByRole } = render(<GifGrid category={category} />);
    expect(getAllByRole("img").length).toBe(gifs.length);
  });
});
