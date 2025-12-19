const StatusCostum = ({ statusId, statusName }) => {
  const getStatusClass = (statusId) => {
    switch (statusId) {
      case 3:
        return "badge-success";
      case 2:
        return "badge-info";
      case 1:
        return "badge-warning";
      default:
        return "badge-ghost";
    }
  };

  return (
    <div
      className={`badge badge-soft ${getStatusClass(
        statusId
      )} gap-2 font-medium`}
    >
      {statusName || "Unknown"}
    </div>
  );
};

export default StatusCostum;
