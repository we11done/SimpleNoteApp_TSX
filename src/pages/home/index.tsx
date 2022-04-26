import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Sidebar, { SidebarTitle } from '../../components/Sidebar';
import Main from '../../components/Main';
import AddMemoBtn from '../../components/AddMenuBtn';
import { List, ListItem } from '../../components/List';

const HomePage = () => {
  return (
    <Layout>
      <Sidebar>
        <SidebarTitle>Folders</SidebarTitle>
        <List>
          <ListItem first>
            <Link to='/memo'>Memo</Link>
          </ListItem>
          <ListItem>
            <Link to='/trash'>Trash</Link>
          </ListItem>
        </List>
      </Sidebar>
      <Main>
        <div style={{ margin: '10px' }}>
          <AddMemoBtn />
        </div>
      </Main>
    </Layout>
  );
};

export default HomePage;
