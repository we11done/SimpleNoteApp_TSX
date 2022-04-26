import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar, {
  SidebarTitle,
  SidebarBackButton,
} from '../../components/Sidebar';
import Layout from '../../components/Layout';
import Main from '../../components/Main';
import AddMemoBtn from '../../components/AddMenuBtn';
import MemoRouter from '../../routes/memo';
import { Memo } from '../../models';
import { fetchMemoList } from '../../apis';
import { List, ListItem } from '../../components/List';

const MemoPage = () => {
  const [memos, setMemos] = useState<Memo[]>([]);
  const { pathname } = useLocation();
  const hasMemos = memos.length > 0;

  useEffect(() => {
    setMemos(fetchMemoList());
  }, [pathname]);

  const renderMemoList = (memos: Memo[]) => {
    return (
      <List>
        {memos.map((memo, idx) => (
          <ListItem key={memo.id} first={idx === 0}>
            <Link to={`/memo/${memo.id}`}>{memo.content.substring(0, 15)}</Link>
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <Layout>
      <Sidebar>
        <SidebarBackButton to='/' />
        <SidebarTitle>Memo</SidebarTitle>
        {hasMemos && renderMemoList(memos)}
      </Sidebar>
      <Main>
        <div style={{ margin: '10px' }}>
          {pathname !== '/memo/add' && <AddMemoBtn />}
          {!hasMemos && pathname !== '/memo/add' && <p>Create Memo</p>}
          <MemoRouter />
        </div>
      </Main>
    </Layout>
  );
};

export default MemoPage;
