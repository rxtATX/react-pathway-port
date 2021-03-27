import {
    Card
} from '../components';

const portData = [
    {
        name: "App 1",
        url: "https://rxtatx.github.io/mothers_day/",
        repo: "https://github.com/rxtATX/mothers_day",
        desc: "App 1's description text."
    },
    {
        name: "App 2",
        url: "https://rxtatx.github.io/photo-port/",
        repo: "https://github.com/rxtATX/photo-port",
        desc: "App 2's description text."
    },
    {
        name: "App 3",
        url: "https://rxtatx.github.io/seo-refactor/",
        repo: "https://github.com/rxtATX/seo-refactor",
        desc: "App 3's description text."
    },
    {
        name: "App 4",
        url: "https://rxtatx.github.io/mothers_day/",
        repo: "https://github.com/rxtATX/mothers_day",
        desc: "App 4's description text."
    },
    {
        name: "App 5",
        url: "https://rxtatx.github.io/photo-port/",
        repo: "https://github.com/rxtATX/photo-port",
        desc: "App 5's description text."
    },
    {
        name: "App 6",
        url: "https://rxtatx.github.io/seo-refactor/",
        repo: "https://github.com/rxtATX/seo-refactor",
        desc: "App 6's description text."
    },
]

const Portfolio = () => {
    return (
        <section className="container">
            {
                portData.map((project, i) => {
                    return <Card project={project} key={i} />
                })
            }
        </section>
    )
}

export default Portfolio;