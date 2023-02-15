import { StormGlass } from '@src/clients/stormGlass';
import stormGlassWeather3Hours from '@test/fixtures/stormglass_weather_3_hours.json';
import stormGlassWeatherNormalize from '@test/fixtures/stormglass_normalized_response_3_hours.json';
import { describe, expect, it, vi } from 'vitest';
import axios from 'axios';

vi.mock('axios');

describe('StormGlass client', () => {
  const mockedAxios = vi.mocked<typeof axios>(axios, true);
  it('should return the normalized forecast from the StormGlass service', async () => {
    const lat = -33.792726;
    const lng = 151.289824;
    mockedAxios.get.mockResolvedValue({ data: stormGlassWeather3Hours });

    const stormGlass = new StormGlass(mockedAxios);
    const response = await stormGlass.fetchPoints(lat, lng);
    expect(response).toEqual(stormGlassWeatherNormalize);
  });
});
