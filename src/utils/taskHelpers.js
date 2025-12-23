export const PRIORITY_MAP = {
  high: {
    badge: "badge-error",
    text: "text-error-content",
    label: "High",
  },
  medium: {
    badge: "badge-warning",
    text: "text-warning-content",
    label: "Medium",
  },
  low: {
    badge: "badge-success",
    text: "text-success-content",
    label: "Low",
  },
};

export const STATUS_MAP = {
  3: {
    border: "border-success",
    badge: "badge-success",
    label: "Done",
    type: "status-success",
  },
  2: {
    border: "border-info",
    badge: "badge-info",
    label: "On Work",
    type: "status-info",
  },
  1: {
    border: "border-warning",
    badge: "badge-warning",
    label: "Pending",
    type: "status-warning",
  },

  done: {
    border: "border-success",
    badge: "badge-success badge-soft",
    label: "Done",
    type: "status-success",
  },
  "on work": {
    border: "border-info",
    badge: "badge-info badge-soft",
    label: "On Work",
    type: "status-info",
  },
  pending: {
    border: "border-warning",
    badge: "badge-warning badge-soft",
    label: "Pending",
    type: "status-warning",
  },
};

export const getPriorityStyles = (prio) => {
  const key = typeof prio === "string" ? prio.toLowerCase() : prio;
  return PRIORITY_MAP[key] || PRIORITY_MAP.low;
};

export const getStatusStyles = (status) => {
  const key = typeof status === "string" ? status.toLowerCase() : status;
  return (
    STATUS_MAP[key] || {
      border: "border-base-200",
      badge: "badge-ghost",
      type: "neutral",
      label: status,
    }
  );
};
