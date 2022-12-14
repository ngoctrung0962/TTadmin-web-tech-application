import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import userApi from "../../api/userApi";
import { useSelector } from "react-redux";
import { showNotification } from "../../utils/showNotification";

export default function ShipperList() {
  const user = useSelector((state) => state.user.currentUser);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await userApi.getAll();
        setData(res);
        window.scrollTo(0, 0);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  //fill data differently user.username
  const datafill = data.filter((item) => item.username !== user.username);
  // add fill id to the data
  // const rows = data.map((item, index) => {
  //   item.id = index;
  //   return item;
  // });
  // console.log(rows);
  const handleDelete = async (id) => {
    try {
      await userApi.remove(id);
      showNotification("success", "Delete user succses", "", "OK");
      setData(data.filter((item) => item.username !== id));
      console.log(data);
    } catch (error) {
      showNotification("error", "Delete user fail", "", "OK");
    }
  };
  const columns = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.username}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.username)}
            />
          </>
        );
      },
    },
    {
      field: "role",
      headerName: "Role",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListItem">
            {params.row.role ? params.row.role : "null"}
          </div>
        );
      },
    },
    {
      field: "username",
      headerName: "Username",
      width: 150,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.username}</div>;
      },
    },
    {
      field: "name",
      headerName: "FullName",
      width: 170,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.name}</div>;
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 170,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.email}</div>;
      },
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      width: 170,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.phoneNumber}</div>;
      },
    },
    {
      field: "dateOfBirth",
      headerName: "Date of Birth",
      width: 150,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.dateOfBirth}</div>;
      },
    },
    {
      field: "address",
      headerName: "Address",
      width: 150,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.address}</div>;
      },
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.gender === true ? "Male" : "Felmale"}
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <Link to="/newuser">
        <button className="userAddButton">Create</button>
      </Link>
      {data.length ? (
        <DataGrid
          rows={datafill}
          rowHeight={65}
          headerHeight={75}
          columns={columns}
          getRowId={(row) => row.username}
          pageSize={10}
        />
      ) : (
        <div>No data</div>
      )}
    </div>
  );
}
