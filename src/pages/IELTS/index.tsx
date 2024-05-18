import React from "react";

// 14 Test 1
import B14WT1 from "@/pages/IELTS/14/01/IELTSWriting";
import B14RT1 from "@/pages/IELTS/14/01/IELTSReading";
import B14LT1 from "@/pages/IELTS/14/01/IELTSListening";

// 14 Test 2
import B14WT2 from "@/pages/IELTS/14/02/IELTSWriting";
import B14RT2 from "@/pages/IELTS/14/02/IELTSReading";
import B14LT2 from "@/pages/IELTS/14/02/IELTSListening";

const IELTS = () => {
  return (
    <>
      {/* 14 Test 1 */}
      {localStorage.getItem('test_name') === 'B14AWT1' && <B14WT1 />}
      {localStorage.getItem('test_name') === 'B14RT1' && <B14RT1 />}
      {localStorage.getItem('test_name') === 'B14LT1' && <B14LT1 />}

      {/* 14 Test 2 */}
      {localStorage.getItem('test_name') === 'B14WT2' && <B14WT2 />}
      {localStorage.getItem('test_name') === 'B14LT2' && <B14LT2 />}
      {localStorage.getItem('test_name') === 'B14RT2' && <B14RT2 />}
      
    </>
  );
};

export default IELTS;