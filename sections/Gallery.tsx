import Image from "deco-sites/std/components/Image.tsx"

let images = [
    'https://files.catbox.moe/iku6af.jpg',
    'https://files.catbox.moe/ft95jc.jpg',
    'https://files.catbox.moe/4pbk10.jpg',
    'https://files.catbox.moe/17dhy8.jpg',
    'https://files.catbox.moe/jdz0ah.jpg',
    'https://files.catbox.moe/jdz0ah.jpg',
    'https://files.catbox.moe/d8ry2f.jpg',
    'https://files.catbox.moe/dbnur0.jpg',
    'https://files.catbox.moe/gjop8x.jpg',
    'https://files.catbox.moe/19fjb8.jpg',
    'https://files.catbox.moe/19fjb8.jpg',
    'https://files.catbox.moe/uaeigi.jpg',
    'https://files.catbox.moe/eogwzq.jpg',
    'https://files.catbox.moe/eogwzq.jpg'
]

images = [...images, ...images]

export default function Gallery() {
    return (
        <div>
            {images.map((image) => (
                <Image src={image} width={300} />
            ))}
        </div>
    )
}
