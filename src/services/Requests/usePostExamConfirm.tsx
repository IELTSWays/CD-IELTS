// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";

const usePostExamConfirm = () => {

  const navigate = useNavigate();
  const answersAll = useAppSelector((state) => state.user.answersAll)
  
  const init = {
    '00001': null,
    '00002': null,
    '00003': null,
    '00004': null,
    '00005': null,
    '00006': null,
    "00007": null,
    '00008': null,
    '00009': null,
    '00010': null,
    '00011': null,
    '00012': null,
    '00013': null,
    '00014': null,
    '00015': null,
    '00016': null,
    "00017": null,
    '00018': null,
    '00019': null,
    '00020': null,
    '00021': null,
    '00022': null,
    '00023': null,
    '00024': null,
    '00025': null,
    '00026': null,
    "00027": null,
    '00028': null,
    '00029': null,
    '00030': null,
    '00031': null,
    '00032': null,
    '00033': null,
    '00034': null,
    '00035': null,
    '00036': null,
    "00037": null,
    '00038': null,
    '00039': null,
    '00040': null,
  };
  
  const final = {...init, ...answersAll};
  
  const { isLoading, isSuccess, data, isError, refetch } = useQuery({
    enabled: false,
    queryKey: ['postTestDone'],
    queryFn: async () => {
      const response = await api.patch(`exam/answer/${localStorage.getItem('test_id')}`, {
        "confirm": true,
      })
      const data = await response.data
      localStorage.setItem('confirm', true)
      return data
    },
  })
  return { isLoading, isSuccess, data, isError, refetch };
};

export default usePostExamConfirm;