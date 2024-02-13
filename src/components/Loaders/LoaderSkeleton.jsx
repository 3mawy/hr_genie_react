const LoaderSkeleton = ({ tableHeaders }) => {
    return (
        <tbody>
        {Array.from({ length: 6 }, (_, rowIndex) => (
            <tr key={rowIndex}>
                {tableHeaders?.map((_, cellIndex) => (
                    <td
                        key={cellIndex}
                        className="border-b border-[#eee] py-8 px-5 dark:border-strokedark"
                        style={{ width: `${100 / tableHeaders.length}%` }}
                    >
                        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded bg-bodydark1 dark:bg-black animate-pulse"></div>
                    </td>
                ))}
            </tr>
        ))}
        </tbody>
    );
};

export default LoaderSkeleton;
