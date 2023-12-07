import React, { useEffect, useState } from "react";
import AdminLayout from "../layout/AdminLayout";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import { useLazyGetDashboardSalesQuery } from "../../redux/api/orderApi";
import { toast } from "react-hot-toast";
import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date().setDate(1));
  const [endDate, setEndDate] = useState(new Date());

  const [getDashboardSales, { error, isLoading, data }] =
    useLazyGetDashboardSalesQuery();

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message);
    }

    if (startDate && endDate && !data) {
      getDashboardSales({
        startDate: new Date(startDate).toISOString(),
        endDate: endDate.toISOString(),
      });
    }
  }, [error]);

  const submitHandler = () => {
    getDashboardSales({
      startDate: new Date(startDate).toISOString(),
      endDate: endDate.toISOString(),
    });
  };

  if (isLoading) return <Loader />;

  return (
    <AdminLayout>


      <h5>Admin Dashboard</h5>
    </AdminLayout>

  );
};

export default Dashboard;
