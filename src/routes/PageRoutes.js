import Create from "components/Create/Create";
import ReadAll from "components/ReadAll/ReadAll";
import ReadById from "components/ReadById/ReadById";
import Update from "components/Update/Update";
import Delete from "components/Delete/Delete";
import { Routes, Route } from "react-router-dom";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/create" element={<Create />} />
      <Route path="/" element={<ReadAll />} />
      <Route path="/find/:id" element={<ReadById />} />
      <Route path="/update/:id" element={<Update />} />
      <Route path="/delete/:id" element={<Delete />} />
    </Routes>
  );
}
