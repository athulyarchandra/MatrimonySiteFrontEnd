import Add from '../components/Add'
import Header  from '../components/Header'
import User from '../components/User'

const Dashboard = () => {

  return (
    <>
    <Header insideDashboard={true}/>
    <div style={{paddingTop:'100px'}} className='container-fluid'>
    <h1>Helloo <span className='text-warning'>name</span></h1>
      <div className="row mt-3">
        <div className="col-lg-3">
          <User/>
        </div>
        <div className="col-lg-9">
        <Add/>
        </div>
      </div>
    </div>
  </>
  )
}

export default Dashboard