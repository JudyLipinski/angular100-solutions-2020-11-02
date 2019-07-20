export interface Album {
  id: number;
  artist: string;
  albumName: string;
  genre: string;
  price: number;
  currency?: string;
  onSale: boolean;
  year: number;
  releaseDate: string;
  recordingLocation: string;
  duration: string;
  url: string;
}
