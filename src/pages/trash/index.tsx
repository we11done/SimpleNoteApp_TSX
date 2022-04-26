import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Layout from '../../components/Layout';
import Sidebar, {
  SidebarTitle,
  SidebarBackButton,
} from '../../components/Sidebar';
import Main from '../../components/Main';
import { Memo } from '../../models';
import { fetchDeletedMemoList } from '../../apis';
import TrashRouter from '../../routes/trash';
import { List, ListItem } from '../../components/List';

const TrashPage = () => {
  const [memos, setMemos] = useState<Memo[]>([]);
  const { pathname } = useLocation();
  const hasMemos = memos.length > 0;

  useEffect(() => {
    setMemos(fetchDeletedMemoList());
  }, [pathname]);

  const renderMemoList = (memos: Memo[]) => (
    <List>
      {memos.map((memo, idx) => (
        <ListItem key={idx} first={idx === 0}>
          <Link to={`/trash/${memo.id}`}>{memo.content.substring(0, 15)}</Link>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Layout>
      <Sidebar>
        <SidebarBackButton to='/' />
        <SidebarTitle>Trash</SidebarTitle>
        {hasMemos && renderMemoList(memos)}
      </Sidebar>
      <Main>
        {!hasMemos && <p>Trash can is empty.</p>}
        <div style={{ margin: '10px' }}>
          <TrashRouter />
        </div>
      </Main>
    </Layout>
  );
};

export default TrashPage;
