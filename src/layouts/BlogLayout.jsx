import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

function BlogLayout() {
  return (
    <div className="d-flex flex-column min-vh-100 blog-theme">
      <Header />
      <main className="flex-grow-1">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <Outlet />
            </div>
            <div className="col-lg-4">
              <div className="card bg-light mb-4">
                <div className="card-body">
                  <h5 className="card-title">Categories</h5>
                  <ul className="list-unstyled">
                    <li><a href="#" className="text-decoration-none">Craft of Code</a></li>
                    <li><a href="#" className="text-decoration-none">Digital Blacksmithing</a></li>
                    <li><a href="#" className="text-decoration-none">Industry Insights</a></li>
                    <li><a href="#" className="text-decoration-none">Case Breakdowns</a></li>
                  </ul>
                </div>
              </div>
              <div className="card bg-light">
                <div className="card-body">
                  <h5 className="card-title">Resource Library</h5>
                  <ul className="list-unstyled">
                    <li><a href="#" className="text-decoration-none">Downloadable Guides</a></li>
                    <li><a href="#" className="text-decoration-none">Webinar Recordings</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default BlogLayout;