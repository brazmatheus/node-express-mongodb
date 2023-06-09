import express from 'express';

const app = express();

app.use(express.json())

let livros = [
    {id: 1, titulo: "Titulo1"}, 
    {id: 2, titulo: "Titulo2"}
]

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node");
})

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
})

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso")
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}

export default app;