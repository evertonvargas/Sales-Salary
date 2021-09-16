import { useState } from "react";

import { Dashboard } from "./Dashboard";
import { NewSallerModal } from "./NewSallerModal";

import { GlobalStyle } from "./styles/global";

function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] =
    useState(false);

  function handleOpenNewTransctions() {
    setIsNewTransactionsModalOpen(true);
  }

  function handleCloseNewTransctions() {
    setIsNewTransactionsModalOpen(false);
  }

  return (
    <>
    <Dashboard onOpenNewTransctionsModal={handleOpenNewTransctions}/>
    <NewSallerModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransctions}
      />
    <GlobalStyle />
    </>
  );
}

export default App;
