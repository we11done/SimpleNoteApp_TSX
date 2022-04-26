import React from 'react';
import { Link } from 'react-router-dom';
import { Memo } from '../../models';
import Layout from '../../components/Layout';
import Sidebar, { SidebarTitle } from '../../components/Sidebar';
import Main from '../../components/Main';
import AddMemoBtn from '../../components/AddMenuBtn';
import { List, ListItem } from '../../components/List';

type HomePageProps = {
  memos: Memo[];
  deletedMemos: Memo[];
};

const HomePage = ({ memos, deletedMemos }: HomePageProps) => {
  return (
    <Layout>
      <Sidebar>
        <SidebarTitle>Folders</SidebarTitle>
        <List>
          <ListItem first>
            <Link to='/memo'>Memo ({memos.length})</Link>
          </ListItem>
          <ListItem>
            <Link to='/trash'>Trash ({deletedMemos.length})</Link>
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
