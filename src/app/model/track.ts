import { Artist } from "./artist";

export class Track {
    artist: Artist | undefined;
    constructor(public id: number, public title: string) {}
}
