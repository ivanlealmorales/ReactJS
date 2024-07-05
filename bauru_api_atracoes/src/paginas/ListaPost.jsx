import React, { useState, useEffect } from "react";
import { busca } from '../api/api.js';
import '../estilos/cartao.css';

const ListaPost = ({ url }) => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        busca(url, setPosts);
    }, [url]);

    // Função para direcionar para URL externa com base no índice do post
    const handleRedirect = (index) => {
        switch (index) {
            case 0:
                window.open("https://www2.bauru.sp.gov.br/", "_blank");
                break;
            case 1:
                window.open("https://wikipedia.com", "_blank");
                break;
            default:
                // Adicione outros casos conforme necessário
                break;
        }
    };

    // Verifica se há posts na lista
    if (posts.length === 0) {
        return <p>Carregando...</p>; // Indicador de carregamento
    }

    return (
        <section className="posts container">
            {posts.map((post, index) => (
                <div key={post.id} className="atracoes_temas">
                    <article>
                        <h3  style={{ cursor: 'pointer' }} onClick={() => handleRedirect(index)}>
                            {post.title}
                        </h3>
                        <p className="cartao-post__meta">
                            {post.metadescription}
                        </p>
                    </article>
                </div>
            ))}
        </section>
    );
};

export default ListaPost;
