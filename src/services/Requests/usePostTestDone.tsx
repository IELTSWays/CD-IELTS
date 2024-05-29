// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";

const usePostTestDone = () => {

  const navigate = useNavigate();
  const answersAll = useAppSelector((state: any) => state.user.answersAll)

  const init = {};
  for (let i = 1; i <= 40; i++) {
    init[i.toString()] = null;
  }

  const merge = { ...init, ...answersAll };

  let final = {
    ...merge
  };

  const testName = localStorage.getItem('test_name');

  if (testName === 'B10LT1' || testName === 'B10LT3') {
    final = {
      ...final,
      "11": merge[11] && merge[11][0] ? merge[11][0] : null,
      "12": merge[11] && merge[11][1] ? merge[11][1] : null,
    };
  }

  if (testName === 'B14LT1') {
    final = {
      ...final,
      "11": merge[11] && merge[11][0] ? merge[11][0] : null,
      "12": merge[11] && merge[11][1] ? merge[11][1] : null,

      "13": merge[13] && merge[13][0] ? merge[13][0] : null,
      "14": merge[13] && merge[13][1] ? merge[13][1] : null
    };
  }

  if (testName === 'B10LT2') {
    final = {
      ...final,
      "21": merge[21] && merge[21][0] ? merge[21][0] : null,
      "22": merge[21] && merge[21][1] ? merge[21][1] : null,

      "23": merge[23] && merge[23][0] ? merge[23][0] : null,
      "24": merge[23] && merge[23][1] ? merge[23][1] : null
    };
  }

  if (testName === 'B13LT2') {
    final = {
      ...final,
      "17": merge[17] && merge[17][0] ? merge[17][0] : null,
      "18": merge[17] && merge[17][1] ? merge[17][1] : null,

      "19": merge[19] && merge[19][0] ? merge[19][0] : null,
      "20": merge[19] && merge[19][1] ? merge[19][1] : null
    };
  }

  if (testName === 'B13LT4') {
    final = {
      ...final,
      "27": merge[27] && merge[27][0] ? merge[27][0] : null,
      "28": merge[27] && merge[27][1] ? merge[27][1] : null,

      "29": merge[29] && merge[29][0] ? merge[29][0] : null,
      "30": merge[29] && merge[29][1] ? merge[29][1] : null
    };
  }

  if (testName === 'B14RT1') {
    final = {
      ...final,
      "19": merge[19] && merge[19][0] ? merge[19][0] : null,
      "20": merge[19] && merge[19][1] ? merge[19][1] : null,

      "21": merge[21] && merge[21][0] ? merge[21][0] : null,
      "22": merge[21] && merge[21][1] ? merge[21][1] : null
    };
  }

  if (testName === 'B14RT3') {
    final = {
      ...final,
      "21": merge[21] && merge[21][0] ? merge[21][0] : null,
      "22": merge[21] && merge[21][1] ? merge[21][1] : null
    };
  }

  if (testName === 'B14LT3') {
    final = {
      ...final,
      "11": merge[11] && merge[11][0] ? merge[11][0] : null,
      "12": merge[11] && merge[11][1] ? merge[11][1] : null,

      "13": merge[13] && merge[13][0] ? merge[13][0] : null,
      "14": merge[13] && merge[13][1] ? merge[13][1] : null
    };
  }

  if (testName === 'B14LT4') {
    final = {
      ...final,
      "17": merge[17] && merge[17][0] ? merge[17][0] : null,
      "18": merge[17] && merge[17][1] ? merge[17][1] : null,

      "19": merge[19] && merge[19][0] ? merge[19][0] : null,
      "20": merge[19] && merge[19][1] ? merge[19][1] : null
    };
  }

  if (testName === 'B16LT3') {
    final = {
      ...final,
      "11": merge[11] && merge[11][0] ? merge[11][0] : null,
      "12": merge[11] && merge[11][1] ? merge[11][1] : null,

      "13": merge[13] && merge[13][0] ? merge[13][0] : null,
      "14": merge[13] && merge[13][1] ? merge[13][1] : null,

      "21": merge[21] && merge[21][0] ? merge[21][0] : null,
      "22": merge[21] && merge[21][1] ? merge[21][1] : null,

      "23": merge[23] && merge[23][0] ? merge[23][0] : null,
      "24": merge[23] && merge[23][1] ? merge[23][1] : null
    };
  }

  if (testName === 'B17LT1') {
    final = {
      ...final,
      "15": merge[15] && merge[15][0] ? merge[15][0] : null,
      "16": merge[15] && merge[15][1] ? merge[15][1] : null,

      "17": merge[17] && merge[17][0] ? merge[17][0] : null,
      "18": merge[17] && merge[17][1] ? merge[17][1] : null,

      "19": merge[19] && merge[19][0] ? merge[19][0] : null,
      "20": merge[19] && merge[19][1] ? merge[19][1] : null,
    };
  }

  if (testName === 'B17LT2') {
    final = {
      ...final,
      "21": merge[21] && merge[21][0] ? merge[21][0] : null,
      "22": merge[21] && merge[21][1] ? merge[21][1] : null,
    };
  }

  if (testName === 'B11LT2') {
    final = {
      ...final,
      "11": merge[11] && merge[11][0] ? merge[11][0] : null,
      "12": merge[11] && merge[11][1] ? merge[11][1] : null,

      "13": merge[13] && merge[13][0] ? merge[13][0] : null,
      "14": merge[13] && merge[13][1] ? merge[13][1] : null,

      "15": merge[15] && merge[15][0] ? merge[15][0] : null,
      "16": merge[15] && merge[15][1] ? merge[15][1] : null,

      "27": merge[27] && merge[27][0] ? merge[27][0] : null,
      "28": merge[27] && merge[27][1] ? merge[27][1] : null,

      "29": merge[29] && merge[29][0] ? merge[29][0] : null,
      "30": merge[29] && merge[29][1] ? merge[29][1] : null
    };
  }

  if (testName === 'B17LT3') {
    final = {
      ...final,
      "11": merge[11] && merge[11][0] ? merge[11][0] : null,
      "12": merge[11] && merge[11][1] ? merge[11][1] : null,
    };
  }

  if (testName === 'B17LT4' || testName === 'B10LT4') {
    final = {
      ...final,
      "21": merge[21] && merge[21][0] ? merge[21][0] : null,
      "22": merge[21] && merge[21][1] ? merge[21][1] : null,

      "23": merge[23] && merge[23][0] ? merge[23][0] : null,
      "24": merge[23] && merge[23][1] ? merge[23][1] : null
    };
  }

  if (testName === 'B18LT1') {
    final = {
      ...final,
      "14": merge[14] && merge[14][0] ? merge[14][0] : null,
      "15": merge[14] && merge[14][1] ? merge[14][1] : null,

      "27": merge[27] && merge[27][0] ? merge[27][0] : null,
      "28": merge[27] && merge[27][1] ? merge[27][1] : null,

      "29": merge[29] && merge[29][0] ? merge[29][0] : null,
      "30": merge[29] && merge[29][1] ? merge[29][1] : null
    };
  }

  if (testName === 'B11LT4') {
    final = {
      ...final,
      "21": merge[21] && merge[21][0] ? merge[21][0] : null,
      "22": merge[21] && merge[21][1] ? merge[21][1] : null,

      "23": merge[23] && merge[23][0] ? merge[23][0] : null,
      "24": merge[23] && merge[23][1] ? merge[23][1] : null,

      "25": merge[25] && merge[25][0] ? merge[25][0] : null,
      "26": merge[25] && merge[25][1] ? merge[25][1] : null,
    };
  }

  for (let key in final) {
    if (key.startsWith("000")) {
      delete final[key];
    }
  }

  const { isLoading, isSuccess, data, isError, refetch } = useQuery({
    enabled: false,
    queryKey: ['postTestDone'],
    queryFn: async () => {
      const response = await api.patch(`exam/answer/${localStorage.getItem('test_id')}`, {
        "test_done": true,
        "confirm": true,
        "answers": final,
      })
      const data = await response.data
      navigate(`/reports/${localStorage.getItem('test_id')}`)
      return data
    },
  })
  return { isLoading, isSuccess, data, isError, refetch };
};

export default usePostTestDone;