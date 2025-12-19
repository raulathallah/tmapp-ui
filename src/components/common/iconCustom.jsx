import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconCostum = ({ icon, className = "" }) => {
  return <FontAwesomeIcon icon={icon} className={className} />;
};

IconCostum.Large = ({ icon, className = "" }) => {
  return <FontAwesomeIcon icon={icon} className={`text-2xl ${className}`} />;
};

IconCostum.Medium = ({ icon, className = "" }) => {
  return <FontAwesomeIcon icon={icon} className={`text-lg ${className}`} />;
};

IconCostum.Small = ({ icon, className = "" }) => {
  return <FontAwesomeIcon icon={icon} className={`text-sm ${className}`} />;
};

export default IconCostum;
