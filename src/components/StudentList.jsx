import React from 'react'
import PropTypes from "prop-types"
/**
 * @typedef StudentItemProps 
 * 
 * @property {string} student The name of student
 */
/**
 * hiển thị tên sinh viên
 * @param {StudentItemProps} Props
 * @returns 
 */
const StudentItem = ({ student }) => {
    return <li>{student}</li>;
};
const StudentList = () => {    
    const students = ["Ba Nguyễn", "Bùi Hiên", "Mai Anh"];

// Chuyển đổi mảng dữ liệu thành mảng các phần tử JSX
const studentItems = students.map((student) => <StudentItem student={student}/>);

return (
    <div>
        <p>Danh sách sinh viên:</p>

        <ul>
            {/* Nhúng mảng các phẩn tử JSX đã tạo */}
            {studentItems}
        </ul>
    </div>
);
}

export default StudentList