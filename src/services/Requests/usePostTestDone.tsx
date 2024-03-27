// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";

const usePostTestDone = () => {

  const navigate = useNavigate();
  const answersAll = useAppSelector((state: any) => state.user.answersAll)

  const init = {
    '1': null,
    '2': null,
    '3': null,
    '4': null,
    '5': null,
    '6': null,
    "7": null,
    '8': null,
    '9': null,
    '10': null,
    '11': null,
    '12': null,
    '13': null,
    '14': null,
    '15': null,
    '16': null,
    "17": null,
    '18': null,
    '19': null,
    '20': null,
    '21': null,
    '22': null,
    '23': null,
    '24': null,
    '25': null,
    '26': null,
    "27": null,
    '28': null,
    '29': null,
    '30': null,
    '31': null,
    '32': null,
    '33': null,
    '34': null,
    '35': null,
    '36': null,
    "37": null,
    '38': null,
    '39': null,
    '40': null,
  };

  const merge = { ...init, ...answersAll };

  let final = {
    ...merge
  };

  const testName = localStorage.getItem('test_name');

  if (testName === 'B14LT1') {
    final = {
      ...final,
      "11": merge[11] && merge[11][0] ? merge[11][0] : null,
      "12": merge[11] && merge[11][1] ? merge[11][1] : null,
      "13": merge[13] && merge[13][0] ? merge[13][0] : null,
      "14": merge[13] && merge[13][1] ? merge[13][1] : null
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