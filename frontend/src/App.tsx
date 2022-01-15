import Navbar from "components/Navbar";
import Form from "pages/Form";
import Listing from "pages/Listing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listing />} />
          <Route path='/form'>
            <Route path=":movieId" element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
