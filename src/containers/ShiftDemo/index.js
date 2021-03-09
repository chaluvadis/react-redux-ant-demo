import { Table, Space, Button, Modal } from "antd";
import { connect, useDispatch } from "react-redux";
import { show_config_drawer, hide_config_drawer, show_shift_drawer, hide_shift_drawer } from "./action";
const data = [{
    key: 1,
    id: 1,
    assignment: "Assignment_12",
    shift: "Buhasa_1",
    nextShift: "Buhasa_2",
    prevShift: "",
    startTime: (new Date()).toDateString(),
    endTime: (new Date()).toDateString(),
    status: "Active"
}, {
    key: 2,
    id: 2,
    assignment: "Assignment_13",
    shift: "Buhasa_2",
    nextShift: "Buhasa_3",
    prevShift: "Buhasa_1",
    startTime: (new Date()).toDateString(),
    endTime: (new Date()).toDateString(),
    status: "Active"
}, {
    key: 3,
    id: 3,
    assignment: "Assignment_14",
    shift: "Buhasa_3",
    nextShift: "Buhasa_4",
    prevShift: "Buhasa_2",
    startTime: (new Date()).toDateString(),
    endTime: (new Date()).toDateString(),
    status: "Active"
}, {
    key: 4,
    id: 4,
    assignment: "Assignment_15",
    shift: "Buhasa_4",
    nextShift: "Buhasa_5",
    prevShift: "Buhasa_3",
    startTime: (new Date()).toDateString(),
    endTime: (new Date()).toDateString(),
    status: "Active"
}, {
    key: 5,
    id: 5,
    assignment: "Assignment_16",
    shift: "Buhasa_5",
    nextShift: "Buhasa_6",
    prevShift: "Buhasa_4",
    startTime: (new Date()).toDateString(),
    endTime: (new Date()).toDateString(),
    status: "Active"
}];
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
const ShiftDemo = ({ showShiftModal, showConfigModal }) => {
    const dispatch = useDispatch();
    const rowClick = (record, rowIndex) => {
        dispatch(show_config_drawer());
        console.log(rowIndex, JSON.stringify(record));
    };
    const newShift = () => {
        dispatch(show_shift_drawer());
    };
    const hideShiftModal = () => {
        dispatch(hide_shift_drawer());
    };
    const hideConfigModal = () => {
        dispatch(hide_config_drawer());
    };
    return (
        <>
            <Space direction={"horizontal"}>
                <div className="pullright">
                    <Button type={"primary"} onClick={newShift} title="Add New Shift">Add New Shift</Button>
                </div>
            </Space>
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
                dataSource={data}
                columns={columns} />
            <Modal key="assignment" onCancel={hideShiftModal} visible={showShiftModal}>
                Allow the modal to Add new assignment
            </Modal>
            <Modal key="config" onCancel={hideConfigModal} visible={showConfigModal}>
                Allow the modal to config the modal
            </Modal>
        </>
    );
};

const mapStatetoProps = ({ shiftReducer: { showShiftModal, showConfigModal } }) => {
    return { showShiftModal, showConfigModal };
};

export default connect(mapStatetoProps)(ShiftDemo);