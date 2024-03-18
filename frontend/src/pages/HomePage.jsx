import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div className="flex text-2xl w-full h-full justify-center items-center flex-col">
            <div className="text-red-500">
                Welcome to the Digital Marketplace
            </div>

            <div>
                <Link to="/login">Login</Link>
            </div>

            <div>
                <Link to="/signup">Signup</Link>
            </div>
        </div>
    )
}

export default HomePage