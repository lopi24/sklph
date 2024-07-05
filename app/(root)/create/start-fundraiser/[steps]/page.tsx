"use client";

import FundraiserId from "./[fundraiserId]/page";
// fix redirect to the form
const Steps = ({ params }: { params: { id: string } }) => {
  console.log(params);
  return <FundraiserId />;
};

export default Steps;
