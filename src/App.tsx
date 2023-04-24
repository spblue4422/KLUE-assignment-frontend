import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ReportListPage from './pages/ReportListPage';
import ReportDetailPage from './pages/ReportDetailPage';

function App() {
	return (
			<Routes>
				<Route
					path="/admin/reports/:pageNum"
					element={<ReportListPage />}
				></Route>
				<Route
					path="/admin/report/:reportId"
					element={<ReportDetailPage />}
				></Route>
			</Routes>
	);
}

export default App;
