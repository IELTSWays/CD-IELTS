// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";

const usePostTestDone = () => {

  const navigate = useNavigate();
  const answersAll = useAppSelector((state) => state.user.answersAll)
  
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

  // for (let i = 1; i <= 40; i++) {
  // const key = i.toString().padStart(4, '00');
  // init[key] = null;
  // }
  
  const final = {...init, ...answersAll};
  
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