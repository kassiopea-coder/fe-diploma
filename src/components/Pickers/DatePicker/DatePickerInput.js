import React, { memo } from "react";
import { ConfigProvider, DatePicker } from "antd";
import ru_RU from "antd/lib/locale/ru_RU";
import moment from "moment";
import "moment/locale/ru";
import "./customDatePicker.css";

moment.locale("ru");

const dateFormat = (className) => {
  if (className === "headerPicker") {
    return "DD/MM/YY";
  } else {
    return "DD.MM.YY";
  }
};

const placeholder = (className) => {
  if (className === "headerPicker") {
    return "ДД/ММ/ГГ";
  } else {
    return "ДД.ММ.ГГ";
  }
};

const DatePickerInput = memo(
  ({ className, pickerPlace, defaultValue, getDate, dateType }) => {
    return (
      <ConfigProvider locale={ru_RU}>
        <DatePicker
          className={className}
          dropdownClassName="input__dropDown"
          onChange={(value) => getDate(value, dateType)}
          value={defaultValue}
          format={dateFormat(pickerPlace)}
          placeholder={placeholder(pickerPlace)}
          allowClear
        />
      </ConfigProvider>
    );
  }
);

export default DatePickerInput;
