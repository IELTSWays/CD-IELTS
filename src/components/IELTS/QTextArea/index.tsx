import React, { useState, useEffect } from "react";

// api
import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'
// api

const index = ({ id }: any) => {

  const [inputText, setInputText] = useState("");
  const [saving, setSaving] = useState(false);

  const postAnswer = useQuery({
    enabled: false,
    queryKey: ['postAnswer'],
    queryFn: async () => {
      const response = await axiosInstance.post(`exam/answer/${localStorage.getItem('test_id')}`, {
        "test_done": false,
        "answers": { '00001': inputText },
      })
      const data = await response.data
      return data
    },
  })
  
  console.log(id.toString());

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      inputText && postAnswer.refetch()
      inputText && postAnswer.isSuccess && setSaving(true);
    }, 3000)
    return () => clearTimeout(delayDebounceFn)
  }, [inputText])

  useEffect(() => {
    saving && setTimeout(() => setSaving(false), 1500);
  }, [saving]);

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputText(event.target.value);
  };

  const wordCountHandler = (str: string) => {
    return str.split(/\s+/)
      .filter(Boolean).length;
  }

  return (
    <div className={`ielts-textarea`}>
      <textarea
        id={id}
        value={inputText}
        autoFocus
        onChange={handleChange}
        placeholder='Type here...'
      />
      <span> Words: {wordCountHandler(inputText)} </span>
      <br />
      <p> {saving && 'Saving...'} </p>

    </div>
  );
};

export default index;