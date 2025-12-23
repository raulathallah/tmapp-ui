import { getStatusStyles } from "../../utils/taskHelpers";

const StatusBadgeCostum = ({ statusId, statusName, variant = "soft" }) => {
  const status = getStatusStyles(statusId || statusName);

  console.log(status);
  return (
    <div
      className={`
        badge gap-2 font-semibold py-3 text-xs
        ${variant === "soft" ? "badge-soft" : "badge-outline border-2"}
        ${status.badge}
      `}
    >
      <div class="inline-grid *:[grid-area:1/1]">
        <div class={`status ${status.type} animate-ping`}></div>
        <div class={`status ${status.type}`}></div>
      </div>
      {statusName || status.label}
    </div>
  );
};

export default StatusBadgeCostum;
