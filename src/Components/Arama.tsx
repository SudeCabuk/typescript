import React from 'react';
import { Input, Space } from 'antd';
import type { GetProps } from 'antd';


type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;


function Arama ({setSearchText} :{setSearchText: any}) {
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => setSearchText( value);

  return (
    <Space direction="vertical">
      
      <Search className ="input" placeholder="search text" onSearch={onSearch} enterButton />
      
    </Space>
  );
}

export default Arama;