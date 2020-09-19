import React from 'react';
import { MDBRow } from 'mdbreact';
import AdminCardSection1 from './sections/AdminCardSection1';
import AdminCardSection2 from './sections/AdminCardSection2';
// import TableSection from './sections/TableSection';
import SideNavigation from '../sideNavigation';
import '../dash.css';
import Footer from '../Footer';
import BreadcrumSection from './sections/BreadcrumSection';
// import ChartSection1 from './sections/ChartSection1';
// import ChartSection2 from './sections/ChartSection2';
// import MapSection from './sections/MapSection';
// import ModalSection from './sections/ModalSection';

const DashboardPage =  () => {
  return (
    <React.Fragment>
    <main id="content" className="p-5">
      <SideNavigation />
      <BreadcrumSection />
      <AdminCardSection1 />
      {/* <ChartSection1 /> */}
      {/* <TableSection />
      <ChartSection2 /> */}
      <MDBRow className="mb-4">
          {/* <MapSection />
          <ModalSection /> */}
      </MDBRow>
      <AdminCardSection2 />
    </main>
    <Footer />
    </React.Fragment>
  )
}

export default DashboardPage;