function DisplayComponent({ data,onDelete}) {
    if (!data) {
        return <div className="max-w-md mx-auto mt-6 p-4 bg-gray-100 shadow rounded">No note to display</div>; // or return null
    }
    return (
        <div className="max-w-md mx-auto mt-6 p-4 bg-gray-100 shadow rounded">
            <h2 className="text-lg font-semibold mb-2">Note Preview</h2>
            <p><strong>Title:</strong> {data.title}</p>
            <p><strong>Description:</strong> {data.description}</p>
            <button
                
                 onClick={onDelete}
                className="bg-amber-500 text-white font-medium py-2 px-4 rounded-md hover:bg-amber-600 transition-all duration-200"
            >
                Delete
            </button>
        </div>
    );
}

export default DisplayComponent;
