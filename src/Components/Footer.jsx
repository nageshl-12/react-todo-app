const Footer = ({ list }) => {
  const completedCount = list.filter((item) => item.checked).length;
  const lengthOflist = list.length;
  return (
    <p>
      <span className="text-gray-700 font-bold">
        {lengthOflist <= 0
          ? "Add your first task"
          : `Total Tasks: ${list.length} `}
      </span>

      <span className="text-green-700 font-bold">
        {completedCount > 0 && `| Completed Tasks: ${completedCount}`}
      </span>
    </p>
  );
};

export default Footer;
