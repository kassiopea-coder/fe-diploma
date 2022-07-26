import { memo } from "react";
import "./sortFilter.css";
import { Select } from "antd";

const SortFilter = memo(({ onChange, active, options }) => {
  return (
    <Select
      className="sortFilter__container"
      dropdownClassName={("sortFilter__dropdown", "sort")}
      options={options}
      onChange={onChange}
      allowClear={false}
      bordered={false}
      defaultValue={active}
    />
  );
});

export default SortFilter;
