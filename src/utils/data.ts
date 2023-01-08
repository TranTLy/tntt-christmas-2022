let seq = 0
import Image1 from './assets/001.jpg'
import Image2 from './assets/002.jpg'
import { Content } from './type.utils'

const CLASS = {
    KHAI_TAM: 'Khai Tâm',
    XUNG_TOI_1: "Xưng tội 1",
    XUNG_TOI_2: "Xưng tội 2",
    XUNG_TOI_3: "Xưng tội 3",
    THEM_SUC_1: "Thêm sức 1",
    THEM_SUC_2: "Thêm sức 2",
    THEM_SUC_3: "Thêm sức 3",
    SONG_DAO_1: "Sống đạo 1",
    SONG_DAO_2: "Sống đạo 2",
    HONG_AN: "Hồng ân",
    OTHERS: "",
}

export const DATA: Content[] = [
    {
        id: ++seq,
        content: "",
        name: "Ly Tran",
        holyName: "Maria",
        class: CLASS.KHAI_TAM,
        image: Image1,
    },
    {
        id: ++seq,
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        name: "Ly Tran 2",
        holyName: "Maria",
        class: CLASS.KHAI_TAM,
        image: Image2,
    }
]