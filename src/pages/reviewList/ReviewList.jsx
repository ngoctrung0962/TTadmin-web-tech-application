import "./reviewList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import reviewApi from "../../api/reviewApi";
import { showNotification } from "../../utils/showNotification";

export default function ReviewList() {
  const [data, setData] = useState([]);
  const handleDelete = async (username, id) => {
    try {
      await reviewApi.remove(username, id)
      showNotification('success', 'Great', 'Delete review successful', 'OK')
      const dataFilter = data.filter(item => item.reviewId !== id)
      setData(dataFilter)
    } catch (error) {
      showNotification('success', 'Delete review fail', '', 'OK')
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
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.username, params.row.reviewId)}
            />
          </>
        );
      },
    },
    { field: "reviewId", headerName: "ID", width: 90 },
    {
      field: "content", headerName: "Content", width: 250,
      renderCell: (params) => {
        return (
          <div className="productListItem" >
            {params.row.content ? params.row.content : "null"}
          </div >
        );
      },
    },
    {
      field: "rate", headerName: "Rate", width: 130,
      renderCell: (params) => {
        return (
          <div className="productListItem" >
            {params.row.rate ? params.row.rate : "null"}
          </div >
        );
      },
    },
    {
      field: "time", headerName: "Time", width: 250,
      renderCell: (params) => {
        return (
          <div className="productListItem" >
            {params.row.time ? params.row.time : "null"}
          </div >
        );
      },
    },
    {
      field: "username", headerName: "Username", width: 150,
      renderCell: (params) => {
        return (
          <div className="productListItem" >
            {params.row.username ? params.row.username : "null"}
          </div >
        );
      },
    },
    {
      field: "productId", headerName: "ProductId", width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem" >
            {params.row.productId ? params.row.productId : "null"}
          </div >
        );
      },
    }

  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await reviewApi.getAll();
        setData(res)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [])
  console.log(data)


  return (
    <div className="productList">
      {data.length ? (<DataGrid
        rowHeight={65}
        headerHeight={75}
        getRowId={(row) => row.reviewId}
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
      />) : <>No Data</>}
    </div>
  );
}
