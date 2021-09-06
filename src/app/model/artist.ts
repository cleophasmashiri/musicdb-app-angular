export class Artist {
    // constructor(public id: string, public name: string, public link: string,public picture: string,
    //     public picture_big: string, public picture_xl: string, public nb_album: number,
    //      public nb_fan: number, public radio: boolean, public tracklist: string, public type: string) {}

    constructor(public id: string, public name: string, public picture: string,
        public picture_big: string, public picture_xl: string,
         public nb_fan: number) {}
}

// "artist": {
//     "id": 10183,
//     "name": "Aloe Blacc",
//     "link": "https://www.deezer.com/artist/10183",
//     "picture": "https://api.deezer.com/artist/10183/image",
//     "picture_small": "https://cdns-images.dzcdn.net/images/artist/9c32944158f7eb8870785258e84313ff/56x56-000000-80-0-0.jpg",
//     "picture_medium": "https://cdns-images.dzcdn.net/images/artist/9c32944158f7eb8870785258e84313ff/250x250-000000-80-0-0.jpg",
//     "picture_big": "https://cdns-images.dzcdn.net/images/artist/9c32944158f7eb8870785258e84313ff/500x500-000000-80-0-0.jpg",
//     "picture_xl": "https://cdns-images.dzcdn.net/images/artist/9c32944158f7eb8870785258e84313ff/1000x1000-000000-80-0-0.jpg",
//     "tracklist": "https://api.deezer.com/artist/10183/top?limit=50",
//     "type": "artist"