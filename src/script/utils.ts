class ImageData {
    width:number;
    height:number;
    data:Uint8Array;

    constructor (width:number, height:number, data:Uint8Array) {
        this.width = width;
        this.height = height;
        this.data = data;
    }
}

export const createImageData = (width:number, height:number):ImageData => {
    const size = width * height;
    const vectorCount = 4;
    const data = new Uint8Array(vectorCount * size);

    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var a = Math.floor(Math.random() * 255);

    for (let i = 0; i < size; i++) {
        let stride = i * vectorCount;

        data[stride] = r;
        data[stride + 1] = g;
        data[stride + 2] = b;
        data[stride + 3] = a;
    }

    return new ImageData(width, height, data);
}