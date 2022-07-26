import "./selectionPage.css";
import { useDispatch, useSelector } from "react-redux";
import { memo, useState } from "react";

import Header from "../../components/Header/Header";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SideSelector from "../../components/Selection/SideSelector/SideSelector";
import LastTickets from "../../components/Selection/LastTickets/LastTickets";
import MainTicketCard from "../../components/Selection/MainTicketCard/MainTicketCard";
import NoResults from "./../../components/NoResults/NoResults";
import Loader from "./../../components/Loading/Loader";
import SortFilter from "../../components/Selection/SortFilter/SortFilter";
import ResultsLimit from "../../components/Selection/ResultsLimit/ResultsLimit";
import CustomPagination from "./../../components/Selection/CustomPagination/CustomPagination";

import { fetchRoutes } from "./../../store/fetchRoutes";
import {
  searchParamsSortSet,
  searchParamsOffsetSet,
  searchParamsLimitSet,
} from "../../store/params";

export const sortOptions = [
  {
    value: "date",
    label: "времени",
  },
  {
    value: "price_min",
    label: "стоимости",
  },
  {
    value: "duration",
    label: "длительности",
  },
];

const SelectionPage = memo(() => {
  const dispatch = useDispatch();

  const params = useSelector((state) => state.params);
  const { limit, sort, offset } = params;

  const trains = useSelector((state) => state.getRoutes.data.items);
  const totalCount = useSelector((state) => state.getRoutes.data.totalCount);

  const status = useSelector((state) => state.getRoutes.status);

  const [activeSort, setActiveSort] = useState([sort]);
  const [currentPage, setCurrentPage] = useState(offset / limit + 1);

  // сортировать по (времени, стоимости, длительности)
  const onChangeSort = (value) => {
    setActiveSort(value);
    const valueStr = `${value}`;
    dispatch(searchParamsSortSet(valueStr));
    dispatch(searchParamsOffsetSet(0));
    dispatch(fetchRoutes(params));
  };

  // показывать по 5, 10, 20
  const onClickLimit = (el) => {
    dispatch(searchParamsLimitSet(el));
    dispatch(searchParamsOffsetSet(0));
    dispatch(fetchRoutes(params));
  };

  // поменять страницу
  const onChangePage = (value) => {
    setCurrentPage(value);
    dispatch(searchParamsOffsetSet(value * limit - limit));
  };

  return (
    <div className="selectionPage__body">
      <Header headerType="select" />
      {status === "pending" && <Loader />}
      {status === "success" && (
        <>
          <ProgressBar />
          <div className="selection__container">
            <div className="selection__sidebar">
              <SideSelector />
              <LastTickets />
            </div>
            <div className="selection__main">
              <div className="selectionMain__sortFilters">
                <div>найдено&nbsp;{totalCount}</div>
                <div>
                  сортировать по:
                  <SortFilter
                    active={activeSort}
                    options={sortOptions}
                    onChange={onChangeSort}
                  />
                </div>
                <div className="resultsLimit__container">
                  показывать по:&nbsp;
                  <ResultsLimit
                    variants={[5, 10, 20]}
                    active={limit}
                    onClick={onClickLimit}
                  />
                </div>
              </div>
              {!totalCount && <NoResults />}
              {totalCount !== 0 && (
                <>
                  <div className="mainTickets__container">
                    {trains.map((trainsItem) => {
                      const key = trainsItem[0].departure.train._id;
                      return <MainTicketCard trains={trainsItem} key={key} />;
                    })}
                  </div>
                  <div className="pagination__container">
                    <CustomPagination
                      data={{
                        current: currentPage,
                        total: totalCount,
                        pageSize: limit,
                        onChange: onChangePage,
                      }}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
});

export default SelectionPage;
