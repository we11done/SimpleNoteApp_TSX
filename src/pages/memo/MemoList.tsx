import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar, {
  SidebarTitle,
  SidebarBackButton,
} from '../../components/Sidebar';
import Skelton from '../../components/Skelton';
import Layout from '../../components/Layout';
import Main from '../../components/Main';
import AddMemoBtn from '../../components/AddMenuBtn';
import MemoRouter from '../../routes/memo';
import { Memo } from '../../models';
import { List, ListItem } from '../../components/List';

type MemoListProps = {
  apiCalling: boolean;
  memos: Memo[];
};

const MemoPage = ({ memos, apiCalling }: MemoListProps) => {
  const { pathname } = useLocation();
  const hasMemos = memos.length > 0;

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
        {apiCalling ? (
          <Skelton style={{ margin: '10px' }} />
        ) : hasMemos ? (
          renderMemoList(memos)
        ) : null}
      </Sidebar>
      <Main>
        <div style={{ margin: '10px', position: 'relative' }}>
          {pathname !== '/memo/add' && <AddMemoBtn />}
          {!hasMemos && pathname !== '/memo/add' && !apiCalling && (
            <p
              style={{
                position: 'absolute',
                top: '50px',
                left: '45%',
                textAlign: 'center',
              }}
            >
              Create Memo
            </p>
          )}
          <MemoRouter />
        </div>
      </Main>
    </Layout>
  );
};

export default MemoPage;
