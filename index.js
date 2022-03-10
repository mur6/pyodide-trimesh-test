import { init_pyodide, make_eye, make_ones } from './src/pyodide.js';

async function main() {
    const py = await init_pyodide();
    let r = make_eye(py, 4);
    console.log(r);
    let r2 = make_ones(py, 10, 2);
    console.log(r2);
}

main();
