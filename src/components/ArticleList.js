import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    const articleArr = posts.map(post => {return <Article id={post.id} title={post.title} preview={post.preview} />})
    return(
        <main>
            {articleArr}
        </main>
    )
}

export default ArticleList