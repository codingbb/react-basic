import React, { Component, useEffect, useState } from "react";

const Mynav = ({ data, onChangePage }) => {
  // 초기값은 부모로부터 받은 빈배열
  const [list, setList] = useState([]);
  let lists = [];
  const getList = () => {
    data.forEach((item) => {
      lists.push(
        <li key={item.id}>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onChangePage(item.id);
            }}
          >
            {item.title}
          </a>
        </li>
      );
    });
    setList(lists);
  };

  useEffect(() => {
    getList(); // 가독성을 위해 함수를 호출해서 ㄱㄱ
  }, [data]); // 부모로부터 받은 data가 변경될 때만 실행
  return (
    <nav>
      <ul>{list}</ul>
    </nav>
  );
};

export default Mynav;

// class Mynav extends Component {
//   shouldComponentUpdate(newProps, newState) {
//     // console.log(
//     //   "shouldComponentUpdate 작동",
//     //   newProps.data, // 변경된 값
//     //   this.props.data // 변경전 값
//     // );
//     if (this.props.data === newProps.data) {
//       return false;
//     }

//     return true;
//   }

//   render() {
//     let lists = [];
//     // console.log(this.props.data);
//     const data = this.props.data;

//     data.forEach((item) => {
//       lists.push(
//         <li key={item.id}>
//           <a
//             href="/"
//             onClick={(e) => {
//               e.preventDefault();
//               this.props.onChangePage(item.id);
//             }}
//           >
//             {item.title}
//           </a>
//         </li>
//       );
//     });

//     return (
//       <nav>
//         <ul>{lists}</ul> {/* 동적으로 생성된 리스트를 렌더링 */}
//       </nav>
//     );
//   }
// }
