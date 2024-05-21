import React from "react";

// 14 Test 1
import B14LT1 from "@/pages/IELTS/14/01/L";
import B14RT1 from "@/pages/IELTS/14/01/R";
import B14WT1 from "@/pages/IELTS/14/01/W";

// 14 Test 2
import B14LT2 from "@/pages/IELTS/14/02/L";
import B14RT2 from "@/pages/IELTS/14/02/R";
import B14WT2 from "@/pages/IELTS/14/02/W";

// 14 Test 3
import B14LT3 from "@/pages/IELTS/14/03/L";
import B14RT3 from "@/pages/IELTS/14/03/R";
import B14WT3 from "@/pages/IELTS/14/03/W";

// 14 Test 3
import B14LT4 from "@/pages/IELTS/14/04/L";

const IELTS = () => {
  return (
    <>
      {/* 14 Test 1 */}
      {localStorage.getItem('test_name') === 'B14LT1' && <B14LT1 />}
      {localStorage.getItem('test_name') === 'B14RT1' && <B14RT1 />}
      {localStorage.getItem('test_name') === 'B14AWT1' && <B14WT1 />}

      {/* 14 Test 2 */}
      {localStorage.getItem('test_name') === 'B14LT2' && <B14LT2 />}
      {localStorage.getItem('test_name') === 'B14RT2' && <B14RT2 />}
      {localStorage.getItem('test_name') === 'B14WT2' && <B14WT2 />}

      {/* 14 Test 3 */}
      {localStorage.getItem('test_name') === 'B14LT3' && <B14LT3 />}
      {localStorage.getItem('test_name') === 'B14RT3' && <B14RT3 />}

      {/* 14 Test 4 */}
      {localStorage.getItem('test_name') === 'B14LT4' && <B14LT4 />}
    </>
  );
};

export default IELTS;