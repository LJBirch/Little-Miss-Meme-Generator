import generator from "./generator";
import './styles/main.css'

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('./assets/images', false, /\.(png|jpe?g|svg)$/));

console.log(images)

generator(images);
