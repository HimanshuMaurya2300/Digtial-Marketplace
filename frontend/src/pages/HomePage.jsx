import ThemeCard from "../components/Card"
import img from './../../public/img.webp'

const HomePage = () => {
    return (
        <div className="flex gap-6 fflex-wrap m-10">
            <ThemeCard
                image={img}
                title={"Theme 1"}
                description={"This is theme 1"}
                price={"$10"}
            />
            <ThemeCard
                image={img}
                title={"Theme 1"}
                description={"This is theme 1"}
                price={"$10"}
            />
            <ThemeCard
                image={img}
                title={"Theme 1"}
                description={"This is theme 1"}
                price={"$10"}
            />
            <ThemeCard
                image={img}
                title={"Theme 1"}
                description={"This is theme 1"}
                price={"$10"}
            />
            <ThemeCard
                image={img}
                title={"Theme 1"}
                description={"This is theme 1"}
                price={"$10"}
            />
        </div>
    )
}

export default HomePage