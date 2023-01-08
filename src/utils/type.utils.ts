export interface ImgGallery {
    original: string
    thumbnail: string
}

export interface Content {
    id: number,
    content: string,
    name?: string,
    holyName?: string,
    class?: string,
    image: StaticImageData,
}