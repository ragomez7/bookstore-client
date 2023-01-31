import Header from './Header';
import Layout from './Layout';
import { useEffect } from 'react';
import PortalButton from './PortalButton';

const Index = () => {
  useEffect(() => {
    document.title = "John's Bookstore"
  }, [])
  return (
    <div style={{
      height: '100%'
    }} className="Index">
      <Header />
      <Layout>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '75%',
          height: '100%',
          marginTop: 50,
          flexWrap: 'wrap',
        }}>
          <PortalButton 
            title='Manage Books' 
            linkTo='/books' 
            backgroundColor="#A4BAB7" 
          />
          <PortalButton 
            title='Manage Readers' 
            linkTo='/readers' 
            backgroundColor="#EFF2C0" 
          />
          <PortalButton 
            title='Manage Authors' 
            linkTo='/authors' 
            backgroundColor="#BEA57D" 
          />
           {/* <PortalButton 
            title='Lend to New Reader' 
            linkTo='/' 
            backgroundColor="#BEA57D" 
          /> */}
        </div>
      </Layout>
    </div>
  );
}

export default Index;
