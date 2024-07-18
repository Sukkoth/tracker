"use client";

import React, { useState } from "react";
import First from "./First";
import Second from "./Second";

function AuthPage() {
  const [first, setFirst] = useState(true);

  function handlePageChange(first: boolean) {
    setFirst(first);
  }

  return first ? (
    <First handlePageChange={handlePageChange} />
  ) : (
    <Second handlePageChange={handlePageChange} />
  );
}

export default AuthPage;
