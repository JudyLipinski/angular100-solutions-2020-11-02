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
  tracks: Track[];
}

export interface Track {
  id: number;
  trackNumber: number;
  title: string;
  length: string;
}
