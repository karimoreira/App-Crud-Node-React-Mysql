import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data);
    });
};

export const createUser = (req, res) => {
    const { nome, email, fone, data_nascimento } = req.body;

    const q = "INSERT INTO usuarios (nome, email, fone, data_nascimento) VALUES (?, ?, ?, ?)";

    db.query(q, [nome, email, fone, data_nascimento], (err, data) => {
        if (err) return res.json(err);
        return res.status(201).json("Usuário criado com sucesso!");
    });
};


export const deleteUser = (req, res) => {
    const userId = req.params.id; 
    const q = "DELETE FROM usuarios WHERE id = ?"; 

    db.query(q, [userId], (err, data) => {
        if (err) {
            console.error("Erro ao deletar usuário:", err); 
            return res.status(500).json(err); 
        }
        return res.status(200).json("Usuário deletado com sucesso!"); 
    });
};
