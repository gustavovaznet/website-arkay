//BLOG COMPONENT

//IMPORTING
import { Link } from 'react-router-dom';
import blogOneImage from '../../assets/news-1.jpg';
import blogTwoImage from '../../assets/news-2.jpg';
import blogThreeImage from '../../assets/news-3.jpg';
import authorImage from '../../assets/author.png';

//BLOGS
const blogs = [
    {
        id: 1,
        title: 'A importância do correto gerenciamento das tarefas em um negócio',
        category: 'Negócios',
        author: 'Marcos Estrada',
        authorImage: authorImage,
        date: '17 de Junho',
        comments: '25 Comentários',
        featureImage: blogOneImage,
        link: '#',
        authorUrl: '#'
    },
    {
        id: 2,
        title: 'A melhor tática para alcançar sucesso nos negócios',
        category: 'Negócios',
        author: 'Marcos Estrada',
        authorImage: authorImage,
        date: '25 de Julho',
        comments: '18 Comentários',
        featureImage: blogTwoImage,
        link: '#',
        authorUrl: '#'
    },
    {
        id: 3,
        title: 'Negócios x Planejamento, alcançando os resultados certos...',
        category: 'Estratégia',
        author: 'Marcos Estrada',
        authorImage: authorImage,
        date: '5 de Novembro',
        comments: '7 Comments',
        featureImage: blogThreeImage,
        link: '#',
        authorUrl: '#'
    }
];

//BLOG
const Blog = () => {
    return (
        <section className="news-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="sub-title-2"><span>Notícias</span></div>
                        <h3 className="sec-title">
                            Novos Feeds
                        </h3>
                    </div>
                </div>
                <div className="row">
                    {
                        blogs?.map(blog => {
                            return (
                                <div key={blog?.id} className="col-lg-4 col-md-6">
                                    <div className="news-item">
                                        <div className="post-thumb">
                                            <img src={blog.featureImage} alt="" />
                                            <Link to={blog?.link} className="cate">{blog?.category}</Link>
                                        </div>
                                        <div className="post-details">
                                            <Link to={blog?.authorUrl} className="author">
                                                <img src={blog?.authorImage} alt="" />{blog?.author}
                                            </Link>
                                            <h4>
                                                <Link to={blog?.link}>{blog?.title}</Link>
                                            </h4>
                                            <div className="post-footer">
                                                <Link to="/"><i className="fa fa-calendar-alt"></i>{blog?.date}</Link>
                                                <Link to="/"><i className="fa fa-comments"></i>{blog?.comments}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;
