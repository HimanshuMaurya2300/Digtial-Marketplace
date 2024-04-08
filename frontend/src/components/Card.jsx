/* eslint-disable react/prop-types */
// ThemeCard.jsx
const ThemeCard = (props) => {

    const { image, title, description, price } = props

    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
            <img className="w-full" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{price}</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View Details
                </button>
            </div>
        </div>
    );
}

export default ThemeCard;
