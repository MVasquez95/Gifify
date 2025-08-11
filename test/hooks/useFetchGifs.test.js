import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en useFetchGifs', () => {
  it('debe de retornar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));
    const {images, isLoading} = result.current;
    expect(images).toEqual([]);
    expect(isLoading).toBeTruthy();
  });
  it('debe de retornar un arreglo de imagenes y isLoading en false', async () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));
    await waitFor(() => {
      const { images, isLoading } = result.current;
      expect(images.length).toBeGreaterThan(0);
      expect(isLoading).toBeFalsy();
    });
  });
});
