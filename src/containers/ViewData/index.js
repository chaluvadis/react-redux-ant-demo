const ViewData = ({ data }) => {
    return (
        <>
            <div>
                Assignment : {data.assignment}
            </div>
            <div>
                Shift : {data.shift}
            </div>
            <div>
                Next Shift : {data.nextShift}
            </div>
            <div>
                Prev Shift : {data.prevShift}
            </div>
            <div>
                Start Time : {data.startTime}
            </div>
            <div>
                End Time : {data.endTime}
            </div>
        </>
    );
};

export default ViewData;