import SkeletonRow from "./SkeletonRow";

const SkeletonTable = ( {numberOfCellsInRows = 5} ) => {
    const rowCount = new Array(10);
    return (
        <>
            {[...rowCount].map((e, i) => <SkeletonRow numberOfCells={numberOfCellsInRows} />)}
        </>
    )
};

export default SkeletonTable;