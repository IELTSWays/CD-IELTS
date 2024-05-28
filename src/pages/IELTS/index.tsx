import React from "react";

// ============================== 10 ==============================
import B10LT1 from "@/pages/IELTS/10/01/L";
import B10LT2 from "@/pages/IELTS/10/02/L";
import B10LT3 from "@/pages/IELTS/10/03/L";
import B10LT4 from "@/pages/IELTS/10/04/L";
// ============================== 13 ==============================
import B13LT2 from "@/pages/IELTS/13/02/L";
import B13LT4 from "@/pages/IELTS/13/04/L";

// ============================== 14 ==============================
import B14LT1 from "@/pages/IELTS/14/01/L";
import B14LT2 from "@/pages/IELTS/14/02/L";
import B14LT3 from "@/pages/IELTS/14/03/L";
import B14LT4 from "@/pages/IELTS/14/04/L";

import B14RT1 from "@/pages/IELTS/14/01/R";
import B14RT2 from "@/pages/IELTS/14/02/R";
import B14RT3 from "@/pages/IELTS/14/03/R";

import B14WT1 from "@/pages/IELTS/14/01/W";
import B14WT2 from "@/pages/IELTS/14/02/W";

// ============================== 15 ==============================

// ============================== 16 ==============================
import B16LT3 from "@/pages/IELTS/16/03/L";

// ============================== 17 ==============================
import B17LT1 from "@/pages/IELTS/17/01/L";
import B17LT2 from "@/pages/IELTS/17/02/L";
import B17LT3 from "@/pages/IELTS/17/03/L";
import B17LT4 from "@/pages/IELTS/17/04/L";

// ============================== 18 ==============================
import B18LT1 from "@/pages/IELTS/18/01/L";

const testComponents = {
  'B10LT1': B10LT1,
  'B10LT2': B10LT2,
  'B10LT3': B10LT3,
  'B10LT4': B10LT4,
  'B13LT2': B13LT2,
  'B13LT4': B13LT4,
  'B14LT1': B14LT1,
  'B14LT2': B14LT2,
  'B14LT3': B14LT3,
  'B14LT4': B14LT4,
  'B14RT1': B14RT1,
  'B14RT2': B14RT2,
  'B14RT3': B14RT3,
  'B14WT2': B14WT2,
  'B14AWT1': B14WT1,
  'B16LT3': B16LT3,
  'B17LT1': B17LT1,
  'B17LT2': B17LT2,
  'B17LT3': B17LT3,
  'B17LT4': B17LT4,
  'B18LT1': B18LT1,
};

const IELTS = () => {

  const TestComponent = testComponents[localStorage.getItem('test_name')];
  return TestComponent && <TestComponent />;
  // return (
  //   <>

  //     {/* // ============================== 10 ============================== */}
  //     {localStorage.getItem('test_name') === 'B10LT1' && <B10LT1 />}
  //     {localStorage.getItem('test_name') === 'B10LT2' && <B10LT2 />}
  //     {localStorage.getItem('test_name') === 'B10LT3' && <B10LT3 />}
  //     {localStorage.getItem('test_name') === 'B10LT4' && <B10LT4 />}

  //     {/* // ============================== 13 ============================== */}
  //     {localStorage.getItem('test_name') === 'B13LT2' && <B13LT2 />}
  //     {localStorage.getItem('test_name') === 'B13LT4' && <B13LT4 />}

  //     {/* // ============================== 14 ============================== */}
  //     {localStorage.getItem('test_name') === 'B14LT1' && <B14LT1 />}
  //     {localStorage.getItem('test_name') === 'B14LT2' && <B14LT2 />}
  //     {localStorage.getItem('test_name') === 'B14LT3' && <B14LT3 />}
  //     {localStorage.getItem('test_name') === 'B14LT4' && <B14LT4 />}

  //     {localStorage.getItem('test_name') === 'B14RT1' && <B14RT1 />}
  //     {localStorage.getItem('test_name') === 'B14RT2' && <B14RT2 />}
  //     {localStorage.getItem('test_name') === 'B14RT3' && <B14RT3 />}

  //     {localStorage.getItem('test_name') === 'B14WT2' && <B14WT2 />}
  //     {localStorage.getItem('test_name') === 'B14AWT1' && <B14WT1 />}

  //     {/* // ============================== 15 ============================== */}

  //     {/* // ============================== 16 ============================== */}
  //     {localStorage.getItem('test_name') === 'B16LT3' && <B16LT3 />}

  //     {/* // ============================== 17 ============================== */}
  //     {localStorage.getItem('test_name') === 'B17LT1' && <B17LT1 />}
  //     {localStorage.getItem('test_name') === 'B17LT2' && <B17LT2 />}
  //     {localStorage.getItem('test_name') === 'B17LT3' && <B17LT3 />}
  //     {localStorage.getItem('test_name') === 'B17LT4' && <B17LT4 />}

  //     {/* // ============================== 18 ============================== */}
  //     {localStorage.getItem('test_name') === 'B18LT1' && <B18LT1 />}
  //   </>
  // );
};

export default IELTS;