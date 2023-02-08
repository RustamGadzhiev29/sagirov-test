import { DataType } from "../store/types";

import { instance } from "./config/config";

const DataApi = {
  getData() {
    return instance.get<Array<DataType>>("data.json");
  },
};

export default DataApi;
