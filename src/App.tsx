import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReportListPage from './pages/ReportListPage';
import ReportDetailPage from './pages/ReportDetailPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/reports/:pageNum"
					element={<ReportListPage />}
				></Route>
				<Route
					path="/report/:reportId"
					element={<ReportDetailPage />}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
