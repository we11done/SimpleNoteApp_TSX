import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Sidebar, {
  SidebarTitle,
  SidebarBackButton,
} from '../../components/Sidebar';
import Main from '../../components/Main';
import { Memo } from '../../models';
import TrashRouter from '../../routes/trash';
import { List, ListItem } from '../../components/List';

type TrashPageProps = {
  deletedMemos: Memo[];
};

const TrashPage = ({ deletedMemos }: TrashPageProps) => {
  const hasMemos = deletedMemos.length > 0;

  const renderMemoList = (deletedMemos: Memo[]) => (
    <List>
      {deletedMemos.map((memo, idx) => (
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
        {hasMemos && renderMemoList(deletedMemos)}
      </Sidebar>
      <Main>
        <div style={{ margin: '10px', position: 'relative' }}>
          {!hasMemos && (
            <p
              style={{
                position: 'absolute',
                top: '50px',
                left: '45%',
                textAlign: 'center',
              }}
            >
              Trash can is empty.
            </p>
          )}
          <TrashRouter />
        </div>
      </Main>
    </Layout>
  );
};

export default TrashPage;
