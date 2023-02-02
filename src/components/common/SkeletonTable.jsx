import SkeletonRow from "./SkeletonRow";
import { v4 as uuid } from 'uuid';

const SkeletonTable = ( {numberOfCellsInRows = 5} ) => {
    const rowCount = new Array(10);
    return (
        <tbody>
            {[...rowCount].map((e, i) => <SkeletonRow key={uuid()} numberOfCells={numberOfCellsInRows} />)}
        </tbody>
    )
};

export default SkeletonTable;