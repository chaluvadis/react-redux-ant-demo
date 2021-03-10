import { Table, Modal } from "antd";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { set_shift_data, set_selected_row } from "./action";
import { show_shift_drawer, hide_shift_drawer } from "../util/action";
import ViewDataComponent from "../ViewData/index";
const columns = [{
    title: "Id",
    dataIndex: "id",
    key: "id"
}, {
    title: "Assignment",
    dataIndex: "assignment",
    key: "assignment"
}, {
    title: "Shift",
    dataIndex: "shift",
    key: "shift"
}, {
    title: "Next Shift",
    dataIndex: "nextShift",
    key: "nextShift"
}, {
    title: "Prev Shift",
    dataIndex: "prevShift",
    key: "prevShift"
}, {
    title: "Start Time",
    dataIndex: "startTime",
    key: "startTime"
}, {
    title: "End Time",
    dataIndex: "endTime",
    key: "endTime"
}, {
    title: "status",
    dataIndex: "status",
    key: "status"
}];
const ShiftDemo = ({ selectedRow, shift, showConfigModal, showShiftModal, set_shift_data }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(set_shift_data());
    }, []);
    const rowClick = (record, rowIndex) => {
        dispatch(show_shift_drawer());
        dispatch(set_selected_row(record));
    };
    const handleCancel = () => {
        dispatch(hide_shift_drawer());
    };
    return (
        <>
            <Table
                rowKey="shiftrows"
                key="shiftdemotable"
                rowClassName="shiftrow"
                bordered={true}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: (e) => rowClick(record, rowIndex)
                    };
                }}
                dataSource={shift}
                columns={columns} />
            <Modal visible={showShiftModal} onCancel={handleCancel}>
                <ViewDataComponent data={selectedRow} />
            </Modal>
        </>
    );
};

const mapStatetoProps = ({ shiftReducer: { selectedRow, shift },
    utilReducer: { showConfigModal, showShiftModal } }) => {
    return { selectedRow, shift, showConfigModal, showShiftModal };
};

const mapActiontoProps = { set_shift_data };

export default connect(mapStatetoProps,
    mapActiontoProps)(ShiftDemo);